import React from "react";
import {
  EmailConfirm,
  FieldChoice,
  LoginModal,
  ProjectModal,
  RegisterModal,
} from "../Components";
import { ModalName, ModalStateType } from "../Utils/GlobalTypes";

const findModal = (
  modalName: ModalName,
  state: ModalStateType
): JSX.Element => {
  const findModalObject = {
    Project: <ProjectModal state={state} />,
    Login: <LoginModal />,
    FieldChoice: <FieldChoice state={state} />,
    Register: <RegisterModal />,
    EmailConfirm: <EmailConfirm />,
  };

  return <>{findModalObject[modalName]}</>;
};

export default findModal;
