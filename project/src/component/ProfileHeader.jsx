import React from "react";
import styled from "styled-components";

function ProfileHeader(props) {
  return (
    <ProfileHeaderContainer>
      <MyTitle>
        <div>Hi! THIS IS 2riing!</div>
      </MyTitle>
      <MyInfo>
        <div id="mySchool">
          <div>Ajou Univ. Dept. of Environmental Safety Eng.</div>
          <div>Korea Digital Media HS, Hacking Defense Dept.</div>
          <div>Samsung Youth Software Academy</div>
        </div>
        <div id="myContact">
          <div>2riing2@gmail.com</div>
          <div>
            <a href="https://github.com/2riing">github 2riing</a>
          </div>
        </div>
      </MyInfo>
    </ProfileHeaderContainer>
  );
}

const ProfileHeaderContainer = styled.div``;
const MyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  margin-bottom: 50px;

  #mySchool {
    min-width: 230px;
    width: 50%;
    margin-right: 20px;
  }
  #mySchool div {
  }
  #myContact {
  }
  @media screen and (max-width: 650px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const MyTitle = styled.div`
  font-size: 60px;
  min-width: 600px;
  font-weight: 900;
  background: linear-gradient(to right top, #df2087, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 50px;
  text-align: center;
  @media screen and (max-width: 650px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export default ProfileHeader;
