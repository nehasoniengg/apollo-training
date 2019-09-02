import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
class UserApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = configuration.service_url
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
      }
      async userMe() {
        const data = await this.get(`user/me`);
        return data;
      }    
}
export default UserApi;