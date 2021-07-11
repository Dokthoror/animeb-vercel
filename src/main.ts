import Vue from "vue";
import Router from "vue-router";
import router from "./routes/router";
import App from "./App.vue";

Vue.use(Router);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
