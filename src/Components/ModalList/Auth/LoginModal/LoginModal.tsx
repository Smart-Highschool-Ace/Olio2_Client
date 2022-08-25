import React, { useEffect } from "react";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { useMutation } from "@apollo/client";
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import * as S from "./Style";
import LOGIN from "lib/graphQL/login.graphql";
import GoogleLogin from "react-google-login";

interface NewToken {
  token: string;
  error: string;
}

const LoginModal: React.FC = () => {
  const { removeModal } = useModalContext();
  const [login, { data, error }] = useMutation<
    { login: NewToken },
    { token: string }
  >(LOGIN);

  useEffect(() => {
    if (data != null) {
      localStorage.setItem("token", data.login.token);

      if (error) {
        alert("로그인에 실패하였습니다." + error);
      } else {
        removeModal();
        alert("로그인 성공!");
      }
    }
  }, [data, error, removeModal]);

  const responseGoogle = response => {
    const googleToken = response.tokenId;
    login({ variables: { token: googleToken } });
  };

  return (
    <AuthTemplate>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <h4>학교 계정으로 로그인해주세요.</h4>
        <br />
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
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
