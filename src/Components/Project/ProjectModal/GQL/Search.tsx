import { gql } from "@apollo/client";

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
