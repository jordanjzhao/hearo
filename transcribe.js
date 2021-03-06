const express = require("express");

const WebSocket = require("ws");
const WaveFile = require("wavefile").WaveFile;

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

let assembly;
let chunks = [];
let reactClient = false;

wss.on("connection", (ws) => {
  console.info("New Connection Initiated");

  ws.on("message", (message) => {
    const msg = JSON.parse(message);
    
    if (msg.isReactClient) {
      console.log('React client is connected')
      reactClient = ws
    } else if (!assembly) {
      return console.error("AssemblyAI's WebSocket must be initialized.");
    } 
    switch (msg.event) {
      case "connected":
        console.info("A new call has started.");
        assembly.onerror = console.error;
        const texts = {};
        assembly.onmessage = (assemblyMsg) => {
          let msg = '';
      	  const res = JSON.parse(assemblyMsg.data);
      	  texts[res.audio_start] = res.text;
      	  const keys = Object.keys(texts);
      	  keys.sort((a, b) => a - b);
      	  for (const key of keys) {
            if (texts[key]) {
              msg += ` ${texts[key]}`;
            }
          }
      	console.log(msg);
        if (reactClient) {
        reactClient.send(msg)
          }
        };

        break;

      case "start":
        console.info("Starting media stream...");
        break;

      case "media":       
        const twilioData = msg.media.payload;

        // Here are the current options explored using the WaveFile lib:

        // We build the wav file from scratch since it comes in as raw data
        let wav = new WaveFile();

        // Twilio uses MuLaw so we have to encode for that
        wav.fromScratch(1, 8000, "8m", Buffer.from(twilioData, "base64"));

        // This library has a handy method to decode MuLaw straight to 16-bit PCM
        wav.fromMuLaw();

        // Here we get the raw audio data in base64
        const twilio64Encoded = wav.toDataURI().split("base64,")[1];

        // Create our audio buffer
        const twilioAudioBuffer = Buffer.from(twilio64Encoded, "base64");

        // We send data starting at byte 44 to remove wav headers so our model sees only audio data
        chunks.push(twilioAudioBuffer.slice(44));

        // We have to chunk data b/c twilio sends audio durations of ~20ms and AAI needs a min of 100ms
        if (chunks.length >= 5) {
          // Here we want to concat our buffer to create one single buffer
          const audioBuffer = Buffer.concat(chunks);

          // Re-encode to base64
          const encodedAudio = audioBuffer.toString("base64");

          // Finally send to assembly and clear chunks
          assembly.send(JSON.stringify({ audio_data: encodedAudio }));
          chunks = [];
        }

        break;

      case "stop":
        console.info("Call has ended");
        assembly.send(JSON.stringify({ terminate_session: true }));
        break;
    }
  });
});

app.get("/", (_, res) => res.send("Twilio Live Stream App"));

app.post("/", async (req, res) => {
  assembly = new WebSocket(
    "wss://api.assemblyai.com/v2/realtime/ws?sample_rate=8000",
    { headers: { authorization: process.env.APIKEY } }
  );

  res.set("Content-Type", "text/xml");
  res.send(
    `<Response>
       <Start>
         <Stream url='wss://${req.headers.host}' />
       </Start>
       <Say>
         Start speaking to see your audio transcribed in the console
       </Say>
       <Pause length='60' />
     </Response>`
  );
});

console.log("Listening on Port 8080");
server.listen(8080);
