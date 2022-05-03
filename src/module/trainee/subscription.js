import {TRAINEE_ADDED , pubsub , UPDATE_TRAINEE ,DELETE_TRAINEE} from '../../subscription' ;
const Subscription ={
    addTrainee:{
        subscribe: () => pubsub.asyncIterator([TRAINEE_ADDED]),
    },
    updateTrainee:{
        subscribe: () => pubsub.asyncIterator([UPDATE_TRAINEE]),
    },
    deleteTrainee:{
        subscribe: () => pubsub.asyncIterator([DELETE_TRAINEE]),
    },
};
export default  Subscription;

