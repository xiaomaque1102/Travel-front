<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <!-- 轮播页面 简单的循环写法-->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class='swiper-img' :src="item.imgUrl"/>
        </swiper-slide>
        <!-- 复杂的写法 -->
<!--         <swiper-slide>
          <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/ebf7306335a5e060dbbfe42b8e8ede9f.jpg_945x288_da043916.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg" /> -->
        <!-- </swiper-slide> -->
<!--         <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide> -->
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
      swiperOption:{
        pagination: '.swiper-pagination',
        // 使最后一页和第一页可以循环
        loop: true,
      },
      // swiperList:[{
      //   id:'0001',
      //   imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/ebf7306335a5e060dbbfe42b8e8ede9f.jpg_945x288_da043916.jpg'
      // },{
      //   id:'0002',
      //   imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
      // },{
      //   id:'0003',
      //   imgUrl:'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg'
      // }]
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