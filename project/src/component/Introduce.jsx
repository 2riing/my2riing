import React from "react";
import styled from "styled-components";

function Introduce(props) {
  return (
    <IntroduceContainer>
      아직 자기소개를 뭐라고 채워야할지 모르겠으나 멋진 자기소개를 써 넣는 것이
      저의 목표입니다. 그러나 멋진 말을 하는 것은 항상 쉽지가 않아요. <br />나
      자신 그대로는 대단하고 멋진 사람이기 보다는 개발이 주는 마법같음을
      진심으로 좋아하는 사람입니다. 프로그래밍을 배운 이후로 스트레스가 풀리고
      건강이 좋아졌습니다(간증) 어려운 알고리즘 문제를 풀어냈을 때 얻는 감정이
      도박을 했을 때보다 더 안전하게 짜릿해서 인생에서 최대의 행복감 + 성취감을
      준다고 생각하는 약간은 도른 사람입니다. 또, 동기부여를 잘 받고 조언받은
      것들을 다 해내고야마는 몰입능력이 최대 장점이라고들 말합니다. 모든 것들에
      호기심이 많은 편이라서 다양한 분야에 대해 배우는 것을 좋아합니다.
    </IntroduceContainer>
  );
}

const IntroduceContainer = styled.div`
  width: 88%;
  margin: 20px 0px;
`;

export default Introduce;
