import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import resolvers from './module';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true })
// console.log('typedefssssssssss::::::::',typeDefs);


export default {
    typeDefs,
    resolvers
};