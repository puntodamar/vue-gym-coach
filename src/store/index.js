import { createStore } from 'vuex';
import coachStore from './coach/coach_store';
import requestStore from './request/request_store';
import authStore from './auth/auth_store';

const store = createStore({

    modules: {
      coaches: coachStore,
      requests: requestStore,
      auth: authStore,
    }
  }
);

export default store;