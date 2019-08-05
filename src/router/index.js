import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home'
import City from '@/Pages/city/City'
import Detail from '@/Pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      // 动态路由/address/
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }],
    // 页面切换时始终回到最顶部
    scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
}
})
