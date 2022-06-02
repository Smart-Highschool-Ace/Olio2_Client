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
  let modal: JSX.Element = <></>;

  switch (modalName) {
    case "Project":
      modal = <ProjectModal state={state} />;
      break;
    case "Login":
      modal = <LoginModal />;
      break;
    case "FieldChoice":
      modal = <FieldChoice state={state} />;
      break;
    case "Register":
      modal = <RegisterModal />;
      break;
    case "EmailConfirm":
      modal = <EmailConfirm />;
      break;
    default:
      return <>잘못된 modal name</>;
  }

  return modal;
};

export default findModal;
