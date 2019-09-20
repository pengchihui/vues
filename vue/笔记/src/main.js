import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex/list.js'
import axios from 'axios'

Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
	router:router,
	store:store,
  render: h => h(App),
}).$mount('#app')
