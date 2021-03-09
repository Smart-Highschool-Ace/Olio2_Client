import { PhoneImg } from "Assets";
import React from "react";
import * as S from "./Style";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Explain2>“ 웹 뿐만아니라 앱에서도 가능 ! ”</S.Explain2>
        <S.Rec2></S.Rec2>
        <S.ExAbout2>
          지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금
          너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금
          너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금
          너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금
          너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.
        </S.ExAbout2>
        <S.PhoneImg>
          <PhoneImg />
        </S.PhoneImg>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
