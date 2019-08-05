<template>
	<div>
		<!-- 点击后退回到首页 -->
		<router-link 
			class="header-abs" 
			tag="div" 
			to="/"
			v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe60e;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link  to="/">
				<div class="iconfont header-fixed-back">&#xe60e;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default{
	name:"DetailHeader",
	data(){
		return{
			showAbs:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll(){
			// 输出滚动距离
			// console.log(document.documentElement.scrollTop)
			const top = document.documentElement.scrollTop
			if (top>60){
				let opacity =top/140
				opacity= opacity>1? 1:opacity
				this.opacityStyle={
					opacity:opacity
				}
				this.showAbs=false
			}
			else{
				this.showAbs=true
			}
		}
	},
	activated(){
		// 绑定scroll事件，一旦scroll，执行handleScroll事件
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style scoped="">
	.header-abs{
		position: absolute;
		left: .2rem;
		top:.2rem;
		width: .8rem;
		height: .8rem;
		line-height:.8rem;
		/*text-align: center;*/
		border-radius: .4rem;
		background: rgba(0,0,0,.8);
	}
	.header-abs-back{
		color: #fff;
		font-size: .4rem;
	}
	.header-fixed{
		z-index: 2;
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		width:100%;
		/*overflow: hidden;*/
		height: .86rem;
		line-height: .86rem;
		text-align: center;
		color: #fff;
		background: #00bcd4;
		font-size:.32rem;
	}
	.header-fixed-back{
		position: absolute;
		top:0;
		left: 0;
		width:0.64rem;
		font-size: .4rem;/*设置字体的尺寸*/
		color: #fff;
	}
</style>