import { useQuery } from "@apollo/client";
import { GET_PROJECT, DELETE_PROJECT } from "../../GQL/Project";

export interface ProjectModalProps {
  state: string;
}

export const useProjectViewQuery = (id: number) => {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: id },
  });
  return [loading, error, data];
};

export const useProjectDeleteQuery = (id: number) => {
  const { loading, error } = useQuery(DELETE_PROJECT, {
    variables: { id: id },
  });
  return [loading, error];
};
