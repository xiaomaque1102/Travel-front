<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper" >
			<swiper :options="swiperOption" >  
				<swiper-slide v-for="(item,index) in imgs" :key='index' >
	          		<img class='gallary-img'  :src='item'/>
	        	</swiper-slide>
<!-- 				<swiper-slide >
	          		<img class='gallary-img' src="https://imgs.qunarzz.com/vs_ceph_vs_tts/82bdf11a-3e92-4d4b-93bc-778308fee40b.jpg_r_390x260x90_2f1f7e00.jpg"/>
	        	</swiper-slide> -->
        	<div class="swiper-pagination"  slot="pagination"></div>
        	</swiper>
		</div>
	</div>

</template>

<script>
export default {
	name:"CommonGallary",
	props:{
		imgs:{
			type:Array,
			default(){
				return ["http://imgs.qunarzz.com/vs_ceph_vs_tts/aae8d136-9fb1-4c15-8932-346a47f53661.jpg_r_390x260x90_e0b356ee.jpg","https://imgs.qunarzz.com/vs_ceph_vs_tts/82bdf11a-3e92-4d4b-93bc-778308fee40b.jpg_r_390x260x90_2f1f7e00.jpg"]
			}

		}
	},
	data(){
	    return{
	    	swiperOption:{
		    	pagination: '.swiper-pagination',
		    	paginationType:'fraction',
		        // 使最后一页和第一页可以循环
		    	loop: true,
		    	observeParents: true,
		    	observer: true,
	    	},
	    }
	},
	methods:{
		handleGallaryClick(){
			this.$emit('close')
		}
	}

}
</script>

<style scoped="">
	.wrapper>>>.swiper-container{
		/*hidden 内容会被修剪，并且其余内容是不可见的。*/
		/*inherit 规定应该从父元素继承 overflow 属性的值。*/
		overflow: inherit;
	}
	.container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		/*属性设置元素的堆叠顺序。数值越大离用户越近*/
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #000;
	}
	.wrapper{
		/*overflow: hidden;*/
		width:100%;
		height: 0;
		/*元素的下内边距(底部空白)。 说明 该属性设置元素下内边距的宽度*/
		padding-bottom: 100%;
	}
	.gallary-img{
		width: 100%
	}
	.swiper-pagination{
		color: #fff;
		bottom:-1rem;
	}
</style>