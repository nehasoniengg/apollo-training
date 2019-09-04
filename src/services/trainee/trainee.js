import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
import { errorHandler } from '../../lib/errorHandler';
class TraineeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.service_url
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getTraine(){
  const data = await this.get(`trainee`);
  return data;
}
  async addTrainee(trainee) {
     return this.post('trainee', trainee);
   }
      async updateTrainee(args) {
      const { id, dataToUpdate } = args.input;
      const data1 = await this.put('trainee', { id, dataToUpdate });
       if (data1.error){
        new errorHandler(data1.error) 
      }
      return data1;
      }
      async deleteTraine(args){
        const id = args.input.id;
        const data2 = await this.delete(`trainee/${id}`);
        return data2;
      }
      
    }
export default TraineeApi;
