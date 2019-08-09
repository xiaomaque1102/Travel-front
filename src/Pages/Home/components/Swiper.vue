<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <!-- 轮播页面 简单的循环写法-->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class='swiper-img' :src="item.imgUrl"/>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 页面轮播顺序圆点 -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 滚动条 -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  // 子组件里data是个函数，返回值是真正数据的内容
  data(){
    return{
      // 返回swiper绑定的数据
      swiperOption:{
        pagination: '.swiper-pagination',
        // 使最后一页和第一页可以循环
        loop: true,
      },
    }
  },
  props:{
    swiperList:Array
  }
}
</script>

<style scoped="">

  .wrapper >>> .swiper-pagination-bullet-active{
  	background: #fff;
  }
  .swiper-img{
      /*完全显示图片*/
      width:100%;
  }
  .wrapper{
    /*防止抖动*/
    overflow: hidden;
    width: 100%;
    height:0;
    padding-bottom: 31.25%;
    /*在图片加载出来之前显示灰色*/
    background:#eee;
  }

</style>