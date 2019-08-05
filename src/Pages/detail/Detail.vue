<template>
	<div>
		<detail-banner 
			:sightName="sightName"
			:bannerImg='bannerImg'
			:gallaryImgs="gallaryImgs"
		></detail-banner>
		<detail-header ></detail-header>
		<div class="content">
			<detail-list :list="categoryList"></detail-list>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from "./components/Banner"
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default{
	name: 'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList,
	},
	data(){
		return{
		sightName:'',
		bannerImg:'',
		gallaryImgs:[],
		categoryList: []
		}
	},
	methods:{
		getDetailInfo () {
			// 发送axios请求，请求地址在括号里,加入动态路由请求
			axios.get('http://10.130.228.140:3000/detail.json?id='+this.$route.params.id)
			// 两种写法作用一致
			// axios.get('/static/mock/detail.json',{
			// 	params:{
			// 		id:this.$route.params.id
			// 	}
			// })
				.then(this.handleGetDetailInfoSucc)
		},
		handleGetDetailInfoSucc (res) {
			// console.log(res)
			res=res.data
			if (res.ret && res.data){
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.categoryList = data.categoryList
			}
		},
		handleLetterChage (letter) {
			this.letter=letter
			// console.log(letter)

		}
	},
	mounted () {
		this.getDetailInfo()
	},
	// 由于缓存mounted只执行一次，要每次都请求就需要activated
	activated(){
		this.getDetailInfo()
	}

}
</script>

<style scoped="">
	.content{
		height: 50rem;
	}
</style>