import { gql } from '@apollo/client';

export const PEOPLES = gql`
  query PEOPLES($pageNumber: Int) {
    peoples(pageNumber: $pageNumber) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const GET_PEOPLE_BY_ID = gql`
  query ExampleQuery($name: String!) {
    getPeopleByName(name: $name) {
      name
      height
      gender
      mass
      homeworld
    }
  }
`;