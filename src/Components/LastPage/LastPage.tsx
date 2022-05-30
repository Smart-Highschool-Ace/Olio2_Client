import { FinalLogo } from "Assets";
import React from "react";
import * as S from "./Style";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.StartOlio>
          쉽고 간편한 포트폴리오 웹 서비스
          <br />
          <p>
            <S.Apostrophe>
              &apos; <S.Olio2>olio</S.Olio2> &apos;
            </S.Apostrophe>
            시작하세요
          </p>
        </S.StartOlio>
        <S.StartedBtn3>Let&apos;s Started</S.StartedBtn3>
        <S.FinalLogo>
          <FinalLogo />
        </S.FinalLogo>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
