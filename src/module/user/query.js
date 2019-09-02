const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.UserApi.me();

        console.log('user:::::::',data);
        return data;
    }
}
export default Query;