import { StartProfile } from "Assets";
import React from "react";
import * as S from "./Style";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Explain1>“ 잘 쓴 포트폴리오를 한 눈에 보기 쉽게 ”</S.Explain1>
        <S.Rec1></S.Rec1>
        <S.ExAbout1>
          지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금
          너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다. 닭발 요즘
          안땡김 그래도 먹고싶음
        </S.ExAbout1>
        <S.ProfileImg>
          <StartProfile />
        </S.ProfileImg>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
