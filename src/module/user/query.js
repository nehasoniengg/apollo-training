import  errorHandler  from '../../lib/errorHandler' ;
import {pubsub,LOGIN} from '../../subscription';
const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.userApi.userMe();
        return data;
    },
    login: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.userApi.userLogin(args);
        pubsub.publish(LOGIN, { login: data });
        return data;
    },
}
export default Query;