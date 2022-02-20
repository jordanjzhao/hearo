import hearoLogoMainWhite from "../images/hearoLogoMainWhite.svg";
import barVector from "../images/barVector.svg";
import textDisplay from "../images/textDisplay.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import React, { useEffect } from 'react';

const initWebsocket = () => {
    window.ws = new WebSocket(`ws://localhost:8080`,)
    const ws = window.ws
    ws.onopen = () => {
      ws.send(JSON.stringify({ isReactClient: true }))
      console.log('Websocket connected')
    }
  
    return ws
  }

export default function SpeechToTextPage() {
    const [inputMsg, setInputMsg] = useState("");

    const [transcribedMsg, setTranscribedMsg] = useState('Start speaking')

    useEffect(() => {
      if (!window.ws) {
        const ws = initWebsocket()
    
        ws.onmessage = (msg) => {
          console.log(msg.data)
          setInputMsg(msg.data)
          //setTranscribedMsg(msg.data)
        }
      }
  
      //return window.ws.close()
    }, [])

    const handleTypeInputMsg = (event) => {
        setInputMsg(event.target.value);
    }

    return (
        <div>
            <header className="header--stt">
                <img className="stt--vector" src={barVector} />
                <img className="stt--logo" src={hearoLogoMainWhite} />
            </header>
            <main>
                <h1>Connecting to Stream ... </h1>
                <div className="stt--container">
                <textarea rows = "20" cols = "60" id="textbodid" className="stt--textDisplay" 
                placeholder="Text will stream shortly..."
                value={inputMsg}
                >
                </textarea>
                </div>
                <Link to="/">
                <button className="stt--endButton">End Stream</button>
                </Link>
            </main>
        </div>
    )
}