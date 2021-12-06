import React from "react";
import "./welcome.scss";
// import { Link } from "react-router-dom";
import Intro from "../../components/Welcome/Intro/Intro";
import Stream from "../../components/Welcome/Stream/Stream";
import New from "../../components/Welcome/New/New";
import Questions from "../../components/Welcome/Questions/Questions";
import Footer from "../../components/Welcome/Footer/Footer";

export default function Welcome() {
  return (
    <div className="welcome">
      <Intro />
      <Stream />
      <New />
      <Questions />
      <Footer />
    </div>
  );
}
