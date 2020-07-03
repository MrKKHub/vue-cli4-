import { post } from './axios'

const login = (data) => {
  return new Promise(resolve => { post('/', data).then(res => resolve(res)).catch(err => { console.log('首页', err) }) })
}

const http = {
  login
}

export default http
