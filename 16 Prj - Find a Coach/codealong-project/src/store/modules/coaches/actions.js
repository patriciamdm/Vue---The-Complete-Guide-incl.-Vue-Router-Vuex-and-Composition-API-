export default {
   addCoach(context, payload) {
      const newCoach = { ...payload, id: context.rootGetters.getUserId }
      context.commit('addCoach', newCoach);
   }
};