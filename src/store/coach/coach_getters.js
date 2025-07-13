const getters = {
  allCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isACoach(_, getters, _2, rootGetters) {
    const coaches = getters.allCoaches
    const userId = rootGetters.userId
    return coaches.some(coach => coach.id === userId);
  }
}

export default getters;