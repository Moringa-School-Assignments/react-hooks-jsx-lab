import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About me</h2>
      <p>Code is my first wife &#129315;&#129315;&#129315;</p>
      <img src={image} alt={"a gif of people talking"}/>
    </div>
  );
}

export default About;
