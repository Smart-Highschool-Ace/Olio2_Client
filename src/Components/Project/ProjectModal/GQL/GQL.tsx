import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation createProject($project: ProjectCreateInput!) {
    createProject(project: $project)
  }
`;

export const GET_PROJECT = (id: number) => gql`
{
  query project(id: ${id}) {
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

//TODO: 변경하는 자료마다 자료 요청쿼리 생각하기
export const UPDATE_PROJECT = (project: any) => gql`
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

export const SKILL_SEARCH = (keyword: string) => gql`
  query {
    skillSearch(search_word: ${keyword}) {
      skill {
        name
      }
    }
  }
`;

export const USER_SEARCH = (keyword: string) => gql`
  query {
    nameSearch(search_word: ${keyword}) {
      user {
        profile_image
        introduction
        name
        portfolio {
          link
        }
      }
    }
  }
`;
