import React from "react";
import { Link } from "react-router-dom";
import hearoLogoMain from "../images/hearoLogoMain.svg";
import landingVector from "../images/landingVector.svg";


export default function LandingPage() {
    return (
        <div>
            <header className="header--logo">
                <img className="landing--logo" src={hearoLogoMain}/>
            </header>
            <main>
                <div className="container">
                <img className="landing--vector" src={landingVector}/>
                <Link to="/textStart">
                    <button className="form--startButton">Tap to Start</button>
                </Link>
                </div>
            </main>
        </div>
    )
}