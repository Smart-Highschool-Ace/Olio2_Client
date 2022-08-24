import React, { useEffect } from "react";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { useMutation } from "@apollo/client";
import { useHandleClickModalBtn } from "hook";
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import * as S from "./Style";
import LOGIN from "lib/graphQL/login.graphql";
import GoogleLogin from "react-google-login";

interface newToken {
  token: string;
  error: string;
}

const LoginModal: React.FC = () => {
  const { removeModal } = useModalContext();
  const [login, { data, error }] = useMutation<
    { googleToken: newToken },
    { token: string }
  >(LOGIN);

  useEffect(() => {
    if (data != null) {
      localStorage.setItem("token", data.googleToken.token);

      if (!error) {
        removeModal();
        alert("로그인 성공!");
      }
    }
  }, [data, error, removeModal]);

  const handleClickRegister = useHandleClickModalBtn({ modalName: "Register" });
  const responseGoogle = response => {
    console.log(login(response.accessToken));
  };

  return (
    <AuthTemplate>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <h4>학교 계정으로 로그인해주세요.</h4>
        <br />
        <GoogleLogin
          clientId={
            "13279153688-5v5k3kivecd0n9e208hq9fdcjr6fhbn1.apps.googleusercontent.com"
          }
          buttonText="Google 계정으로 로그인하기"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </S.LoginWrapper>
    </AuthTemplate>
  );
};

export default LoginModal;
