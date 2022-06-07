import React from "react";
import { Project } from "../Components/index";

const project: React.FC = () => {
  return (
    <>
      <div>어쨌든 프로젝트 페이지</div>
      <Project state="writing" />
    </>
  );
};

export default project;
