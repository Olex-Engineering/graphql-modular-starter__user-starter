import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';

export const userTypesSchema: DocumentNode = gql`
    type User {
        _id: ID!
        email: String!
        role: Role!
        signedBy: LoginMethods!
        password: String
        image: String
        firstName: String
        lastName: String
        bio: String
    }
`;

export const userEnumsSchema = gql`
    enum LoginMethods {
        GOOGLE,
        FACEBOOK,
        EMAIL
    }

    enum Role {
        ADMIN,
        EDITOR,
        AUTHOR,
        USER,
    }
`;