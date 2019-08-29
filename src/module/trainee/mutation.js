 import {pubsub, TRAINEE_ADDED } from '../../subscription';
  import  errorHandler  from '../../lib/errorHandler' ;
import { from } from 'apollo-link';
 const Mutation = {
  addTrainee: async (parent,args,{dataSources},input) =>{
    console.log('args in tranee mutation:::::',args);
    const trainee = {
       name: args.data.name,
       email:args.data.email,
       password: args.data.password,    }
    const data =  await dataSources.traineeApi.addTrainee(trainee);
    if (data.message){
      new errorHandler(data.message) 
    }

    pubsub.publish(TRAINEE_ADDED, { addTrainee: data });
        
    return data;
  },
 updateTrainee: async (parent,args,{dataSources},input) =>{
   console.log('args is update:::',args);
   const trainee1 = {
     _id:args.data._id,
   }
  const data =  await dataSources.traineeApi.updateTrainee(trainee1);
  return data;
} ,
// deleteTrainee: async (parent,args,{dataSources},input) =>{
//   const data =  await dataSources.traineeApi.getTraine(args);
//   return data;
// } ,
}  
 export default Mutation ;