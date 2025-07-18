const actions = {
  async contactCoach(context, payload) {
    const bodyRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      message: payload.message,
    }
    
    const request = await fetch(`https://vue-http-demo-85943-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(bodyRequest),
    })
    
    const response = await request.json()
    
    if (request.ok) {
      bodyRequest.id = response.name
      context.commit('addRequest', bodyRequest)
    } else {
      throw new Error(response.message || 'Something went wrong')
    }
  },
  async getCoachRequests(context,) {
    const coachId = context.rootGetters.userId
    if (coachId) {
      const request = await fetch(`https://vue-http-demo-85943-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`,)
      
      const response = await request.json()
      
      if (request.ok) {
        const requests = []
        for (const key in response) {
          requests.push({
            id: key,
            coachId: response[key].coachId,
            lastName: response[key].lastName,
            userEmail: response[key].userEmail,
            message: response[key].message,
          })
        }
        context.commit('setRequests', requests)
      } else {
        this.error = response.message || 'Something went wrong'
      }
    }

  }
}

export default actions;