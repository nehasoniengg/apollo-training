import  errorHandler  from '../../lib/errorHandler' ;
import {pubsub,LOGIN} from '../../subscription';
const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.userApi.userMe();
        if (data.error){
            new errorHandler(data) 
          }
        return data;
    },
    login: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.userApi.userLogin(args);
        if (data.error){
            new errorHandler(data) 
          }
        pubsub.publish(LOGIN, { login: data });
        return data;
    },
}
export default Query;