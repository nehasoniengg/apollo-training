import  {AuthenticationError, ForbiddenError ,UserInputError , ApolloError } from 'apollo-server-express'; 
const error_code = {
    BAD_REQUEST_ERROR: 400,
    UNAUTHENTICATED_ERROR: 401,
    FORBIDDEN_ERROR: 403,
    INTERNAL_SERVER_ERROR: 500,
}
class errorHandler {
    constructor(err){
        console.log('error handler:::::',err)
    const {code , msg:message} = err.error;
    if(code == error_code.BAD_REQUEST_ERROR){
        this.userInputError(message)
    }
        else if (code == error_code.UNAUTHENTICATED_ERROR){
              this.authenticationError(message)
        }
        else if (code == error_code.FORBIDDEN_ERROR){
            this.forbiddenError(message)
        }
        else {
            this.apolloError(message)
        }
    }

     auth(err){
   //      formatError(err);
   throw new AuthenticationError(err);
      }
    forbidden(err){
        throw new ForbiddenError (err);
    //formatError(err);
        }
   userInput(err){
      throw new UserInputError (err);
    //formatError(err);
   } 
   apolloError(err){
       throw new ApolloError (err);
    //formatError(err);

   }

}




export default errorHandler ; 
