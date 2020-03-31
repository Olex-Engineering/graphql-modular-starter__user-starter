import { Document } from 'mongoose';

export type UserRole = 'ADMIN' | 'EDITOR' | 'AUTHOR' | 'USER'; 
export type LoginMethods = 'GOOGLE' | 'FACEBOOK' | 'EMAIL';

export interface IUser {
    email: string;
    role: UserRole;
    singedBy: LoginMethods;
    password?: string;
    image?: string;
    firstName?: string;
    lastName?: string;
    bio?: string;
}

export interface IUserDocument extends Document, IUser {}

export interface IUserPayload {
    user: IUserDocument,
    token: string,
    refreshToken: string,
}