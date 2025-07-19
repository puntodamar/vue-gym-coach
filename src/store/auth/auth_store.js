import  actions from './auth_actions'
import getters from './auth_getters'
import mutations from './auth_mutations'


const authStore = {
  state: {
    userId: null,
    token: null,
    tokenExpiration: null,
  },
  actions,
  getters,
  mutations,
}

export default authStore