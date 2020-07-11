import axios from 'axios'
import qs from 'qs'
// import store from '@/store/index'
import { Toast } from 'vant'

axios.defaults.timeout = 5000 // 超时前 所有请求都会等待5秒

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '' // 定义接口公共前缀
// 请求拦截器
axios.interceptors.request.use(config => {
  // store.commit('showLoading', true)
  Toast.loading({
    mask: false, // 是否有阴影
    duration: 0, // 默认是1秒钟  设为0则一直存在
    forbidClick: true, // 禁止点击
    message: '加载中...'
  })
  config.data = qs.stringify(config.data)
  return config
}, error => {
  Toast.clear()
  Toast('请求错误,请稍后重试')
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(config => {
  // store.commit('showLoading', false)
  Toast.clear()
  console.log(config)
  return config
}, error => {
  Toast.clear()
  // store.commit('showLoading', false)
  Toast('请求错误,请稍后重试')
  return Promise.reject(error)
})

// 封装get 和 Post 请求
export function get (url, params = {}, type = '') {
  return new Promise(resolve => {
    axios({
      method: 'get',
      headers: type === 'form' ? { 'Content-Type': 'multipart/form-data' } : { 'X-Requested-With': 'XMLHttpRequset', 'Content-Type': 'application/x-www-form-urlencode' },
      url,
      params
    }).then(res => resolve(res.data)).catch(err => resolve(err.data))
  })
}

export function post (url, params = {}, type = '') {
  return new Promise(resolve => {
    axios({
      method: 'post',
      headers: type === 'form' ? { 'Content-Type': 'multipart/form-data' } : { 'X-Requested-With': 'XMLHttpRequset', 'Content-Type': 'application/x-www-form-urlencode' },
      url,
      data: params
    }).then(res => resolve(res.data)).catch(err => resolve(err.data))
  })
}
