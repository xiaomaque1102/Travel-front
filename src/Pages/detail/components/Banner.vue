<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe631;</span>
					{{this.gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="gallaryImgs" 
				v-show="showGallary" 
				@close="handleGallaryClose"
			></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary"
// import FadeAnimation  from "common/fade/FadeAnimation"
import FadeAnimation  from "common/fade/FadeAnimation"
export default{
	name:  'DetailBanner',
	props:{
		sightName:String,
		bannerImg:String,
		gallaryImgs:Array,
	},
	data(){
		return{
			showGallary:false,

		}
	},
	// 注册引入的局部组件
	components:{
		CommonGallary,
		FadeAnimation,
	},
	methods:{
		handleBannerClick(){
			this.showGallary=true
		},
		handleGallaryClose(){
			this.showGallary=false
		}
		
	}
}
</script>

<style scoped="">
	.banner{
		position: relative;
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
	}
	.banner-img{
		width: 100%
	}
	.banner-info{
		display: flex;
		position: absolute;
		left: 0;
		right:0;
		bottom:0;
		line-height:.6rem;
		color: #fff;
		/*两个rgba表示上边是透明的，最下方不透明度0.8*/
		background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
	}
	.banner-title{
		flex: 1;
		font-size:.32rem;
		padding: 0  .2rem;
		text-align: left;

	}
	.banner-number{
		height: .32rem;
		line-height:.32rem;
		margin-top: .14rem;
		padding:0 .4rem;
		border-radius: .2rem;
		font-size: .24rem;
		/*Red（红色） Green（绿色） Blue（蓝色）和 Alpha（不透明度）*/
		background: rgba(0,0,0,.8)
	}
	.banner-icon{
		font-size:.24rem;
	}

</style>