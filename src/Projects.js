import React, { useEffect } from "react";
import "./Projects.css";
import Weather_app_logo from "./images/weather_app.png";
import React_todo_logo from "./images/react-todo.png";
import TicTacToe_logo from "./images/Budget-app.png";
import Timeline_logo from "./images/timeline.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-right">
      <div class="child-page-listing">
        <h2 id="title-projects">
          Some of my <span> projects</span>:
        </h2>

        <div class="grid-container-projects">
          <article id="3685" class="location-listing">
            <a
              class="location-title"
              id="weather-app-image"
              href="https://github.com/ahmedskulj00/Javascript-WeatherApp"
            >
              WeatherApp
            </a>

            <div class="location-image">
              <a href="https://github.com/ahmedskulj00/Javascript-WeatherApp">
                <img src={Weather_app_logo} alt="weather-app" />{" "}
              </a>
            </div>
          </article>

          <article id="3688" class="location-listing">
            <a
              id="react-todo-image"
              class="location-title"
              href="https://github.com/ahmedskulj00/react-todo"
            >
              React-todo
            </a>

            <div class="location-image">
              <a href="https://github.com/ahmedskulj00/react-todo">
                <img src={React_todo_logo} alt="react-todo" />{" "}
              </a>
            </div>
          </article>

          <article id="3691" class="location-listing">
            <a
              class="location-title"
              href="https://github.com/ahmedskulj00/Javascript-BudgetApp"
            >
              BudgetApp
            </a>

            <div class="location-image">
              <a href="https://github.com/ahmedskulj00/Javascript-TicTacToe">
                <img src={TicTacToe_logo} alt="tictactoe" />{" "}
              </a>
            </div>
          </article>

          <article id="3694" class="location-listing">
            <a
              class="location-title"
              href="https://github.com/ahmedskulj00/Timeline"
            >
              Timeline
            </a>

            <div class="location-image">
              <a href="https://github.com/ahmedskulj00/Timeline">
                <img src={Timeline_logo} alt="timeline" />{" "}
              </a>
            </div>
          </article>
        </div>
        <p id="github">
          For more projects, please check my{" "}
          <a href="https://github.com/ahmedskulj00">Github.</a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
