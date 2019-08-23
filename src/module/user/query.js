const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.UserApi.me();
        return data;
    }
}
export default Query;