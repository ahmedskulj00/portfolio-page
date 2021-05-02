import React from "react";
import "./Skillset.css";
function Skillset() {
  return (
    <div>
      <div className="title-skill">
        <p>Skill set:</p>
      </div>
      <div className="grid-container">
        <div className="score">
          <a href="" id="html"></a>
          <p>8/10</p>
        </div>
        <div className="score">
          <a href="" id="css"></a>
          <p>8/10</p>
        </div>
        <div className="score">
          <a href="" id="js"></a>
          <p>6/10</p>
        </div>
        <div className="score">
          <a href="" id="react"></a>
          <p>3/10</p>
        </div>
        <div className="score">
          <a href="" id="c"></a>
          <p>7/10</p>
        </div>
        <div className="score">
          <a href="" id="jquery"></a>
          <p>4/10</p>
        </div>
        <div className="score">
          <a href="" id="bootstrap"></a>
          <p>7/10</p>
        </div>
        <div className="score">
          <a href="" id="sql"></a>
          <p>3/10</p>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
