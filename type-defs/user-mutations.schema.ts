import { gql } from 'apollo-server';

export const userMutationsSchema = gql`
    extend type Mutation {
        createUser(data: CreateUserInput!) : UserPayload!
        loginUser(data: loginUserInput!): UserPayload!
        updateUserData(id: ID!, data: UpdateUserDataInput): UserPayload!
        updateUserEmail(id: ID!, data: UpdateUserEmailInput!): UserPayload!
        updateUserPassword(id: ID!, data: UpdateUserPasswordInput): UserPayload!
        deleteUser(id: ID!): User!
    }
`;

export const userInputsSchema = gql`
    input CreateUserInput {
        email: String!
        signedBy: LoginMethods!
        password: String
        role: Role
        image: String
        firstName: String
        lastName: String
        bio: String
    }

    input UpdateUserPasswordInput {
        oldPassword: String!
        newPassword: String!
    }

    input UpdateUserEmailInput {
        email: String!
        password: String!
    }

    input UpdateUserDataInput {
        role: Role
        image: String
        firstName: String
        lastName: String
        bio: String
    }

    input loginUserInput {
        email: String!
        password: String!
    }
`;

export const userPayloadSchema = gql`
    type UserPayload {
        user: User!
        token: String!
        refreshToken: String!
    }
`;