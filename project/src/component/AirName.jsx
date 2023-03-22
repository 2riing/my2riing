import React from "react";
import styled from "styled-components";

function AirName(props) {
  return (
    <AirNameContainer>
      <div class="pjt-header">
        <div class="pjt-title">
          <img src="github-mark.png" class="github-icon" />
          <a href="https://github.com/minje0204/AirName">AirName</a>
        </div>
        <div class="pjt-team">
          <div>민제, 상협, 선영, 수홍, 여빈, 지은</div>
          <div>2022.8 ~ 2022.10</div>
        </div>
      </div>
      <div>
        <div class="pjt-skill">React, Django, MongoDB</div>
      </div>
      <div class="pjt-ds">
        600만개 이상의 미국 사회보장국 이름 데이터를 통해{" "}
        <u>"나의 한국 이름 발음"</u>과 비슷한 발음을 가진 영어이름을 추천받을 수
        있습니다! 물론, 연령대와 성별 그리고 재미있는 테스트를 통해 내가 가지고
        있는 분위기 기반의 이름도 추천받을 수 있어요. 이름이 추천된 이후에,
        마음에 드는 이름을 선택하면 이름과 관련된 리포트를 받아볼 수 있습니다!
      </div>
    </AirNameContainer>
  );
}
const AirNameContainer = styled.div`
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

export default AirName;
