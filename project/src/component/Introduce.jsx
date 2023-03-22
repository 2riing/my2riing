import React from "react";
import styled from "styled-components";

function Introduce(props) {
  return (
    <IntroduceContainer>
      저의 자기소개 입니다. 아직 자기소개를 뭐라고 채워야할지 모르겠으나 멋진
      자기소개를 써 넣는 것이 저의 목표입니다. 이글이 중요하게 느껴지시나요?
      중요하게 느껴졌다면 Important article이고 안중요하게 느껴졌다면 not
      important article입니다. 저는 이 프로젝트를 6시부터 시작했는데요, 8시까지
      환경변수와 2시간동안 싸웠고, 한시간동안은레이아웃을 잡고 내용을
      채웠습니다.
    </IntroduceContainer>
  );
}

const IntroduceContainer = styled.div`
  width: 88%;
  margin: 20px 0px;
`;

export default Introduce;
