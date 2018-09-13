import { gql } from 'apollo-server-express'

export const UserTypeDef = gql`
  type Query {
    allUsers: [User!]!
    getUser(userName: String!): User
  }

  type User {
    id: Int!
    userName: String!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createUser(userName: String!): User
    updateUser(userName: String!): [Int!]!
    deleteUser(userName: String!): Int!
  }
`;
