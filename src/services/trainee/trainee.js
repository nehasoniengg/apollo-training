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
    const data = await this.get(`trainee`);
    return data;
  }
}
export default TraineeApi;
