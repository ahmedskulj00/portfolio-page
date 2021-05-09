import React, { useEffect } from "react";
import "./Hobbies.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Hobbies() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-right">
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
