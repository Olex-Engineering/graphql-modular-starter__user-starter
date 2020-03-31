import { userTypesSchema, userEnumsSchema } from './type-defs/user-types.schema';
import Module from '../core/models/module.abstract';
import { UserQueriesCore } from './resolvers/user-queries';
import { UserMutationsCore } from './resolvers/user-mutations';
import { userQueriesSchema } from './type-defs/user-queries.schema';
import { userMutationsSchema, userInputsSchema, userPayloadSchema } from './type-defs/user-mutations.schema';
// import { userSubcriptionsSchema } from './type-defs/user-subscription.schema';
import gqModule from '../core/utils/decorators/module.decorator';

@gqModule({
    shemas: {
        userTypesSchema,
        userQueriesSchema,
        userMutationsSchema,
        userPayloadSchema,
        // userSubcriptionsSchema,
        userEnumsSchema,
        userInputsSchema,
    },
    resolvers: {
        Query: [new UserQueriesCore()],
        Mutation: [new UserMutationsCore()],
        Subscription: [],
    }
})
class AuthModule extends Module {} 

export default AuthModule;