import { createStore } from 'vuex';
import coachStore from './coach/coach_store';
import requestStore from './request/request_store';

const store = createStore({
  state: {
    userId: null,
  },
    modules: {
      coaches: coachStore,
      requests: requestStore,
    },
  getters: {
    userId: state => state.userId,
  },
  actions: {
    setUserId(state, payload) {
      state.userId = payload;
      console.log("usr id sekaarang", state.userId);
    }
  }
  }
);

export default store;