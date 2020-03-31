import { IUser } from '../interfaces/user.interface';
import User  from '../models/user.model';
import { LoginUserInput } from '../interfaces/user-inputs.interface';
import Parsers from '../../core/utils/parsers';
import Resolver from '../../core/utils/decorators/resolver.decorator';
import ResolverModule from '../../core/models/resolver-module.abstract';

export class UserMutationsCore extends ResolverModule {
    @Resolver()
    protected async createUser(parent, { data } : { data: IUser }, context, info) {
        const user = new User(data);
        const savedUser = await user.save();
        return {
            token: '23rsdfadfsad',
            refreshToken: '34412349kgj',
            user: savedUser,
        };
    }

    @Resolver()
    protected async loginUser(parent, { data }: { data: LoginUserInput }, context, info) {
        const projection = Parsers.mapInfoToProjection(info);
        const user = await User.findOne({email: data.email}, projection);
        return {
            token: '23rsdfadfsad',
            refreshToken: '34412349kgj',
            user: user,
        };
    }

    // protected updateUserData(): IResolverFunc<IUserPayload, never> {
    //     return (parent, { id, data }, context, info) => {

    //     }
    // }

    // protected updateUserEmail(): IResolverFunc<IUserPayload, never> {
    //     return (parent, { id, data }, context, info) => {

    //     }
    //  }

    //  protected updateUserPassword(): IResolverFunc<IUserPayload, never> {
    //      return (parent, { id, data }, context, info) => {

    //      }
    //  }

    //  protected deleteUser(): IResolverFunc<never, IUserDocument> {
    //      return (parent, { id }, context, info) => {

    //      }
    //  }
}

// const mutationsResolvers: IUserMutationsTypes = new UserMutation().getResolvers();

// export {mutationsResolvers as default};