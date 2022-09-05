import React from "react";
import { Logo, Search } from "Assets";
import GoogleLoginButton from "Components/GoogleLogin/GoogleLoginButton";
import * as S from "./Style";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.ContentWrapper>
        <S.Logo aria-description={"logo"}>
          <Logo height={47} />
        </S.Logo>
        <S.SearchWrapper>
          <S.SearchBar placeholder="검색어를 입력하세요" />
          <S.SearchButton
            aria-label={"검색"}
            onClick={() => alert("검색입니다!")}
          >
            <Search />
          </S.SearchButton>
        </S.SearchWrapper>
        <GoogleLoginButton />
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Header;
