import React from "react";
import hearoLogoWhite from "../images/hearoLogoWhite.svg";
import barVector from "../images/barVector.svg";
import textDisplay from "../images/textDisplay.svg";
import { Link } from "react-router-dom";

export default function SpeechToTextPage() {
    return (
        <div>
            <header className="header--stt">
                <img className="stt--vector" src={barVector} />
                <img className="stt--logo" src={hearoLogoWhite} />
            </header>
            <main>
                <h1>Click Link to Start</h1>
                <div className="stt--container">
                <img className="stt--textDisplay" src={textDisplay}/>
                </div>
                <Link to="/">
                <button className="stt--endButton">End Stream</button>
                </Link>
            </main>
        </div>
    )
}