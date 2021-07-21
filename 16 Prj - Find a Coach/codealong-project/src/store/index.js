import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index'


const store = createStore({
   modules: {
      coaches: coachesModule
   },
   state: () => ({
      userId: '123456'
   }),
   getters: {
      getUserId(state) { return state.userId; }
   }
})

export default store