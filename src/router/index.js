import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Table from '../views/Table.vue'
import Swiper from '../views/Swiper.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/Table',
  name: 'Table',
  component: Table
}, {
  path: '/Swiper',
  name: 'Swiper',
  component: Swiper
}, {
  path: '/About',
  name: 'About',
  component: About,
  // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给About组件
  // props:{
  //   title:About
  // }
  // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的所有params参数，以props的形式传给About组件
  // props:true
  // props的第三种写法，值为函数
  props({
    query
  }) {
    return {
      title: query.title
    }
  }
}]

const router = new VueRouter({
  routes
})

export default router