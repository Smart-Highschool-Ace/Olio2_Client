import { SS, TS, WS } from "Assets";
import React from "react";
import * as S from "./Style";

interface Situation {
  index: number;
  img: JSX.Element;
  header: string;
  explanation: string[];
}

const situations: Situation[] = [
  {
    index: 1,
    img: <WS />,
    header: "공간 제약이 없는 웹 서비스",
    explanation: [
      "책으로 이루어진 드림북을 대체한 ",
      "웹서비스로 공간의 제약을 없이 열람",
    ],
  },
  {
    index: 2,
    img: <TS />,
    header: "기업의 채용을 생각한 서비스",
    explanation: ["다양한 학생들의 포트폴리오를 ", "한눈에 보기쉽게"],
  },
  {
    index: 3,
    img: <SS />,
    header: "학생을 생각한 서비스",
    explanation: [
      "웹으로 자신의 포트폴리오 정리와 ",
      "선배나 친구들의 프로젝트 열람 가능",
    ],
  },
];

const Medium: React.FC = () => {
  return (
    <S.Positioner>
      <section>
        <S.TitleWrapper>
          <S.Sub>OLIO</S.Sub>
        </S.TitleWrapper>
        <S.Title>광주소프트웨어마이스터고등학교 포트폴리오 웹 서비스</S.Title>
        <S.Info>
          기존에 있던 드림북을 대체하기 위한
          <br />
          포트폴리오 웹 서비스 입니다.
        </S.Info>
      </section>
      <S.About>
        {situations.map(situation => (
          <S.SituationWrapper key={situation.index}>
            {situation.img}
            <S.SituationHeader>{situation.header}</S.SituationHeader>
            <S.SituationExplanation>
              {situation.explanation[0]}
              <br />
              {situation.explanation[1]}
            </S.SituationExplanation>
          </S.SituationWrapper>
        ))}
      </S.About>
    </S.Positioner>
  );
};

export default Medium;
