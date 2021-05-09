import React from "react";
import "./Hobbies.css";
function Hobbies() {
  return (
    <div>
      <div className="hobbies-title">
        <p>
          My <span> hobbies</span>:
        </p>
      </div>
      <div className="grid-container-hobbies">
        <div className="name">
          <a href="" id="gaming"></a>
        </div>
        <div className="name">
          <a href="" id="basketball"></a>
        </div>
        <div className="name">
          <a href="" id="photography"></a>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
