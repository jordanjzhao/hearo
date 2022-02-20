import React from "react";
import hearoLogoWhite from "../images/hearoLogoWhite.svg";
import barVector from "../images/barVector.svg";
import textDisplay from "../images/textDisplay.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textField: {
        width: "120vh",
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "5vh"
    }
})

export default function SpeechToTextPage() {
    const classes = useStyles();
    const [inputMsg, setInputMsg] = useState("");

    const handleTypeInputMsg = (event) => {
        console.log(event.target.value);
        setInputMsg(event.target.value);
    }

    return (
        <div>
            <header className="header--stt">
                <img className="stt--vector" src={barVector} />
                <img className="stt--logo" src={hearoLogoWhite} />
            </header>
            <main>
                <h1>Click Link to Start</h1>
                <div className="stt--container">
                <textarea rows = "20" cols = "60" id="textbodid" className="stt--textDisplay" 
                placeholder="Text will stream shortly..."
                value={inputMsg}
                onChange={handleTypeInputMsg}>
                </textarea>
                </div>
                <Link to="/">
                <button className="stt--endButton">End Stream</button>
                </Link>
            </main>
        </div>
    )
}