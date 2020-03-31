import MongooseModel from '../../core/models/mongoose-model.abstract';
import MongooseSingleton from '../../core/utils/mixins/mongoose-singleton.mixin';

export class BrowserSessionScheme extends MongooseModel {
    protected schemaObject = {
        fingerprint: {
            type: String,
            required: true,
        },
        ip: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            required: true,
        }
    }
}

export const BrowserSession = MongooseSingleton(BrowserSessionScheme);