import React from "react";
import styled from "styled-components";
import AirName from "./AirName";
import MyProfile from "./MyProfile";
import Zip from "./Zip";

function Projects(props) {
  return (
    <ProjectContainer>
      <div id="pjt-element">
        <AirName />
      </div>
      <div id="pjt-element">
        <Zip />
      </div>
      <div id="pjt-element">
        <MyProfile />
      </div>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: 88%;
  margin: 20px 0px;
  #pjt-element {
    border: 2.3px solid;
    border-image: linear-gradient(170deg, #ffdee9 50%, #f7e1a3 100%);
    border-image-slice: 1;

    margin: 5px;
    padding: 20px 30px;
  }
`;

export default Projects;
