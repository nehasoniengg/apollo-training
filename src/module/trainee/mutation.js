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
         try {
          const data =  await dataSources.traineeApi.addTrainee(trainee); 
          pubsub.publish(TRAINEE_ADDED, { addTrainee: data });   
          return data;
        }catch(err) {
          let error = err.extensions.response.body;
          console.log("express error",error)
          return new errorHandler(error)          
        } 
     },
  updateTrainee: async(parent,args,{dataSources},info) =>{
    const data = await dataSources.traineeApi.updateTrainee(args);
    pubsub.publish(UPDATE_TRAINEE, { updateTrainee: data });        
    return data;
  },
  deleteTrainee: async(parent,args,{dataSources},info) =>{
    const data = await dataSources.traineeApi.deleteTraine(args);
    pubsub.publish(DELETE_TRAINEE, { deleteTrainee: data });        
    return data;

  }
}  
 export default Mutation ;