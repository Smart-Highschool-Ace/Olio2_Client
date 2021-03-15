import React, { useState, useCallback } from "react";
import * as S from "./Style";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { AuthTemplate, RegisterModal } from "Components";
import { ModalBanner } from "Assets";

const LoginModal: React.FC = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { addModal, removeModal } = useModalContext();

  const handleClickRegister = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <RegisterModal />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, []);

  return (
    <AuthTemplate>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <S.InputWrapper focus={emailFocus}>
          <S.FormText>이메일</S.FormText>
          <S.Input
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            placeholder="Email"
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper focus={passwordFocus}>
          <S.FormText>비밀번호</S.FormText>
          <S.Input
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            placeholder="비밀번호"
            type="password"
          />
        </S.InputWrapper>

        <S.BottomLabel>
          <div>
            <input type="checkbox" id="emailSave" name="emailSave" />
            <label style={{ marginLeft: 3 }}>이메일 저장하기</label>
          </div>
          <S.LoginBtn>로그인</S.LoginBtn>
        </S.BottomLabel>
      </S.LoginWrapper>
      <S.Footer>
        <S.Item>아이디/비밀번호 찾기</S.Item>
        <S.Item onClick={() => handleClickRegister()}>
          아직 계정이 없으신가요?
        </S.Item>
      </S.Footer>
    </AuthTemplate>
  );
};

export default LoginModal;
