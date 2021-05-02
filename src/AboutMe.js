import React from "react";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div className="about-me">
      <div className="profile-photo"></div>
      <div className="aboutme-section">
        <h1>Who am I?</h1>
        <p>
          Hi, my name is Ahmed Škulj. I am from Bosnia and Herzegovina.
          Currently I am studying Software Engineering at the University of
          Zenica. I started coding about two years ago, and since then I made
          over 20 different repositories, big and small. I prefer building
          frontend minimalistic apps, but I have also worked on some backend
          projects.
        </p>
        <h2>Short facts about me:</h2>
        <p>Name: Ahmed Škulj</p>
        <p>Age: 21</p>
        <p>Country of residence: Bosnia and Herzegovina</p>
        <p>Occupation: Student</p>
      </div>
    </div>
  );
}

export default AboutMe;
