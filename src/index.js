import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import resolvers from './module';
<<<<<<< HEAD
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true })
// console.log('typedefssssssssss::::::::',typeDefs);

=======
const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true })
>>>>>>> 8d5b0fcb198afd36245b0d8ba068b25009b774e3
export default {
    typeDefs,
    resolvers
};