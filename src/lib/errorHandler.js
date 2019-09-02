import  {AuthenticationError, ForbiddenError ,UserInputError , apolloError } from 'apollo-server-express'; 
const error_code = {
    BAD_REQUEST_ERROR: 400,
    UNAUTHENTICATED_ERROR: 401,
    FORBIDDEN_ERROR: 403,
    INTERNAL_SERVER_ERROR: 500,
}
class errorHandler{
    constructor(err){
    const {status , error} = err;
    if(status == error_code.BAD_REQUEST_ERROR){
        this.UserInputError(error)
    }
        else if (status == error_code.UNAUTHENTICATED_ERROR){
              this.AuthenticationError(error)
        }
        else if (status == error_code.FORBIDDEN_ERROR){
            this.ForbiddenError(error)
        }
        else if (status== error_code.INTERNAL_SERVER_ERROR){
            this.apolloError(error)
        }
    }  
     auth(err){
   throw new AuthenticationError(err);
      }

    forbidden(){
        throw new ForbiddenError (err);
        }

   userInput(){
            throw new UserInputError (err);
   }
   
   
   apolloError(){
        throw new apolloError (err);
}
}
export default errorHandler ; 
