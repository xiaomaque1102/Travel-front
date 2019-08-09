<template>
	<div>
		<div class="recommend-title">热门推荐</div>
		<!-- 无序列表<ul><li>组合-->
		<ul>
			<router-link 
				tag="li"
				class="item  border-bottom"  
				v-for="item of recommendList" 
				:key="item.id"
				:to="'/detail/'+item.id" 
			>
				<!-- 在循环中使用src要用：绑定 -->
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	name:"HomeRecommend",
	props:{
		recommendList: Array
	},
	// data() {
	// 	return{
	// 		recommendList:[{
	// 			id:'0001',
	// 			imgUrl:"//imgs.qunarzz.com/p/tts5/1704/7c/d44de0a04af9be02.jpg_r_390x260x90_e88f5cdc.jpg",
	// 			title:"北京-俄罗斯 8天跟团游",
	// 			desc:"传奇俄罗斯8天一价全含|海航直飞送全国联运|冬夏宫+谢镇+庄园|内陆高铁"
	// 		},{
	// 			id:'0002',
	// 			imgUrl:"//imgs.qunarzz.com/p/tts5/1704/7c/d44de0a04af9be02.jpg_r_390x260x90_e88f5cdc.jpg",
	// 			title:"北京-俄罗斯 8天跟团游",
	// 			desc:"传奇俄罗斯8天一价全含|海航直飞送全国联运|冬夏宫+谢镇+庄园|内陆高铁"
	// 		},{
	// 			id:'0003',
	// 			imgUrl:"//imgs.qunarzz.com/p/tts5/1704/7c/d44de0a04af9be02.jpg_r_390x260x90_e88f5cdc.jpg",
	// 			title:"北京-俄罗斯 8天跟团游",
	// 			desc:"传奇俄罗斯8天一价全含|海航直飞送全国联运|冬夏宫+谢镇+庄园|内陆高铁"
	// 		}]
	// 	}
	// }
}

</script>

<style scoped="">
	.recommend-title{
		/*设置元素的上外边距*/
		margin-top: .1rem;
		/*行高*/
		line-height: .8rem;
		background: #eee;
		/*任何段落的首行缩进几个字符大小*/
		text-indent: .2rem;
		/*字体靠左*/
		text-align: left;
	}
	.item{
		overflow: hidden;
		/*将当前元素设置为弹性布局的容器元素*/
		display: flex;
		/*1 rem：1 px=1：50*/
		height: 1.9rem;
		/*background: red;*/
	}
	.item-img{
		width: 1.7rem;
		height: 1.7rem;
		padding: .1rem;
	}
	.item-info{
		flex:1;
		text-align: left;
		padding: .1rem;
		/*有下边这一行才可以让。。。正确显示*/
		min-width: 0
	}
	.item-title{
		line-height: .54rem;
		/*重新设置字体大小，默认.28rem*/
		font-size: .32rem;
		/*以下三行为了实现当文字太长时使用。。。效果*/
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-desc{
		line-height: .4rem;
		color:#ccc;
		/*以下三行为了实现当文字太长时使用。。。效果*/
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-button{
		line-height:.44rem;
		margin-top: .2rem;
		background: #ff9300;
		/*内边距上下0，左右.1rem*/
		padding: 0 .2rem;
		/*3px的圆角*/
		border-radius: .06rem;
		color: #fff;
	}
</style>