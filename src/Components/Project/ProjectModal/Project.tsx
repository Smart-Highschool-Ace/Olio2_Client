import { useHandleClickModalBtn } from "hook";
import { ModalStateType } from "../../../Utils/GlobalTypes";
import React, { useCallback } from "react";

function Project(props: { state: ModalStateType }) {
  const { state } = props;

  const handleClickRegister = useHandleClickModalBtn({
    modalName: "Project",
    state,
  });

  const handleClickRegisterToChoice = useHandleClickModalBtn({
    modalName: "FieldChoice",
    state,
  });

  const openModal = () => {
    switch (state) {
      case "writing":
        handleClickRegisterToChoice();
        break;
      default:
        handleClickRegister();
    }
  };

  return (
    <button type="button" onClick={() => openModal()}>
      modal 을 보고싶어?
    </button>
  );
}

export default Project;
