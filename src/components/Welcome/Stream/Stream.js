import React from "react";
import { Link } from "react-router-dom";
import "./stream.scss";
import stream from "../../../assets/images/welcome/stream.png";
     
export default function News() {
    return (
        <div className="stream">
            <h1>Stream Anywhere</h1>
            <p>Buster is available for free on Windows, Android, iOS, <br/> Apple TV, Android TV and the web.</p>
            <img src={stream} alt="Stream anywhere"/>
        </div>
    );
}
