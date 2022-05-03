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
        try {
          console.log("inside user me error")
          const data = await this.get(`user/me`);    
          return data;
        }catch(err) {
          let error = err.extensions.response.body;         
          console.log("express error",error)
          return new errorHandler(error)
          
        }
    }
      async userLogin(args){
        try {
          console.log("in error")
          const {email , password } = args.data;
          const data = await this.post(`user/login`,{ email , password });    
          return data;
        }catch(err) {
          let error = err.extensions.response.body;
          console.log("express error",error)
          return new errorHandler(error)
          
        }

      }  
}
export default UserApi;