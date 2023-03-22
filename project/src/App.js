import logo from "./logo.svg";

import "./App.css";
import ProfileHeader from "./component/ProfileHeader";
import Introduce from "./component/Introduce";
import Certificate from "./component/Certificate";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileHeader />
        <Introduce />
        <Certificate />
        <Projects />
      </header>
    </div>
  );
}

export default App;
