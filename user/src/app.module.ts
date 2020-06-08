import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersResolvers } from './user.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [UsersResolvers],
})
export class AppModule {}
