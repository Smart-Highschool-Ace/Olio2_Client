import React, { useState, useCallback } from "react";
import * as S from "./Style";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { AuthTemplate, RegisterModal } from "Components";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation LoginMutation($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
    }
  }
`;

const LoginModal: React.FC = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });

  const { addModal, removeModal } = useModalContext();

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: values,
    errorPolicy: "all",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    login();
    if (loading) console.log(loading);
    if (error) {
      console.log(error);
    }
    console.log(values);
    e.preventDefault();
  };

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
      <S.LoginWrapper onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <S.InputWrapper focus={emailFocus}>
          <S.FormText>이메일</S.FormText>
          <S.Input
            name="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChange={handleChange}
            placeholder="Email"
            value={values.email}
            type="text"
          />
        </S.InputWrapper>
        <S.InputWrapper focus={passwordFocus}>
          <S.FormText>비밀번호</S.FormText>
          <S.Input
            name="password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            onChange={handleChange}
            placeholder="비밀번호"
            value={values.password}
            type="password"
          />
        </S.InputWrapper>

        <S.BottomLabel>
          <div>
            <input type="checkbox" id="emailSave" name="emailSave" />
            <label style={{ marginLeft: 3 }}>이메일 저장하기</label>
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
