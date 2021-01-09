// import { createApp, Vue } from 'vue'
import { Vue } from "vue";
import App from './App.vue';
import router from "./router";

// createApp(App).mount('#app')
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});