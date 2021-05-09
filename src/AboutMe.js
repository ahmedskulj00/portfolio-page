import React, { useEffect } from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";

import My_photo from "./images/My_photo.png";
function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-me" data-aos="fade-right">
      <div id="my-photo">
        <img src={My_photo} alt="" className="profile-photo" />
      </div>
      <div className="aboutme-section">
        <h1>
          <span>Who</span> am I ?
        </h1>
        <p>
          Hi, my name is Ahmed Škulj. I am from Bosnia and Herzegovina.
          Currently I am studying Software Engineering at the University of
          Zenica. I started coding about two years ago, and since then I made
          over 20 different repositories, big and small. I prefer building
          frontend minimalistic apps, but I have also worked on some backend
          projects.
        </p>
        <h2>
          Short facts <span> about</span> me:
        </h2>
        <p>Name: Ahmed Škulj</p>
        <p>Age: 21</p>
        <p>Country of residence: Bosnia and Herzegovina</p>
        <p>Occupation: Student</p>
      </div>
    </div>
  );
}

export default AboutMe;
