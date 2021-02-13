import React from "react";
import * as S from "./Style";
import { Slider, Progress, RangeSlider } from "rsuite";
import "rsuite/lib/styles/index.less";

const TechStack: React.FC = () => {
  return (
    <>
      <S.TitleWrapper>
        <span>기술 스택</span>
      </S.TitleWrapper>
      <S.StackWrapper>
        <S.StackContent>콘텐트</S.StackContent>
        <S.StackContent>콘텐트</S.StackContent>
        <S.StackContent>콘텐트</S.StackContent>
        <S.StackContent>콘텐트</S.StackContent>
      </S.StackWrapper>
    </>
  );
};

export default TechStack;
