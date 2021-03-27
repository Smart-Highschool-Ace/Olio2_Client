import { StartImg } from "Assets";
import Link from "next/link";
import React from "react";
import * as S from "./Style";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        ></link>
        <S.StartImg>
          <StartImg />
        </S.StartImg>
        <S.SMH>Software Meister Highschool</S.SMH>
        <S.SMYP>
          Show me your PortF<S.Olio1>olio</S.Olio1>
        </S.SMYP>
        <S.Info>
          소프트웨어마이스터고등학교 학생들의 <br />
          포트폴리오를 모아놓은 포트폴리오 웹 서비스입니다.
        </S.Info>
        <Link href="/main/portfolios">
          <S.StartedBtn1>Let's Start</S.StartedBtn1>
        </Link>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
