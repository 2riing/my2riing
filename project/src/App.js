import "./App.css";
import ProfileHeader from "./component/ProfileHeader";
import Introduce from "./component/Introduce";
import Certificate from "./component/Certificate";
import Projects from "./component/Projects";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContainer>
          <ProfileHeader />
          <hr />
          <Introduce />
          <hr />
          <Projects />
        </AppContainer>
      </header>
    </div>
  );
}

const AppContainer = styled.div`
  width: 800px;
  text-align: left;
`;

export default App;
