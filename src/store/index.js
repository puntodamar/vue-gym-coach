import { createStore } from 'vuex';
import coachStore from './coach/coach_store';
import requestStore from './request/request_store';

const store = createStore({
  state: {
    userId: 'c3',
  },
    modules: {
      coaches: coachStore,
      requests: requestStore,
    },
  getters: {
    userId: state => state.userId,
  }
  }
);

export default store;