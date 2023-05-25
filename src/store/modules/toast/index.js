export default {
  state: {
    toast: {
      isVisible: false,
      title: "",
      message: "",
      type: "",
      time: 3000
    }
  },
  getters: {
    toast: (state) => state.toast
  },
  actions: {
    ShowToast({ commit }, payload) {
      commit("SHOW_TOAST", payload)
    },

    HideToast({ commit }, payload) {
      commit("HIDE_TOAST", payload)
    }
  },
  mutations: {
    SHOW_TOAST(state, notification) {
      state.toast = { ...notification, isVisible: true }
      setTimeout(
        () => {
          state.toast = { isVisible: false }
        },
        notification.time ? notification.time : 3000
      )
    },
    HIDE_TOAST(state) {
      state.toast = { isVisible: false, message: "", title: "" }
    }
  }
}
