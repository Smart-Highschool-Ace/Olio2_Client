import React from "react";
import { ModalBanner } from "Assets";
import * as S from "./Style";

const AuthTemplate: React.FC = ({ children }) => {
  return (
    <S.Positioner>
      <S.Img>
        <ModalBanner />
      </S.Img>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Positioner>
  );
};

export default AuthTemplate;
