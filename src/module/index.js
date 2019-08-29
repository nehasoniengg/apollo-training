import { Query as userQuery } from './user';
<<<<<<< HEAD
import {Query as traineeQuery , Mutation as traineeMutation ,Subscription as traineeSubscription} from './trainee';
// import {Mutation as userMutation} from './user';
// import {Subscription as userSubscription} from './user';
console.log('inside module index tarinee ::',traineeQuery);
console.log('inside module index user  ::',userQuery);


=======
import {Query as traineeQuery} from './trainee';
>>>>>>> 8d5b0fcb198afd36245b0d8ba068b25009b774e3
const resolvers = {
    Query:{
    ...userQuery,
    ...traineeQuery
<<<<<<< HEAD

    },
     Mutation:{
         //...userMutation,  
         ...traineeMutation
     },
      Subscription :{
    //      ...userSubscription,
          ...traineeSubscription
      },

    
    
=======
    }
>>>>>>> 8d5b0fcb198afd36245b0d8ba068b25009b774e3
};
export default resolvers;
