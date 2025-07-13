import { createStore } from 'vuex';
import coachStore from './coach/coach_store';


const store = createStore({
  state: {
    userId: 'c3',
  },
    modules: {
      coaches: coachStore
    },
  getters: {
    userId: state => state.userId,
  }
  }
);

export default store;