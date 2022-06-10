import styled from "@emotion/styled";
import Head from "next/head";

import { Header, StartPage } from "Components";
import React from "react";

const Wrapper = styled.div`
  background: url(/StartBackground.svg);
`;

// TODO login token 에 따라 index page 가 바뀌어야 함
// TODO token ? searchResultPage : StartPage

const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Olio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
        <StartPage.Top />
        <StartPage.Medium />
        <StartPage.Bottom />
      </Wrapper>
    </div>
  );
};

export default Index;
