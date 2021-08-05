/* eslint-disable */
// this is an auto generated file. This will be overwritten

import { gql } from "@apollo/react-hooks";

export const getUser = /* GraphQL */ gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      password
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
