import React from "react";
import { FieldChoice, LoginModal, ProjectModal } from "../Components";
import { ModalName, ModalStateType } from "../Utils/GlobalTypes";

const findModal = (
  modalName: ModalName,
  state: ModalStateType
): JSX.Element => {
  const findModalObject = {
    Project: <ProjectModal state={state} />,
    Login: <LoginModal />,
    FieldChoice: <FieldChoice state={state} />,
  };

  return <>{findModalObject[modalName]}</>;
};

export default findModal;
