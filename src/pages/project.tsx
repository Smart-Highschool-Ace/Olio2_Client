import React from "react";
import { Project } from "../Components/index";

const project: React.FC = () => {
  // {/* /* visible은 모달이 보이는 지 안 보이는 지, state는 모달 상태
  // (view, viewOnly, edit, writing) */ */}
  return (
    <>
      <div>어쨌든 프로젝트 페이지</div>
      <Project state="writing" />
    </>
  );
};

export default project;
