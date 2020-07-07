import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './assets/api/http.js'

import baseLoading from './components/baseLoading.vue'

import 'postcss-pxtorem' // 导入rem转换工具
import './assets/rem.js' // 导入设置根元素字体大小
import './assets/css/index.less' // 导入全局less

Vue.config.productionTip = false

Vue.component('baseLoading', baseLoading)

Vue.prototype.$http = http

// Vue.directive('指令名字', 钩子)
Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
