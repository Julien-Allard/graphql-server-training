import { startStandaloneServer } from '@apollo/server/standalone';
import { apolloServer } from './graphql/apolloServer.js';
import * as dotenv from 'dotenv';
dotenv.config();
const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: parseInt(process.env.PORT) || 5000 },
});
console.log(`🚀 Server listening at: ${url}`);
