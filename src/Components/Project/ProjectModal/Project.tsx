import React, { useCallback } from "react";
import { useModalContext } from "Utils/Contexts/ModalContext";
import ProjectModal from "./ProjectModal/ProjectModal";
import FieldChoice from "./FieldChoice/FieldChoice";

interface ProjectProps {
  state: string;
}

function Project(props: ProjectProps) {
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
  }, []);

  const handleClickRegisterToChoice = useCallback(() => {
    addModal({
      title: "",
      element: <FieldChoice state={state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "1000px",
    });
  }, []);

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
