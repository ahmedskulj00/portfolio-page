import React from "react";
import "./AboutMe.css";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import LinkedIn from "./images/linkedin-logo.png";
import My_photo from "./images/My_photo.png";
function AboutMe() {
  return (
    <div className="about-me">
      <div id="my-photo">
        <img src={My_photo} alt="" className="profile-photo" />
      </div>
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
        <a href="https://www.facebook.com/ahmed.skulj">
          <img src={Facebook} alt="" className="socialmedia-icons" />
        </a>
        <a href="https://www.instagram.com/ahmedskulj00/">
          <img src={Instagram} alt="" className="socialmedia-icons" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-skulj-458a26188/">
          <img src={LinkedIn} alt="" className="socialmedia-icons" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
