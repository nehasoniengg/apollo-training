import {pubsub, USER_ADDED } from '../../subscription';
const Mutation = {
    createUser: async (parent, args, { dataSources }, input) => {
       const user = {
        id: args.data.id,        
        name: args.data.name,
        password: args.data.password,
        role: args.data.role,   
      }
      const data =  await dataSources.traineeApi.addTrainee(trainee);     
      pubsub.publish(USER_ADDED, { addTrainee: data });          
      return data;
    },
    updateUser: async (parent, args, { dataSources }, input) => {
        const user = {
            id: args.data.id,        
            name: args.data.name,
          }
          return this.put(user);
    },
    deleteUser: async (parent, args, { dataSources }, input) => {
        const user = {
            id: args.data.id,        
          }
          return this.delete(user);
    }
}

