import  {AuthenticationError, ForbiddenError ,UserInputError , ApolloError } from 'apollo-server-express'; 
const error_code = {
    BAD_REQUEST_ERROR: 400,
    UNAUTHENTICATED_ERROR: 401,
    FORBIDDEN_ERROR: 403,
    INTERNAL_SERVER_ERROR: 500,
}
class errorHandler{
    constructor(err){
    const {status , error} = err;
    console.log('error :::::',status);
    if(status == error_code.BAD_REQUEST_ERROR){
        console.log('inside error:::::::',error);
        this.UserInputError(error.message)
    }
        else if (status == error_code.UNAUTHENTICATED_ERROR){
              this.AuthenticationError(error.message)
        }
        else if (status == error_code.FORBIDDEN_ERROR){
            this.ForbiddenError(error.message)
        }
        else if (status == error_code.INTERNAL_SERVER_ERROR){
            this.apolloError(error.message)
        }
    }  
     auth(err){
   throw new AuthenticationError(err);
      }

    forbidden(err){
        throw new ForbiddenError (err);
        }

   userInput(err){
            throw new UserInputError (err);
   }
   
   
   apolloError(err){
        throw new ApolloError (err);
}
}
export default errorHandler ; 
