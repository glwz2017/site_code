import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Form, Message, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
// elementUI 弹窗需要挂载到原型上才行
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = true
axios.defaults.baseURL = 'http://192.168.0.188:9999/api'
// axios.defaults.baseURL = 'http://192.168.199.105:9999/api'
Vue.prototype.$https = axios
// 统一修改弹窗时长800ms
Vue.prototype.$message = function (msg) {
  // 根据msg对象中的type类型判断消息提示的类型
  const msgObj = {
    message: msg.message ? msg.message : msg,
    duration: 800
  }
  const msgType = msg.type || ''
  switch (msgType) {
    case 'success':
      return Message.success(msgObj)
      // eslint-disable-next-line no-unreachable
      break
    case 'warning':
      return Message.warning(msgObj)
      // eslint-disable-next-line no-unreachable
      break
    case 'error':
      return Message.error(msgObj)
      // eslint-disable-next-line no-unreachable
      break
    default:
      return Message(msgObj)
  }
}

// 统一请求拦截
axios.interceptors.request.use((request) => {
  request.headers.authorization = window.localStorage.getItem('token') || ''
  // console.log(request)
  return request
}, error => {
  console.log(error.response)
  console.log(error.configs)
  console.log(error)
})

// 统一响应拦截
axios.interceptors.response.use((response) => {
  // console.log(response)
  return response
}, error => {
  // console.log(error.response)
  // console.log(error.configs)
  console.log(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
