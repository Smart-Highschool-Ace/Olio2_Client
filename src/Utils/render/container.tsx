import React from "react";

import { PortfolioContainer, ProjectContainer } from "Containers";

export const renderContentByQueryId = (
  id: "portfolios" | "projects" | string
) =>
  ({
    protfolios: <PortfolioContainer />,
    projects: <ProjectContainer />,
  }[id] || <></>);

export default renderContentByQueryId;
