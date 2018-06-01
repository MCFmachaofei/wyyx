/*路由器对象模块*/


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Identify from '../pages/Identify/Identify.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter ({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/identify',
      component:Identify
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})

