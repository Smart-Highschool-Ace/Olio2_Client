import React, { useCallback } from "react";
import { Logo, Search } from "Assets";
import { useModalContext } from "Utils/Contexts/ModalContext";
import LoginModal from "Components/ModalList/Auth/LoginModal/LoginModal";
import * as S from "./Style";

const Header: React.FC = () => {
  const { addModal } = useModalContext();

  const handleClickLogin = useCallback(() => {
    addModal({
      title: "",
      element: <LoginModal />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, [addModal]);

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
        <S.LoginButton type="button" onClick={handleClickLogin}>
          로그인
        </S.LoginButton>
      </S.ContentWrapper>
    </S.Positioner>
  );
};

export default Header;
