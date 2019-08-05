// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 传入store，使得store可以在每个子组件中使用
import store from "./store/index.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastClick'
// 引入iconfont
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 键和值一样，写一个即可
  router,
  store,
  components: { App },
  template: '<App/>'
})
