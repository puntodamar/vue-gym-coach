const actions = {
  async addCoach(context, coach) {
    const coachData = {
      // id: new Date().toISOString(),
      id: context.rootGetters.userId,
      firstName: coach.firstName,
      lastName: coach.lastName,
      description: coach.description,
      hourlyRate: coach.rate,
      areas: coach.areas,
    }
    
    const request = await fetch(`https://vue-http-demo-85943-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${coachData.id}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    })
    
    if (request.ok) {
      context.commit('addCoach', coachData)
    } else {
      alert('error')
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