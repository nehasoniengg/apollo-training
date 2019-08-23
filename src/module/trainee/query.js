const Query = {
  getTrainee: async (parent, args, { dataSources }, input) => {
    const data = await dataSources.traineeApi.getTraine();
    return data;
  }
}
export default Query;   