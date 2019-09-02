const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.userApi.userMe();
        return data;
    }
}
export default Query;