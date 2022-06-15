import Link from "next/link";
import path from "constants/path.json";
import React from "react";
import * as S from "./Style";
import StartBtn from "Styles/StartBtn";
import { StartImg } from "Assets";

const Top: React.FC = () => {
  return (
    <S.Positioner>
      <article>
        <S.SMH>Software Meister High School</S.SMH>
        <S.SMYP>
          Show me your PortF<S.Highlight>olio</S.Highlight>
        </S.SMYP>
        <S.Info>
          소프트웨어마이스터고등학교 학생들의 포트폴리오를
          <br />
          모아놓은 포트폴리오 웹 서비스입니다.
        </S.Info>
        <Link href={path.MAIN_PORTFOLIO}>
          <StartBtn backgroundColor={"green"}>Let&apos;s Start</StartBtn>
        </Link>
      </article>
      <S.StartSvg>
        <StartImg />
      </S.StartSvg>
    </S.Positioner>
  );
};

export default Top;
