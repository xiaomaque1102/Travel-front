<template>
  <div id="app">
    <!-- keep-alive让路由的内容在被加载过之后防止内存中，下次访问不需要重新加载渲染，不再动钩子 -->
    <!-- 想要不缓存某个组件就写在exclude里,和activated作用一样 -->
    <keep-alive exclude=' '>
      <router-view/>
    </keep-alive> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
