import MongooseModel from '../../core/models/mongoose-model.abstract';
import { ObjectId } from 'mongodb';
import { BrowserSession } from './browser-session.model';
import MongooseSingleton from '../../core/utils/mixins/mongoose-singleton.mixin';

export class UserSessionSchema extends MongooseModel {
    protected schemaObject = {
        userId: {
            type: ObjectId,
        },
        sessions: [BrowserSession.getMongooseModel()]
    }
}

export const UserSession = MongooseSingleton(UserSessionSchema);