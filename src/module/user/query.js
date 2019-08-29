const Query = {
    me: async (parent, args, { dataSources }, input) => {
        const data = await dataSources.UserApi.me();
<<<<<<< HEAD
        console.log('user:::::::',data);
=======
>>>>>>> 8d5b0fcb198afd36245b0d8ba068b25009b774e3
        return data;
    }
}
export default Query;