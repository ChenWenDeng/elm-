import Vue from 'vue'
import Router from 'vue-router'
import msite from '../pages/msite/msite'
import search from '../pages/search/search'
import order from '../pages/order/order'
import profile from '../pages/profile/profile'
import login from '../pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: msite,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: msite,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      component: order,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: profile,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/login',
      component: login
    }
  ]
})
