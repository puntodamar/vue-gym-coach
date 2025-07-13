import mutations from '@/store/request/request_mutations';
import getters from '@/store/request/request_getters';
import actions from '@/store/request/request_actions';


const requestStore = {
  namespaced: true,
  state() {
    return {
      requests: [
      
      ]
    }
  },
  actions,
  getters,
  mutations,
}

export default requestStore;