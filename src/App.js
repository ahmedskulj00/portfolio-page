import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset";
import Hobbies from "./Hobbies";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Skillset />
      <Hobbies />
    </div>
  );
}

export default App;
