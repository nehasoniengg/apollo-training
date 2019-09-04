 import {pubsub, TRAINEE_ADDED,UPDATE_TRAINEE ,DELETE_TRAINEE} from '../../subscription';
  import  errorHandler  from '../../lib/errorHandler' ;
import { from } from 'apollo-link';
 const Mutation = {
  addTrainee: async (parent,args,{dataSources},input) =>{
    const trainee = {
       name: args.data.name,
       email:args.data.email,
       password: args.data.password, 
         }
    const data =  await dataSources.traineeApi.addTrainee(trainee);
       if (data.error){
      new errorHandler(data) 
    }
    pubsub.publish(TRAINEE_ADDED, { addTrainee: data });        
    return data;
  },
  updateTrainee: async(parent,args,{dataSources},info) =>{
    const data = await dataSources.traineeApi.updateTrainee(args);
    if (data.error){
      new errorHandler(data) 
    }
    pubsub.publish(UPDATE_TRAINEE, { updateTrainee: data });        
    return data;
  },
  deleteTrainee: async(parent,args,{dataSources},info) =>{
    const data = await dataSources.traineeApi.deleteTraine(args);
    if (data.error){
      new errorHandler(data) 
    }
    pubsub.publish(DELETE_TRAINEE, { deleteTrainee: data });        
    return data;

  }
}  
 export default Mutation ;