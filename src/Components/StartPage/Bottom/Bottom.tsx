import React from "react";
import path from "constants/path.json";
import StartBtn from "Styles/StartBtn";
import * as S from "./Style";
import { FinalLogo } from "Assets";

const Bottom: React.FC = () => {
  return (
    <S.Positioner>
      <link rel="preconnect" href={path.font_gstatic} />
      <link href={path.antd_css} rel="stylesheet" />
      <S.StartSvg>
        <FinalLogo />
      </S.StartSvg>
      <S.RightWrapper>
        <S.Title>
          <p>쉽고 간편한 포트폴리오 웹 서비스</p>
          <p>
            <S.Highlight>olio </S.Highlight> 시작하세요.
          </p>
        </S.Title>
        <StartBtn backgroundColor={"white"}>Let&apos;s Started</StartBtn>
      </S.RightWrapper>
    </S.Positioner>
  );
};

export default Bottom;
