import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($project: ProjectCreateInput!) {
    createProject(project: $project)
  }
`;

export const GET_PROJECT = gql`
  query {
    project(id: 1) {
      id
      owner {
        email
      }
      view
      name
      logo
      introduction
      start_at
      end_at
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
      ProjectLike {
        user {
          email
        }
      }
    }
  }
`;

//TODO: 변경하는 자료마다 자료 요청쿼리 생각하기
export const UPDATE_PROJECT = (id: number, project: any) => gql`
  mutation updateProject(${project}: ProjectUpdateInput!) {
    updateProject(id: $id, project: $project) {
      link
    }
  }
`;

export const DELETE_PROJECT = (id: number) => gql`
  mutation deleteProject(id: ${id}) {
	  error
  }
`;
