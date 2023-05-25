export default {
  state: {
    notification: null,
    socketData: null
  },
  getters: {
    notification: (state) => state.notification,
    socketData: (state) => state.socketData
  },
  actions: {
    SetNotification({ commit }, payload) {
      commit("SET_NOTIFICATION", payload)
    },
    SetSocketData({ commit }, payload) {
      commit("SET_SOCKET", payload)
    }
  },
  mutations: {
    SET_NOTIFICATION(state, notification) {
      state.notification = notification
    },
    SET_SOCKET(state, data) {
      state.socketData = data
    }
  }
}
