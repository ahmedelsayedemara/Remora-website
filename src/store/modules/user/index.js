import router from "@/router"
import VueCookies from "vue-cookies"

export default {
  state: {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: VueCookies.get("token") || null
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token
  },
  actions: {
    async setUser({ commit }, { user, token }) {
      commit("SET_USER", user)
      commit("SET_TOKEN", token)
      router.push("/")
    },

    updateUser({ commit }, payload) {
      commit("SET_USER", payload)
    },

    removeUser({ commit }) {
      commit("REMOVE_USER")
      router.push("/login")
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem("user", JSON.stringify(user))
    },
    REMOVE_USER(state) {
      state.token = null;
      state.user = null;
      VueCookies.remove("token")
      localStorage.removeItem("user")
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      VueCookies.set("token", token)
    }
  }
}
