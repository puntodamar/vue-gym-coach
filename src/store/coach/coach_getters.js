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
  }
}

export default getters;