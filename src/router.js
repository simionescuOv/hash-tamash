import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import vItemX from './views/ItemDetails.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/itemx',
      name: 'itemx',
      component: vItemX
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
