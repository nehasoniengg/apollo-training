import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
class UserApi extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = configuration.service_url
    }
}
export default UserApi;