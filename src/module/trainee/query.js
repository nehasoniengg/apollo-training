import{errorHandler} from '../../lib/errorHandler';
const Query ={
  getTrainee: async (parent,args,{dataSources},input) =>{
   const data =  await dataSources.traineeApi.getTraine();
   if (data.error){
    new errorHandler(data.error) 
  }
   return data;
 },  
} 
export default Query;  

