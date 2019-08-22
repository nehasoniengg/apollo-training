
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import configuration from './config/configuration';
import schema from '.';
import { TraineeApi, UserApi } from './services/index';

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
  context: ({ req }) => {
    return {
      token: req.headers.authorization
    }
  }
});
server.applyMiddleware({ app });
const port = configuration.port;
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);

