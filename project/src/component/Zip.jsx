import React from "react";
import styled from "styled-components";

function Zip(props) {
  return (
    <ZipContainer>
      <div class="pjt-header">
        <div class="pjt-title">
          <img src="github-mark.png" class="github-icon" />
          <a href="https://github.com/minje0204/zzip0">Zzip_0</a>
        </div>
        <div class="pjt-team">
          <div>민제, 상협, 선영, 수홍, 지은</div>
          <div>2022.10 ~ 2022.11</div>
        </div>
      </div>
      <div>
        <div class="pjt-skill">React, Next.js, Recoil, Spring, MariaDB</div>
      </div>
      <div class="pjt-ds">
        학습 분위기 조성을 통해, 집에서 집중해서 공부할 수 있도록 도와줍니다.
        실시간 Socket통신을 기반으로 Background에서 ASMR 영상과 음악을 친구들과
        공유하며 공부할 수 있어요. 날짜별 Todolist를 작성한 뒤에, Timer를 통해
        공부시간을 측정하면, 프로필 대시보드에서 내가 어떤 과목을 얼마만큼
        공부했는지 확인할 수 있습니다. 친구들과 따로, 또 함께 집에서
        공부해보세요!
      </div>
    </ZipContainer>
  );
}

const ZipContainer = styled.div`
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

export default Zip;
