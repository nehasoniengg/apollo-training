import {pubsub, LOGIN } from '../../subscription';
const Subscription ={
login:{
    subscribe: () => pubsub.asyncIterator([LOGIN]),
}
}
export default Subscription;