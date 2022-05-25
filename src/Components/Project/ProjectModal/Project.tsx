import React, { useCallback } from "react";
import ProjectModal from "./ProjectModal/ProjectModal";
import FieldChoice from "./FieldChoice/FieldChoice";
import { useModalContext } from "Utils/Contexts/ModalContext";

interface ProjectProps {
  state: string;
}

const Project = (props: ProjectProps) => {
  const { addModal } = useModalContext();

  const handleClickRegister = useCallback(() => {
    addModal({
      title: "",
      element: <ProjectModal state={props.state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "1000px",
    });
  }, []);

  const handleClickRegisterToChoice = useCallback(() => {
    addModal({
      title: "",
      element: <FieldChoice state={props.state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "1000px",
    });
  }, []);

  const openModal = () => {
    switch (props.state) {
      case "writing":
        handleClickRegisterToChoice();
        break;
      default:
        handleClickRegister();
    }
  };

  return <button onClick={() => openModal()}>modal을 보고싶어?</button>;
};

export default Project;
