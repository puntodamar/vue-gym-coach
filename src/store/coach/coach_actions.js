const actions = {
  addCoach({commit}, coach) {
    const coachData = {
      id: new Date().toISOString(),
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.rate,
      areas: coach.areas,
    }
    
    commit('addCoach', coachData)
  }
}
export default actions