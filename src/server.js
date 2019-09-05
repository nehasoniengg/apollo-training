import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import configuration from './config/configuration';
import schema from '.';
import { TraineeApi, UserApi } from './services/index';
import { http , createServer} from 'http';
import FormatError from './lib/formaterror'

const schemaUser = makeExecutableSchema(schema);
const app = express();
const server = new ApolloServer({
  schema: schemaUser,
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
  },
  formatError: (err) => {
    const formatError = new FormatError();
    const error = formatError.customError(err);
    return error;
  }
});
server.applyMiddleware({ app });
const port = configuration.port;
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
