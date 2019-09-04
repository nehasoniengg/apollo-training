import { Query as userQuery, Subscription as userSubscription } from './user';
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
    ...traineeSubscription,
    ...userSubscription
      },  
    };
export default resolvers;
