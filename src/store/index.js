import { createStore } from 'vuex'
import authentication from './authentication';
const store = createStore({
  modules: {
    authentication
  }
})

export default store