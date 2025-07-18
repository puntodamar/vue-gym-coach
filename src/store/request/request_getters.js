const getters = {
  receivedRequests(state, getters, rootState, rootGetters) {
    return state.requests.filter(request => request.coachId === rootGetters.userId)

  },
  hasRequests(_, getters) {
    return  getters.receivedRequests && getters.receivedRequests.length > 0
  },
}

export default getters;