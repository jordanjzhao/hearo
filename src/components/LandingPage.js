import React from "react";
import { Link } from "react-router-dom";
import hearoLogoMain from "../images/hearoLogoMain.svg";
import landingVector from "../images/landingVector.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <header className="header--logo">
                <img className="landing--logo" src={hearoLogoMain}/>
            </header>
            <main>
                <div className="container">
<<<<<<< HEAD
                <img className="landing--vector" src={landingVector}/>
                <Link to="/textStart">
                    <button className="form--startButton">Tap to Start</button>
=======
                <img className="landing--vector" src={landingVector}/> 
                <Link to="/start">
                    <button className="form--startButton">Tap to Start</button> 
>>>>>>> 99c27946fe6bf7c1629acc261c0c3d5d5a87f344
                </Link>
                </div>
            </main>
        </div>
    )
}