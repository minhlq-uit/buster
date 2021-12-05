import React from "react";
import "./preloader.scss";
import login_bg from "../../assets/images/login_bg.jpg";
export default function Preloader() {
  return (
    <div
      className="preloader-layout"
      style={{ backgroundImage: `url(${login_bg})` }}
    >
      <div className="preloader-load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
