import React from "react";
import "./Footer.css";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import LinkedIn from "./images/linkedin.svg";
function Footer() {
  return (
    <div>
      <div className="footer">
        <p>Created by @ahmedskulj00</p>
        <div className="footer-icons">
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
    </div>
  );
}

export default Footer;
