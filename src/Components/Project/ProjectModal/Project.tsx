import React, { useCallback } from "react";
import ProjectViewModal from "./ProjectModal/ViewModal/ViewModal";
import FieldChoice from "./FieldChoice/FieldChoice";
import ProjectEditModal from "./ProjectModal/EditModal/EditModal";
import { useModalContext } from "Utils/Contexts/ModalContext";

interface ProjectProps {
  state: string;
}

const Project = (props: ProjectProps) => {
  const { addModal } = useModalContext();

  const handleClickRegister = useCallback(() => {
    addModal({
      title: "",
      element: <ProjectViewModal state={props.state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "900px",
    });
  }, []);

  const handleClickRegisterToEdit = useCallback(() => {
    addModal({
      title: "",
      element: <ProjectEditModal state={props.state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "900px",
    });
  }, []);

  const handleClickRegisterToChoice = useCallback(() => {
    addModal({
      title: "",
      element: <FieldChoice state={props.state} />,
      showOnlyBody: true,
      width: "1450px",
      height: "900px",
    });
  }, []);

  const openModal = () => {
    switch (props.state) {
      case "writing":
        handleClickRegisterToChoice();
        break;
      case "edit":
        handleClickRegisterToEdit();
        break;
      default:
        handleClickRegister();
    }
  };

  return <button onClick={() => openModal()}>modal을 보고싶어?</button>;
};

export default Project;
