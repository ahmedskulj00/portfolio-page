import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset";
function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Skillset />
    </div>
  );
}

export default App;
