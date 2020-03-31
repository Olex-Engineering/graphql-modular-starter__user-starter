import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

export interface IUserSession extends Document {
    userId: ObjectId;
    sessions: IBrowserSession[];
}

export interface IBrowserSession extends Document {
    fingerprint: string;
    ip: string;
    refreshToken: string;
}