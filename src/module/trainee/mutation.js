 import {pubsub, TRAINEE_ADDED } from '../../subscription';
  import  errorHandler  from '../../lib/errorHandler' ;
import { from } from 'apollo-link';
 const Mutation = {
  addTrainee: async (parent,args,{dataSources},input) =>{
    console.log('args in tranee mutation:::::',args);
    const trainee = {
       name: args.data.name,
       email:args.data.email,
       password: args.data.password, 
         }
    const data =  await dataSources.traineeApi.addTrainee(trainee);
    if (data.message){
      new errorHandler(data.message) 
    }
    pubsub.publish(TRAINEE_ADDED, { addTrainee: data });        
    return data;
  },
}  
 export default Mutation ;