import React, { useEffect } from "react";
import "./Skillset.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Skillset() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="skillset" data-aos="fade-right">
      <div className="title-skill">
        <p>
          Technologies I <span> work</span> with:
        </p>
      </div>
      <div className="grid-container">
        <div className="score">
          <a href="https://www.w3schools.com/html/html_intro.asp" id="html"></a>
        </div>
        <div className="score">
          <a href="https://www.w3schools.com/css/css_intro.asp" id="css"></a>
        </div>
        <div className="score">
          <a href="https://www.javascript.com/" id="js"></a>
        </div>
        <div className="score">
          <a href="https://reactjs.org/" id="react"></a>
        </div>
        <div className="score">
          <a href="https://www.cplusplus.com/" id="c"></a>
        </div>
        <div className="score">
          <a href="https://jquery.com/" id="jquery"></a>
        </div>
        <div className="score">
          <a href="https://getbootstrap.com/" id="bootstrap"></a>
        </div>
        <div className="score">
          <a href="https://www.w3schools.com/sql/sql_intro.asp" id="sql"></a>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
