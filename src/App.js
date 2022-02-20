import './App.css';
import "./index.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import SpeechToTextPage from './components/SpeechToTextPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SpeechToTextPage />
    </div>
  );
}

export default App;
