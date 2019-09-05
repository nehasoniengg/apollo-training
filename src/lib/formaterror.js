import {ApolloError,AuthenticationError,ForbiddenError,UserInputError} from 'apollo-server-express'

class FormatError {
    
    customError(err) {
        console.log("err",err.message)
        if (err.originalError instanceof AuthenticationError) {
          return {
              message:err.message,
              code:401
            }
        }else if (err.originalError instanceof ForbiddenError) {
            return {
                message:err.message,
                code:403
            };
          }else if (err.originalError instanceof UserInputError) {
            return {
                message:err.message,
                code:400
              };
          }else {
            return {
                message:err.message,
                code:500
              };
          }
      }
}

export default FormatError;