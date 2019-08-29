import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
class UserApi extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = configuration.service_url
        //console.log('user :::::::',this.baseUrl);
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
      }
    //   async me() {
    //     const data = await this.get(`user/me`);
    //         return data;
    //   }

    async me() {
        this.get(`user/me`).then(res => {
          console.log('user me :::::::::',res);
        })
        return this.get(`user/me`);
      }
    
}
export default UserApi;