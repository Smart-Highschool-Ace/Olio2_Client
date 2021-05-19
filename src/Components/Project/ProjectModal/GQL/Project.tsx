import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($project: ProjectCreateInput!) {
    createProject(project: $project)
  }
`;

export const GET_PROJECT = (id: number) => gql`
{
  project(id: ${id}) {
    name
    logo
    introduction
    description
    start_at
    end_at
    images
    link
    ProjectSkill {
      skill {
        name
      }
    }
    ProjectMember {
      member {
        email
      }
    }
    ProjectField {
      name
    }
  }
}
`;

export const UPDATE_PROJECT = (project: any) => gql`
  mutation updateProject(${project}: ProjectUpdateInput!) {
    updateProject(id: $id, project: $project) {
    }
  }
`;

export const DELETE_PROJECT = (id: number) => gql`
  mutation deleteProject(id: ${id}) {
	  error
  }
`;
