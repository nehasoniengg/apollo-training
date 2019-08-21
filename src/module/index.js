//import { Query as TraineeQuery } from './trainee';
import { me } from './user';
import {Trainee} from './trainee';
// const resolvers = {
//     ...UserQuery,
//     ...TraineeQuery,
// };
const resolvers = {
    Query: {
        me,
        Trainee
    }
}
export default resolvers;
