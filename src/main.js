// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 传入store，使得store可以在每个子组件中使用
import store from "./store/index.js"
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'  //基础样式的修饰
import 'styles/border.css'//解决1像素边框问题
import fastClick from 'fastClick' //解决某些机型300ms延迟的点击问题
// 引入iconfont
import 'styles/iconfont.css' //使用icon
import $ from 'jquery'

Vue.config.productionTip = false
fastClick.attach(document.body)  //对fastClick方法进行绑定

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
