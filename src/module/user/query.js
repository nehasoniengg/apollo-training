const user = {
      name: 'user1',
    }

  
   const me = (perent, args,context,input) => {
            console.log('inside user resolvers::');
            return user;
        }
    
    export  {me};
  
  


 