import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index'
import requestsModule from './modules/requests/index'


const store = createStore({
   modules: {
      coaches: coachesModule,
      requests: requestsModule
   },
   state: () => ({
      userId: 'c3'
   }),
   getters: {
      getUserId(state) { return state.userId; }
   }
})

export default store