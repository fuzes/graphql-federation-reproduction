import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolvers {

  @Query()
  getUser(@Args('id') id: string) {
    return { id: 1, name: 'test'};
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return { id: 1, name: 'tests'};
  }
}