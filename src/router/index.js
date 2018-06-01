/*路由器对象模块*/


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Identify from '../pages/Identify/Identify.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter ({
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/identify',
      component:Identify,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})

