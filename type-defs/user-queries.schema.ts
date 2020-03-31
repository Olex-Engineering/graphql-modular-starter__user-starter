import { gql } from 'apollo-server';

export const userQueriesSchema = gql`
    extend type Query {
        users(options: ListOptionsInput): [User]! 
        userById(id: ID!): User!
        test: String!
    }
`;