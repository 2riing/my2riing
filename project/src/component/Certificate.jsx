import React from "react";
import styled from "styled-components";

const Certificate = () => {
  return (
    <CertificateContainer>
      <div class="cer-title">Certificate, 자격증</div>
      <div>
        <br />
        <b>
          삼성 청년 SW 아카데미를 수강하고, 프로젝트를 진행하면서{" "}
          <u>한 달간 3개의</u> 자격증 시험에 응시하였습니다.
        </b>
        <br />
        2022년 5월 7일 정보처리기사 실기, 5월 21일 ADsP, 5월 28일 SQLD. 자격증을
        위한 벼락치기 공부가 아닌, 2022년 2월부터 꾸준히 스터디를 통해 블로그에
        개념을 정리하고 학습했기 때문에 큰 부담 없이 동시에 자격증을 취득할 수
        있었습니다.
        <br />
        <br />
        <b>자격증을 취득을 선택한 이유</b>
        <br />
        비전공자로 다양한 커리큘럼을 접할 수 없는 상황에서, 공인자격증의 목차가
        개발자로 성정하기 위한 전체적인 학습 로드맵과 필요 배경지식이 되어줄
        것이라고 생각했습니다. 따라서, 블로그에 개념을 다지면서, 추가로 궁금한
        개념들을 서칭하고 정리하며 공부했습니다. 이때 공부한 지식들이 현재 Java
        Spring 과정에서 DB와 SQL에 대해 학습할 때, Django MVC 패턴에 대해서
        공부하고, 프로젝트를 통해 애자일을 실제로 경험할 때나 빅데이터
        프로젝트를 진행할 때에 "이런 게 있는 걸 안다"를 인지할 수 있어 서칭하는
        데 큰 도움은 아니고 잔잔한 도움이 되었습니다.
        <br />
        Naver Blog(Note) ▶
        <u>
          <a href="https://blog.naver.com/PostList.naver?blogId=2riing&from=postList&categoryNo=20&parentCategoryNo=20">
            정보처리기사
          </a>
        </u>
        {"  "}
        <u>
          <a href="https://blog.naver.com/PostList.naver?blogId=2riing&from=postList&categoryNo=43">
            SQL개발자(SQLD)
          </a>
        </u>
        {"  "}
        <u>
          <a href="https://blog.naver.com/PostList.naver?blogId=2riing&from=postList&categoryNo=42">
            데이터분석준전문가(ADsP)
          </a>
        </u>
      </div>
      <br />
      <div class="cer-list">
        <div class="cer-ele">
          <div class="cer-con">
            <div class="cer-title">정보처리기사</div>
            <div class="cer-date">2022.06.17</div>
          </div>
          <div class="cer-con">
            <div class="cer-or">한국산업인력공단</div>,
            <div class="cer-num">22201011166N</div>
          </div>
        </div>
        <div class="cer-ele">
          <div class="cer-con">
            <div class="cer-title">SQL개발자(SQLD)</div>
            <div class="cer-date">2022.06.24</div>
          </div>
          <div class="cer-con">
            <div class="cer-or">한국데이터산업진흥원</div>,
            <div class="cer-num">SQLD-045008295</div>
          </div>
        </div>
        <div class="cer-ele">
          <div class="cer-con">
            <div class="cer-title">데이터분석준전문가(ADsP)</div>
            <div class="cer-date">2022.06.17</div>
          </div>
          <div class="cer-con">
            <div class="cer-or">한국데이터산업진흥원</div>,
            <div class="cer-num">ADsP-033007545</div>
          </div>
        </div>
      </div>
    </CertificateContainer>
  );
};

const CertificateContainer = styled.div`
  width: 88%;
  margin: 20px 0px;
  .cer-title {
    font-size: 1.3rem;
    font-weight: 550;
  }
  .cer-ele {
    margin-bottom: 5px;
  }
  .cer-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cer-con {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cer-date {
    display: flex;
    font-size: 0.5rem;
    align-items: flex-end;
  }
  .cer-or {
  }
  .cer-num {
  }
`;

export default Certificate;
