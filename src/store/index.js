import { createStore } from 'vuex';
import coachStore from './coach/coach_store';


const store = createStore({
    modules: {
      coaches: coachStore
    }
  }
);

export default store;