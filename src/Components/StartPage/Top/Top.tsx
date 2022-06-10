import { StartImg } from "Assets";
import Link from "next/link";
import path from "../../../constants/path.json";
import React from "react";
import * as S from "./Style";

const Top: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <link rel="preconnect" href={path.font_gstatic} />
        <link href={path.josefin_font} rel="stylesheet"></link>
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
        <Link href={path.MAIN_PORTFOLIO}>
          <S.StartedBtn1>Let&apos;s Start</S.StartedBtn1>
        </Link>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Top;
