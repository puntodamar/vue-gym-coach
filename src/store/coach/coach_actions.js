const actions = {
  async addCoach(context, coach) {
    const coachData = {
      // id: new Date().toISOString(),
      // id: context.rootGetters.userId,
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.rate,
      areas: coach.areas,
    }
    
    const request = await fetch(`https://vue-http-demo-85943-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`, {
      method: 'POST',
      body: JSON.stringify(coachData),
    })
    
    const response = await request.json()
    if (request.ok) {
      context.commit('addCoach', coachData)
      await context.dispatch('setUserId', response.name, {root: true})
    } else {
      
      alert(response.message)
    }
  },
  
  async getCoaches(context) {
    const request = await fetch(`https://vue-http-demo-85943-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`,)
    if (request.ok) {
      const response = await request.json()
      const coaches = []
      
      for (const key in response) {
        coaches.push({
          id: key,
          firstName: response[key].firstName,
          lastName: response[key].lastName,
          hourlyRate: response[key].hourlyRate,
          areas: response[key].areas,
        })
      }
      context.commit('setCoaches', coaches)
    } else {
      this.error = "dsdsds"

    }
  }
}
export default actions