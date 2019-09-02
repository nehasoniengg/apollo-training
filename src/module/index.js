import { Query as userQuery } from './user';
import {Query as traineeQuery , Mutation as traineeMutation ,Subscription as traineeSubscription} from './trainee';
const resolvers = {
    Query:{
    ...userQuery,
    ...traineeQuery
    },
     Mutation:{ 
    ...traineeMutation
     },
      Subscription :{
    ...traineeSubscription
      },  
    };
export default resolvers;
