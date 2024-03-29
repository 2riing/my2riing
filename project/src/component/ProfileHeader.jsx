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
          <div>Korea Digital Media HS, Hacking Defense</div>
          <div>Samsung Youth Software Academy</div>
        </div>
        <div id="myContact">
          <div>2riing2@gmail.com</div>
          <div>
            <a href="https://github.com/2riing">github 2riing</a>
          </div>
          <div>
            <a href="https://velog.io/@2riing">velog 2riing</a>
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
  @media screen and (max-width: 650px) {
    text-align: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
  #mySchool {
    min-width: 230px;
    width: 70%;
    margin-right: 20px;
    @media screen and (max-width: 650px) {
      width: 100%;
      min-width: 300px;
      margin-bottom: 20px;
    }
  }
  #myContact {
    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }
`;
const MyTitle = styled.div`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(to right top, #df2087, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
  margin: 50px 0px;
  text-align: center;
  @media screen and (max-width: 650px) {
    min-width: 350px;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export default ProfileHeader;
