import Vue from "vue";
import App from "./App.vue";
import config from "./config";

// Instalo el plugin
Vue.use(config);

Vue.config.productionTip = false;

// Como el plugin es asíncrono,
// debo instanciar mi app luego
config.start(Vue).then(() => {
  new Vue({
    render: (h) => h(App)
  }).$mount("#app");
});
