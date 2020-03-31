import { emailRegex, imageRegex } from '../../core/utils/regulars';
import MongooseModel from '../../core/models/mongoose-model.abstract';
import MongooseSingleton from '../../core/utils/mixins/mongoose-singleton.mixin';
import { IUserDocument } from '../interfaces/user.interface';

export class UserScheme extends MongooseModel {
    protected schemaObject = {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: emailRegex,
        },
        role: {
            type: String,
            required: true,
            default: 'USER',
            enum: ['ADMIN', 'EDITOR', 'AUTHOR', 'USER'],
        },
        signedBy: {
            type: String,
            required: true,
            enum: ['GOOGLE', 'FACEBOOK', 'EMAIL'],
        },
        password: {
            type: String,
        },
        image: {
            type: String,
            match: imageRegex,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        bio: {
            type: String,
        }
    };
}

export const UserCore = MongooseSingleton(UserScheme);

export default UserCore.getMongooseModel<IUserDocument>();