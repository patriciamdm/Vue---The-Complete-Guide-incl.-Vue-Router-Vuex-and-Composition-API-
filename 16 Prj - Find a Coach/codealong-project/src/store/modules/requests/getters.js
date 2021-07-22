export default {
   requests(state, getters, rootState, rootGetters) {
      const coachId = rootGetters.getUserId
      return state.requests.filter(elm => elm.coachId === coachId);
   },
   hasRequests(_, getters) { return getters.requests && getters.requests.length > 0}
};