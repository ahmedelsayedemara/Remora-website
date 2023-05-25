import axios from "axios"
import qs from "qs"
import store from "@/store"
import VueCookies from "vue-cookies"
import i18n from "@/plugins/i18n.js"
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

export default function ApiService({ method, url, config = {} }) {
  return axios({
    method,
    url,
    data: config.data,
    params: {
      ...config.params
    },
    headers: {
      Authorization: `Bearer ${VueCookies.get("token")}`,
      local: localStorage.getItem("lang") || "ar",
      "Accept-Language": localStorage.getItem("lang") || "ar",
    },
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: "comma" })
    }
  })
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("<<:error:>> ", error.response.data.message)
    store.dispatch("ShowToast", {
      title: i18n.t("GLOBAL_FAILED"),
      type: "danger",
      message: error.response.data.message
    })

    if (error.response.status === 401) {
      store.dispatch("RemoveUser")
    }

    return Promise.reject(error)
  }
)
