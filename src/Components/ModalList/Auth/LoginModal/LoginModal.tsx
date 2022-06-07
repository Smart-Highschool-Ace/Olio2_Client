import React, { useState, useEffect } from "react";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { gql, useMutation } from "@apollo/client";
import useLocalForm from "hook/useLocalForm";
import { useHandleClickModalBtn } from "hook";
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import * as S from "./Style";

const LOGIN = gql`
  mutation LoginMutation($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
    }
  }
`;

const LoginModal: React.FC = () => {
  const [emailFocus, setEmailFocus] = useState<Boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<Boolean>(false);
  const { removeModal } = useModalContext();
  const [login, { data, error }] = useMutation(LOGIN);
  const form = useLocalForm<{ loginEmail: string; loginPassword: string }>({
    loginEmail: "",
    loginPassword: "",
  });
  const { value: loginEmail, onChange: emailOnChange } =
    form.getInputProps("loginEmail");
  const { value: loginPassword, onChange: passwordOnChage } =
    form.getInputProps("loginPassword");

  useEffect(() => {
    if (data != null) {
      localStorage.setItem("token", data.login.token);

      if (!error) {
        removeModal();
        alert("로그인 성공!");
      }
    }
  }, [data, error, removeModal]);

  const handleClickRegister = useHandleClickModalBtn({ modalName: "Register" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ variables: form });
  };

  return (
    <AuthTemplate>
      <S.LoginWrapper onSubmit={handleSubmit} noValidate>
        <S.Title>로그인</S.Title>
        <S.InputWrapper focus={emailFocus}>
          <S.FormText>이메일</S.FormText>
          <S.Input
            name="loginEmail"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            placeholder="Email"
            type="email"
            value={loginEmail}
            onChange={emailOnChange}
          />
        </S.InputWrapper>
        <S.InputWrapper focus={passwordFocus}>
          <S.FormText>비밀번호</S.FormText>
          <S.Input
            name="loginPassword"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            placeholder="비밀번호"
            type="password"
            value={loginPassword}
            onChange={passwordOnChage}
          />
        </S.InputWrapper>

        <S.BottomLabel>
          <div>
            <input type="checkbox" id="emailSave" name="emailSave" />
            <label htmlFor="emailSave" style={{ marginLeft: 3 }}>
              이메일 저장하기
            </label>
          </div>
          <S.LoginBtn type="submit">로그인</S.LoginBtn>
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
