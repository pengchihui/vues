// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import store from './vuex/list.js'
import axios from './axios/axios.js'
import qs from 'qs';  //作用能把json格式的直接转成data所需的格式
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(ElementUI);
Vue.use(iView)

Vue.prototype.$ajax = axios
Vue.prototype.qs=qs

// axios.defaults.baseURL = '/api'  //关键代码
// Vue.config.productionTip = false

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',


})
