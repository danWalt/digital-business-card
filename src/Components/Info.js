import React from "react";
import Headshot from "../images/headshot.jpg";
import "../styles/style.css";

export default function Info() {
  return (
    <div className="info-div">
      <img className="headshot-img" src={Headshot}></img>
      <div className="info-text">
        <h1 className="info-name">Daniel Walters</h1>
        <h3 className="info-position">Technical Support Engineer</h3>
      </div>
      <div className="button-div">
        <button className="email-button">Email</button>
        <button className="linkedin-button">LinkedIn</button>
      </div>
    </div>
  );
}
