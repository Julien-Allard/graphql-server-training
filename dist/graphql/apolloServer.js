import { ApolloServer } from '@apollo/server';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
export const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});
