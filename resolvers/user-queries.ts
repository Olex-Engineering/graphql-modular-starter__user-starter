import User from '../models/user.model';
import Parsers from '../../core/utils/parsers';
import { IListOptions } from '../../core/interfaces/parsers.interface';
import Resolver from '../../core/utils/decorators/resolver.decorator';
import ResolverModule from '../../core/models/resolver-module.abstract';

export class UserQueriesCore extends ResolverModule {
    @Resolver()
    protected async users(parent, { options }: IListOptions, context, info) {
        const { filter, queryOptions } = Parsers.parseListOptionsInput(options);
        const projection = Parsers.mapInfoToProjection(info);
        return User.find(filter, projection, queryOptions); 
    }

    @Resolver()
    protected async userById(parent, { id }: { id: string }, context, info) {
        const projection = Parsers.mapInfoToProjection(info);
        return User.findById(id, projection);
    }
}