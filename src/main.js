import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './assets/api/http.js'

import 'postcss-pxtorem' // 导入rem转换工具
import './assets/rem.js' // 导入设置根元素字体大小

Vue.config.productionTip = false
console.log(http)
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
