
import configuration from './config/configuration';
import  { ApolloServer} from 'apollo-server-express';
import  express from 'express';
import typeDefs from './index';
import resolvers from './module/index'
// const server = new ApolloServer({
//        schema
//      });
//      const app = express();
//      server.applyMiddleware({ app });
//      const port = configuration.port;
// console.log('configuration:::::',port);
// app.listen({ port }, () =>
//   console.log(`🚀 Server ready at http://localhost:${port},${server.graphqlPath}`)
// );
const server = new ApolloServer({
      typeDefs,
      resolvers
    });
const app = express();
server.applyMiddleware({ app });
const port = configuration.port;
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port},${server.graphqlPath}`)
);

