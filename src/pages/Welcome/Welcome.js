import React from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
import Intro from "../../components/Welcome/Intro/Intro";
import Stream from "../../components/Welcome/Stream/Stream";
import News from "../../components/Welcome/News/News";


export default function Welcome() {
    return (
      <div className="welcome">
          <Intro />
          <Stream />
          <News />
      </div>
    );
}