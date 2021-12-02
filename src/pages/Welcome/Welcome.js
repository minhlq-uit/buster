import React from "react";
import "./welcome.scss";
import Questions from "../../components/Welcome/Questions/Questions";
import Footer from "../../components/Welcome/Footer/Footer";

export default function Welcome() {
  return (
    <div className="welcome">
      <Questions />
      <Footer />
    </div>
  );
}
