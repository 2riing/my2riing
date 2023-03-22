import React from "react";
import styled from "styled-components";

function ProfileHeader(props) {
  return (
    <ProfileHeaderContainer>
      <MyTitle>Hi! THIS IS 2riing!</MyTitle>
      <MyInfo>
        <div id="myPic">사진</div>
        <div id="mySchool">Profile</div>
        <div id="myContact">Contact</div>
      </MyInfo>
    </ProfileHeaderContainer>
  );
}

const ProfileHeaderContainer = styled.div``;
const MyInfo = styled.div`
  display: flex;
  flex-direction: row;
  #myPic {
    width: 300px;
  }
  #mySchool {
    width: 450px;
  }
  myContact {
    width: 450px;
  }
`;
const MyTitle = styled.div`
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(to right top, #df2087, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 150px;
`;

export default ProfileHeader;
