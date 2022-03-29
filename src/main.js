import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/vue-axios";

Vue.config.productionTip = false;

new Vue({
  data: {
    active: false,
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
