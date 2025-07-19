const getters = {
  allCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isACoach(state, getters, rootSetters, rootGetters) {
    const coaches = getters.allCoaches
    const userId = rootGetters.userId
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch
    if (lastFetch) {
      const currentTime = new Date().getTime()
      return (currentTime - lastFetch) / 1000 > 60
    }
    else return true
  },
}

export default getters;