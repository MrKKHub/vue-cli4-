import axios from 'axios'
import qs from 'qs'

const instance = axios.create()

instance.defaults.timeout = 5000 // 超时前 所有请求都会等待5秒

axios.defaults.baseURL = '/api' // 定义接口公共前缀

// 请求拦截器
instance.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器

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
