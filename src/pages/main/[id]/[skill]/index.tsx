import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { Header, MainToggle } from "Components";
import { PortfolioContainer, ProjectContainer } from "Containers";

const renderContentByQueryId = (id) => {
  switch (id) {
    case "portfolios":
      return <PortfolioContainer />;
    case "projects":
      return <ProjectContainer />;
  }
};

const index: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Positioner>
      <Header />
      <ToggleWrapper>
        <MainToggle />
      </ToggleWrapper>
      <ContentWrapper>{renderContentByQueryId(id)}</ContentWrapper>
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 140px;
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: 100vh;
  margin-top: 6vh;
`;

export default index;
