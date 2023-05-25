import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
import "./plugins";
import ApiService from "./api/ApiService";

Vue.config.productionTip = false;

Vue.prototype.$isLocaleArabic = i18n.locale === 'ar';

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

Vue.mixin({
  methods: { ApiService },
});
