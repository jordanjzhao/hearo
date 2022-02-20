import './App.css';
import "./index.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import SpeechToTextPage from './components/SpeechToTextPage';
<<<<<<< HEAD
import { Route, BrowserRouter, Routes } from "react-router-dom";
=======
import { Route, BrowserRouter, Routes } from 'react-router-dom';
>>>>>>> 99c27946fe6bf7c1629acc261c0c3d5d5a87f344

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
            <Route path="/" element={<LandingPage />} />
            <Route path="/textStart" element={<SpeechToTextPage />} />
=======
          <Route path="/" element={<LandingPage />} />
          <Route path="/start" element={<SpeechToTextPage />} />
>>>>>>> 99c27946fe6bf7c1629acc261c0c3d5d5a87f344
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
