const trainee = [
    {
      name: 'trainee1',
      email: 'trainee1@successive.tech',
    },
    {
        name: 'trainee2',
        email: 'trainee2@successive.tech',
    },
    {
        name: 'trainee3',
        email: 'trainee3@successive.tech',
    },
    {
        name: 'trainee4',
        email: 'trainee4@successive.tech',
    },

  ];
const Trainee = (perent, args,context,input) => {
        console.log('inside resolvers::');
        return trainee;
    };
 export {Trainee};

 