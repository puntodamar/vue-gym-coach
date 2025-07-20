
const actions = {
  async login(context, payload) {
    
    await context.dispatch('authenticate', {
      ...payload,
      mode: 'login'
    });
  },
  async signUp(context, payload) {
    await context.dispatch('authenticate', {
      ...payload,
      mode: 'signup'
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');
    context.commit('setUserId', {token: null, userId: null});
  },
  autoLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    
    if (token && userId) {
      context.commit('setUserId', {token, userId});
    }
  },
  async authenticate(context, payload) {
    const mode = payload.mode;
    const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZDQwsR7TRQpq0CNldR059ebfDMOeZFqo'
    const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZDQwsR7TRQpq0CNldR059ebfDMOeZFqo'
    
    const request = await fetch(mode === 'login' ? loginUrl : signUpUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    })
    
    const response = await request.json();
    if (request.ok) {
      console.log(response)
      context.commit('setUserId', {token: response.idToken,  userId: response.localId, tokenExpiration: response.expiresIn});
    } else {
      throw new Error(response.message || 'Failed to login');
    }
    
    const expiresIn = +response.expiresIn * 1000
    const expirationDate = new Date().getTime() + expiresIn;
    
    localStorage.setItem('token', response.idToken);
    localStorage.setItem('userId', response.localId);
    localStorage.setItem('tokenExpiration', expirationDate);
  }
}

export default actions