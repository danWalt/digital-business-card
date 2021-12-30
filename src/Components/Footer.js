import React from "react";
import "../styles/style.css";
import Github from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";

export default function Footer() {
  return (
    <div className="footer-div">
      <ul className="footer-list">
        <li>
          <img src={Github}></img>
        </li>
        <li>
          <img src={linkedin}></img>
        </li>
      </ul>
    </div>
  );
}
