import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../../config/configuration';
import  errorHandler  from '../../lib/errorHandler';
import FormatError from '../../lib/formaterror';
class TraineeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.service_url
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getTraine(){
    try {
      console.log("inside get trainee error")
      const data = await this.get(`trainee`);    
      return data;
    }catch(err) {
      let error = err.extensions.response.body;
      console.log("express error",error)
      return new errorHandler(error)
      
    }
}
  async addTrainee(trainee) {
     return this.post('trainee', trainee);
   }
      async updateTrainee(args) {
        try {
          console.log("in error")
          const { id, dataToUpdate } = args.input;
      const data = await this.put('trainee', { id, dataToUpdate });    
          return data;
        }catch(err) {
          let error = err.extensions.response.body;
          console.log("express error",error)
          return new errorHandler(error)
          
        }
   }
      async deleteTraine(args){

        try {
          console.log("in delete error")
          const id = args.input.id;
        const data2 = await this.delete(`trainee/${id}`);
        return data2;
        }catch(err) {
          let error = err.extensions.response.body;
          console.log("express error",error)
          return new errorHandler(error)
          
        }

       }
      
    }
export default TraineeApi;
