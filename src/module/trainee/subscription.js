import {TRAINEE_ADDED , pubsub } from '../../subscription' ;
const Subscription ={
    addTrainee:{
        subscribe: () => pubsub.asyncIterator([TRAINEE_ADDED]),
    },
};
export default  Subscription;

