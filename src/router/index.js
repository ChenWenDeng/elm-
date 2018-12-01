import Vue from 'vue'
import Router from 'vue-router'
// import msite from '../pages/msite/msite'
// import search from '../pages/search/search'
// import order from '../pages/order/order'
// import profile from '../pages/profile/profile'

const msite = () => import('../pages/msite/msite.vue')
const search = () => import('../pages/search/search.vue')
const order = () => import('../pages/order/order.vue')
const profile = () => import('../pages/profile/profile.vue')

import login from '../pages/login/login'
import shop from '../pages/shop/shop'
import shopGoods from '../pages/shop/shopGoods/shopGoods'
import shopInfo from '../pages/shop/shopInfo/shopInfo'
import shopRatings from '../pages/shop/shopRatings/shopRatings'
import foods from '../pages/foods/foods'
import confirmOrder from '../pages/confirmOrder/confirmOrder'
import chooseAddress from '../pages/confirmOrder/children/chooseAddress'
import remark from '../pages/confirmOrder/children/remark'
import invoice from '../pages/confirmOrder/children/invoice'


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
    },
    {
      path: '/shop',
      component: shop,
      children: [
        {
          path: '/shop/goods',
          component: shopGoods,
        },
        {
          path: '/shop/info',
          component: shopInfo,
        },
        {
          path: '/shop/ratings',
          component: shopRatings,
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/foods',
      component: foods
    },
    {
      path: '/confirmOrder',
      component: confirmOrder,
      children:[
        {
          path: 'chooseAddress',
          component: chooseAddress
        },
        {
          path: 'remark',
          component: remark
        },
        {
          path: 'invoice',
          component: invoice
        }
      ]
    },
  ]
})


// export default new VueRouter({
//   // 所有路由
//   routes: [
//     {
//       path: '/msite',
//       component: msite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
//       meta: {
//         showFooter: true
//       }
//     },
//     {
//       path: '/search',
//       component: search,
//       meta: {
//         showFooter: true
//       }
//     },
//     {
//       path: '/order',
//       component: order,
//       meta: {
//         showFooter: true
//       }
//     },
//     {
//       path: '/profile',
//       component: profile,
//       meta: {
//         showFooter: true
//       }
//     },
//     {
//       path: '/',
//       redirect: '/msite'
//     },
//     {
//       path: '/login',
//       component: login
//     },
//     // {
//     //   path: '/shop',
//     //   component: shop,
//     // },
//   ]
// })
