import Vue from 'vue'
import Router from 'vue-router'
import msite from '../pages/msite/msite'
import search from '../pages/search/search'
import order from '../pages/order/order'
import profile from '../pages/profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: msite
    },
    {
      path: '/msite',
      component: msite
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/profile',
      component: profile
    }
  ]
})
