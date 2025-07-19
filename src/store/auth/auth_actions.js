
const actions = {
  async login(context, payload) {
    
    const request = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZDQwsR7TRQpq0CNldR059ebfDMOeZFqo', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    })
    
    const response = await request.json();
    if (request.ok) {
      context.commit('setUserId', {token: response.idToken,  userId: response.localId, tokenExpiration: response.expiresIn});
    } else {
      console.log(response)
      throw new Error(response.message || 'Failed to login');
    }
  },
  async signUp(context, payload) {
    
    const request = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZDQwsR7TRQpq0CNldR059ebfDMOeZFqo', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    })
    
    const response = await request.json();
    if (request.ok) {
      context.commit('setUserId', {token: response.idToken,  userId: response.localId, tokenExpiration: response.expiresIn});
    } else {
      console.log(response)
      throw new Error(response.message || 'Failed to sign up');
    }
  
  }
}

export default actions