import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.use(router)
Vue.use(store)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
  