<<<<<<< HEAD
const Query ={
  getTrainee: async (parent,args,{dataSources},input) =>{
   const data =  await dataSources.traineeApi.getTraine();
   return data;
 } ,
  
} 
export default Query;  
=======
const Query = {
  getTrainee: async (parent, args, { dataSources }, input) => {
    const data = await dataSources.traineeApi.getTraine();
    return data;
  }
}
export default Query;   
>>>>>>> 8d5b0fcb198afd36245b0d8ba068b25009b774e3
