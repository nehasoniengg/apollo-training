// const trainee = [
//     {
//       name: 'trainee1',
//       email: 'trainee1@successive.tech',
//     },
//     {
//         name: 'trainee2',
//         email: 'trainee2@successive.tech',
//     },
//     {
//         name: 'trainee3',
//         email: 'trainee3@successive.tech',
//     },
//     {
//         name: 'trainee4',
//         email: 'trainee4@successive.tech',
//     },

//   ];
// // const getTrainee = (root, args,context,input) => {
// //         console.log('inside resolvers::');
// //         return trainee;
// //     };

const Query ={
  getTrainee: async (parent,args,{dataSources},input) =>{
   const data =  await dataSources.traineeApi.getTraine();
   return data;
 }
} 
export default Query;   