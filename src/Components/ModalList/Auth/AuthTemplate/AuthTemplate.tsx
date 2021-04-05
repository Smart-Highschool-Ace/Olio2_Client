import React, { useState } from "react";
import * as S from "./Style";
import { ModalBanner } from "Assets";
import LoginModal from "Components/ModalList/Auth/LoginModal/LoginModal";

const AuthTemplate: React.FC = ({ children }) => {
  const [isLoginModal, setIsLoginModal] = useState(true);

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
