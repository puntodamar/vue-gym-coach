const mutations = {
  addCoach(state, coach) {
    state.coaches.push(coach)
    
  },
  setCoaches(state, payload) {
    state.coaches = payload
  },
  setLastFetch(state) {
    state.lastFetch = new Date().getTime()
  }
  
}

export default mutations;