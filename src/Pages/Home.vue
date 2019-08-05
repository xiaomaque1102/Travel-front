<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './Home/components/Header'
import HomeSwiper from './Home/components/Swiper'
import HomeIcons from './Home/components/Icons'
import HomeRecommend from './Home/components/Recommend'
import axios from 'axios'
import { mapState } from 'vuex'

export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],   
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo () {
      // 发送axios请求，请求地址在括号里
      axios.get('http://10.130.228.140:3000/index.json?city='+ this.city)
      .then(this.handleGetHomeInfoSucc)
    },
    handleGetHomeInfoSucc (res) {
      // console.log(res)
      res=res.data
      if (res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    },
    handleLetterChage (letter) {
      this.letter=letter
      // console.log(letter)
    }
  },
  mounted () {
    this.lastCity=this.city
    this.getHomeInfo()
  },
  activated (){
    if (this.lastCity!==this.city){
      this.lastCity= this.city
      this.getHomeInfo()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>