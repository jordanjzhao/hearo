import React, { useState, useEffect } from 'react';
import './App.css';

const initWebsocket = () => {
  window.ws = new WebSocket(`wss://localhost:8080`)
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
}

