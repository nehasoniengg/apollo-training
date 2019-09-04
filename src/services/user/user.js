import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
import  errorHandler  from '../../lib/errorHandler' ;
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
      async userLogin(args){
        const {email , password } = args.data;
        const data = await this.post(`user/login`,{ email , password });     
        return data;
      }  
}
export default UserApi;