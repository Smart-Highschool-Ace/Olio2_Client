import styled from "@emotion/styled";
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
    <Wrapper>
      <Header />
      <StartPage />
      <MockupPage_portfoilo />
      <MockupPage_project />
      <AboutPage />
      <LastPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url(/StartBackground.svg);
`;

export default index;
