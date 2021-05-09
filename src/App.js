import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Skillset data-aos="fade-up" />
      <Hobbies />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
