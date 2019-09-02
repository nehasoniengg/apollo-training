import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
class TraineeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.service_url
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getTraine() {
    this.get(`trainee`).then(res => {
    })
    return this.get(`trainee`);
  }
  async addTrainee(trainee) {
     return this.post('trainee', trainee);
   }
      async updateTrainee(args) {
      const { _id, dataToUpdate } = args.input;
      const data1 = await this.put('trainee', { _id, dataToUpdate });
      return data1;
      }
      }
export default TraineeApi;
