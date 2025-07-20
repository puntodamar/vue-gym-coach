const mutations = {
  setUserId(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    state.expiration = payload.tokenExpiration;
    
    console.log(state.userId);
  }
}

export default mutations