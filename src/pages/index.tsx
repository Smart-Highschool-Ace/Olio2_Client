import styled from "@emotion/styled";
import Head from "next/head";

import {
  Header,
  StartPage,
  MockupPage_project,
  MockupPage_portfoilo,
  AboutPage,
  LastPage,
} from "Components";
import React from "react";

const index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Olio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
        <StartPage />
        <MockupPage_portfoilo />
        <MockupPage_project />
        <AboutPage />
        <LastPage />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background: url(/StartBackground.svg);
`;

export default index;
