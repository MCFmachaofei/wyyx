/*入口js*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
 import store from './store'
import './mock/mockServer'
import {Button} from 'mint-ui'

//全局注册组件
Vue.component(Button.name,Button)


new Vue({
  el:'#app',
  render: h =>h (App),
  router,
  store
})
