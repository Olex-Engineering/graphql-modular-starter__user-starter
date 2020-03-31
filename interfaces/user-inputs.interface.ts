import { IUser } from './user.interface';

export type CreateUserInput = IUser;

export type UpdateUserPasswordInput = {
    oldPassword: string;
    newPassword: string;
}

export type LoginUserInput = {
    email: string,
    password: string,
}

export type UpdateUserEmailInput = {
    email: string;
    password: string;
}

export type UpdateUserDataInput = Pick<IUser, 'role' & 'image' & 'firstName' & 'lastName' & 'bio'>;