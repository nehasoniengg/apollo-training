import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import configuration from './config/configuration';
import schema from './index'
import { TraineeApi, UserApi } from './services/index';
import createServer from 'https';
import http from 'http';
// import { typeDefs,resolvers} from './index';
// import { errorHandler } from '../src/lib/errorHandler';

console.log('error message :::::::::',schema);
const app = express();
console.log('::::inside server::::::::');
const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  // typeDefs, resolvers ,
  dataSources: () => {
    return {
      traineeApi: new TraineeApi(),
      userApi: new UserApi()
    };
  },
  context: ({ req, connection }) => {
    if (connection) {

      return connection.context;

    } else {
      const token = req.headers.authorization || "";

      return { token };
    }
  }
});
server.applyMiddleware({ app });
const port = configuration.port;

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
// console.log('server check:::::::::',server.installSubscriptionHandlers);


httpServer.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)

})
