import React from "react";
import Cat from "../images/cat-tax.jpeg";
import "../styles/style.css";

export default function Interests() {
  return (
    <div className="interests-div">
      <h2 className="interests-header">Interests</h2>
      <p className="interests-para">
        I love running and workingout in general, specifically aerobic
        activities. I have a 9 years old Persian cat named Sheldon
      </p>
      <img className="cat-img" src={Cat}></img>
    </div>
  );
}
