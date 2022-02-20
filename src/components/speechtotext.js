import React, { useState, useEffect } from 'react';

const initWebsocket = () => {
  window.ws = new WebSocket(`ws://localhost:8080`)
  const ws = window.ws
  ws.onopen = () => {
    ws.send(JSON.stringify({ isReactClient: true }))
    console.log('Websocket connected')
  }

  return ws
}

function SpeechToTextApp() {
  const [transcribedMsg, setTranscribedMsg] = useState('Start speaking')

  useEffect(() => {
    if (!window.ws) {
      const ws = initWebsocket()
  
      ws.onmessage = (msg) => {
        // console.log(msg.data)
        setTranscribedMsg(msg.data)
      }
    }

    return window.ws.close()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src="/desktop/hearo_logo.png"/>
        {/* REPLACE ^ WITH HEARO LOGO */}
        {/* <img src={logo} 
          className="App-logo" alt="logo" /> */}
        <p className="message">
          {transcribedMsg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default SpeechToTextApp;