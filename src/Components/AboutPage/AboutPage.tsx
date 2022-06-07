import { SS, TS, WS } from "Assets";
import React from "react";
import * as S from "./Style";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.MiniSection>
          <S.MiniTitle>OLIO</S.MiniTitle>
          <S.MiniSub>소프트웨어마이스터고등학교 포트폴리오 웹 서비스</S.MiniSub>
          <S.MiniInfo>
            기존에 있던 &apos;드림북&apos;을 대체하기 위한
            <br />
            포트폴리오 웹 서비스 입니다.
          </S.MiniInfo>
        </S.MiniSection>
        <S.About>
          <S.WS>
            <WS />
            <h5>공간제약이 없는 웹 서비스</h5>
            <p>
              책으로 이루어진 &apos;드림북&apos;을 대체한 웹서비스로 <br />
              공간의 제약을 받지 않고 열람 가능
            </p>
          </S.WS>
          <S.TS>
            <TS />
            <h5>기업의 채용을 생각한 서비스</h5>
            <p>
              다양한 학생들의 포트폴리오를 <br />
              한눈에 보기쉽게
            </p>
          </S.TS>
          <S.SS>
            <SS />
            <h5>학생을 생각한 서비스</h5>
            <p>
              웹으로 자신의 포트폴리오 정리와 <br />
              선배나 친구들의 프로젝트 열람 가능
            </p>
          </S.SS>
        </S.About>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
