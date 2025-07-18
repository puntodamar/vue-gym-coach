const mutations = {
  addCoach(state, coach) {
    state.coaches.push(coach)
  },
  setCoaches(state, payload) {
    state.coaches = payload
  }
}

export default mutations;