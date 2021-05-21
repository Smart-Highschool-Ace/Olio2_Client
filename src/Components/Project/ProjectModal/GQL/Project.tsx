import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($project: ProjectCreateInput!) {
    createProject(project: $project)
  }
`;

export const GET_PROJECT = gql`
  query getProject($id: Int) {
    project(id: $id) {
      name
      logo
      introduction
      description
      start_at
      end_at
      ProjectImage {
        image
        order
      }
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

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: Int!, $project: ProjectUpdateInput!) {
    updateProject(id: $id, project: $project) {
      name
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: Int!) {
    error
  }
`;
