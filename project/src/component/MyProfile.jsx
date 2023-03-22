import React from "react";
import styled from "styled-components";

function MyProfile(props) {
  return (
    <MyProfileontainer>
      <div class="pjt-header">
        <div class="pjt-title">
          <img src="github-mark.png" class="github-icon" />
          <a href="https://github.com/2riing/my2riing">My2riing</a>
        </div>
        <div class="pjt-team">
          <div>수홍</div>
          <div>2023.03.22</div>
        </div>
      </div>
      <div>
        <div class="pjt-skill">React</div>
      </div>
      <div class="pjt-ds">
        안녕하세요? 염수홍입니다. 제 소개 페이지를 만들었어요! 페이지를 만들고
        내용을 채우는 데까지 총 2시간 정도 걸렸습니다. 생각보다 오래 걸리지
        않는데, 시작하는 것이 제일 어려운 거 아시죠? vercel로 프론트 배포를
        했습니다. 많은 관심 부탁드려요?
      </div>
    </MyProfileontainer>
  );
}
const MyProfileontainer = styled.div`
  .github-icon {
    width: 15px;
    margin-right: 8px;
  }
  .pjt-header {
    display: flex;
  }
  .pjt-title {
    font-size: 20px;
    font-weight: 900;
    margin-right: 10px;
    flex-direction: row;

    border-bottom: solid 1px black;

    margin-bottom: 5px;
  }
  .pjt-team {
    font-weight: 0;
    font-size: 10px;
  }
  .pjt-skill {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;
export default MyProfile;
