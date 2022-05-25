import React, { useCallback } from "react";
import { useModalContext } from "Utils/Contexts/ModalContext";
import ProjectModal from "./ProjectModal/ProjectModal";
import FieldChoice from "./FieldChoice/FieldChoice";
import { ProjectType } from "./type";

function Project(props: { state: ProjectType }) {
  const { addModal } = useModalContext();
  const { state } = props;

  const handleClickRegister = useCallback(() => {
    addModal({
      title: "",
      element: <ProjectModal state={state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "1000px",
    });
  }, [addModal, state]);

  const handleClickRegisterToChoice = useCallback(() => {
    addModal({
      title: "",
      element: <FieldChoice state={state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "1000px",
    });
  }, [addModal, state]);

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
