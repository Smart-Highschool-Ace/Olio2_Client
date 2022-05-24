import React, { useState, useCallback } from "react";
import { AuthTemplate, EmailConfirm, LoginModal } from "Components";

import { useModalContext } from "Utils/Contexts/ModalContext";
import * as S from "./Style";

const RegisterModal: React.FC = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);

  const { addModal, removeModal } = useModalContext();

  const handleClickLogin = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <LoginModal />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, []);

  const handleClickRegisterBtn = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <EmailConfirm />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, []);

  return (
    <AuthTemplate>
      <S.RegisterWrapper>
        <S.Title>회원가입</S.Title>
        <S.InputWrapper focus={emailFocus}>
          <div>
            <S.FormText>이메일</S.FormText>
            <S.DoubleCheck onClick={() => alert("중복확인!")}>
              중복 확인
            </S.DoubleCheck>
          </div>
          <S.Input
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            placeholder="Email"
            type="text"
            maxLength={50}
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
        <S.InputWrapper focus={passwordConfirmFocus}>
          <S.FormText>비밀번호 확인</S.FormText>
          <S.Input
            onFocus={() => setPasswordConfirmFocus(true)}
            onBlur={() => setPasswordConfirmFocus(false)}
            placeholder="비밀번호 확인"
            type="password"
          />
        </S.InputWrapper>
        <S.BottomLabel>
          <S.RegisterBtn onClick={() => handleClickRegisterBtn()}>
            회원가입
          </S.RegisterBtn>
        </S.BottomLabel>
      </S.RegisterWrapper>
      <S.Footer>
        <S.Item onClick={() => handleClickLogin()}>
          이미 계정이 있으신가요?
        </S.Item>
      </S.Footer>
    </AuthTemplate>
  );
};

export default RegisterModal;
