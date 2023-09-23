import { createSchema, createYoga } from 'graphql-yoga';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';
import { createContext } from './context';

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: createContext(),
});

const server = Bun.serve(yoga);

console.info(
  `Server is running on http://${server.hostname}:${server.port}${yoga.graphqlEndpoint}`
);
