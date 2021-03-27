import { FinalLogo } from "Assets";
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
        <S.StartOlio>
          쉽고 간편한 포트폴리오 웹 서비스
          <br />
          <p>
            <S.Apostrophe>
              ‘ <S.Olio2>olio</S.Olio2> ’
            </S.Apostrophe>
            시작하세요
          </p>
        </S.StartOlio>
        <S.StartedBtn3>Let's Started</S.StartedBtn3>
        <S.FinalLogo>
          <FinalLogo />
        </S.FinalLogo>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
