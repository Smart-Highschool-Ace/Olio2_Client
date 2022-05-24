import styled from "@emotion/styled";
import Head from "next/head";

import {
  Header,
  StartPage,
  MockupPageProject,
  MockupPagePortfolio,
  AboutPage,
  LastPage,
} from "Components";
import React from "react";

const Wrapper = styled.div`
  background: url(/StartBackground.svg);
`;

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
        <MockupPagePortfolio />
        <MockupPageProject />
        <AboutPage />
        <LastPage />
      </Wrapper>
    </div>
  );
};

export default index;
