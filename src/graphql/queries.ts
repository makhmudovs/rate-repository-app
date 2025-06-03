import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetPostDetails {
    repositories {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
