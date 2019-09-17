import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex/index.js'

import axios from 'axios'

Vue.prototype.http=axios;

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
