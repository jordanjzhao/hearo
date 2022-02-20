import './App.css';
import "./index.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import SpeechToTextPage from './components/SpeechToTextPage';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/textStart" element={<SpeechToTextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
