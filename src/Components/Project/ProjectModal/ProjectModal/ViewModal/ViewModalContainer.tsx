import { useQuery } from "@apollo/client";
import { GET_PROJECT, DELETE_PROJECT } from "../../GQL/Project";

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

export const useProjectDeleteQuery = (id: number) => {
  const { loading, error } = useQuery(DELETE_PROJECT(id));
  return [loading, error];
};
