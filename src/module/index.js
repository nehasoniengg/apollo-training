import { Query as userQuery } from './user';
import {Query as traineeQuery , Mutation as traineeMutation ,Subscription as traineeSubscription} from './trainee';
// import {Mutation as userMutation} from './user';
// import {Subscription as userSubscription} from './user';
console.log('inside module index tarinee ::',traineeQuery);
console.log('inside module index user  ::',userQuery);

const resolvers = {
    Query:{
    ...userQuery,
    ...traineeQuery
    },
     Mutation:{
         //...userMutation,  
         ...traineeMutation
     },
      Subscription :{
    //      ...userSubscription,
          ...traineeSubscription
      },

    
    
};
export default resolvers;
