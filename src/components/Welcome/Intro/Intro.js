import React from "react";
import { Link } from "react-router-dom";
import "../../../components/Welcome/Intro/intro.scss"

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>BUSTER</h1>
                <h3>No Ads</h3>
                <h3>Unlimited Movies & TV</h3>
                <h3>Personalizing experience</h3>
                <p>Always Renovate. Cancel anytime.</p>
                <Link to="/Login">
                    <button>Watch now</button>
                </Link>
            </div>
        </div>
    );
}