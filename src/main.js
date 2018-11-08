// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias

import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './assets/styles/reset.css'
import './mock/mockServer' //加载mockServer
import loading from './common/imgs/loading.gif'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用上store
  components: { App },
  template: '<App/>'
})
