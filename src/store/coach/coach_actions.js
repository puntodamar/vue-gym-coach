const actions = {
  addCoach(context, coach) {
    const coachData = {
      // id: new Date().toISOString(),
      id: context.rootGetters.userId,
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.rate,
      areas: coach.areas,
    }
    context.commit('addCoach', coachData)
  }
}
export default actions