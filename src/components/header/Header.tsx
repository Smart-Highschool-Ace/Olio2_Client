import React from "react";
import { Logo } from "assets";
import * as S from "./Style";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.ContentWrapper>
        <S.Logo>
          <Logo height={47} />
        </S.Logo>
        <S.AuthWrapper>
          <div>로그인</div>
        </S.AuthWrapper>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Header;