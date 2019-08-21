
import configuration from './config/configuration';
import  { ApolloServer} from 'apollo-server-express';
import  express from 'express';


const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


const typeDefs = `
    type Book {
        title : String !
        author : String !
    }
    type Query {
        books : [Book !] !
    }

`
const resolvers = {
  Query: {
    books: () => books,
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
console.log('checked :::',server.applyMiddleware({ app }));

const port = configuration.port;
console.log('configuration:::::',port);
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port},${server.graphqlPath}`)
);



// const { ApolloServer, gql } = require('apollo-server');
// const express = require('express');

// // The GraphQL schema
// const typeDefs = gql`
//   type Query {
//     hello: String
//     mockedString: String
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     hello : async () => {
//         const data = await fetch('https://fourtonfish.com/hellosalut/?mode=auto')
//         console.log('data',data)
//     }
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });
// server.listen({ port: 8000 },()=>{
//     console.log("server up")
// })

