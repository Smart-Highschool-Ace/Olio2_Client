import { useCallback } from "react";
import { useModalContext } from "Utils/Contexts/ModalContext";
import FieldChoice from "../../FieldChoice/FieldChoice";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../GQL/Project";

export interface ProjectModalProps {
  state: string;
}

export interface ModalValue {
  name: string;
  introduction: string;
  ProjectField: { name: string };
  start_at: Date;
  end_at: Date;
  description: string;
  ProjectSkill: { name: string };
  ProjectMember: { member: string; role: string };
  link: string;
  logo: string;
  images: { image: string; order: number };
}

export const useProjectViewQuery = (id: number) => {
  const { loading, error, data } = useQuery(GET_PROJECT(id));
  return [loading, error, data];
};

export const useProjectWriteQuery = (p: ModalValue) => {};

export const useProjectEditQuery = () => {};

export const handler = () => {
  const handleClickRegister = useCallback((props: ProjectModalProps) => {
    const { addModal, removeModal } = useModalContext();
    removeModal();

    addModal({
      title: "",
      element: <FieldChoice state={props.state} />,
      width: "1450px",
      height: "900px",
    });
  }, []);

  return handleClickRegister;
};
