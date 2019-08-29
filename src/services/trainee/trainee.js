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
      console.log('inside trainee file:::',res);
    })
    return this.get(`trainee`);
  }
  async addTrainee(trainee) {
    console.log('args:::::',trainee);
    return this.post('trainee', trainee);
   }
  //  async updateTrainee(trainee1) {
  //   console.log('args:::::',trainee1);
  //   return this.put('trainee', trainee1);
  //  }  


    async updateTrainee(args) {

      const { _id, dataToUpdate } = args.input;
      const data1 = await this.put('trainee', { _id, dataToUpdate });
      return data1;
      }


    //   async deleteTrainee(args) {
      
    //   const { _id } = args.input;
    //   const data2 = await this.delete(`trainee/${_id}`);
    //   return data2;
      
    //   }
      

  // async addTrainee(args) {
  //       const data1 = await this.post(`trainee`,{ args.input.name, 
  //         args.input.email, args.input.password });
  //           return data1;
  //     }

    }

export default TraineeApi;
