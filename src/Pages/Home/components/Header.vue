<template>
	<div class='header'>
		<div class="header-left">
			<!-- 对尺寸的更改，加一个class -->
			<div class="iconfont back-icon">&#xe60e;</div><!-- 引入icon的写法 -->
		</div> 
		<div class="header-input">
			<span class="iconfont">&#xe638;</span>
			输入城市/景点/游玩主题
		</div> 
		<!-- router-link实现根据路由设置跳转到/city -->
		<router-link to='/city'>
			<div class="header-right">
				<!-- 使用store中的数据 -->
				<!-- {{this.$store.state.city}} -->
				<!-- 做好数据映射后可以简写 -->
				{{this.city}}
				<!-- {{this.doubleCity}} -->
				<!-- span与上边‘城市’在一行 -->
				<span class="iconfont arrow-icon">&#xe60c;</span>
				<!-- div与上边‘城市’在一行 -->
				<!-- <div class="iconfont arrow-icon">&#xe60c;</div> -->
			</div> 
		</router-link>
	</div>
</template>

<script>
// 把vuex的数据映射到组件的计算属性里
import { mapState, mapGetters } from 'vuex'
export default{
	name:'HomeHeader',
	computed: {
		// 把city的数据映射到名字叫做city的计算属性中
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style	scoped>

	.header{
		display: flex;/*弹性布局*/
		line-height:.86rem;
		background: #00bcd4;/*背景色*/
		color:#fff;/*字体颜色*/

	}
	.header-left{
		width: .64rem;/*宽度*/
		float:left;/*位置*/
	}
	.back-icon{
		text-align: center;
		font-size: .4rem;/*设置字体的尺寸*/

	}
	.header-input{
		flex:1;/*自动撑开*/
		height:.64rem;/*元素高度*/
		background: #fff;
		line-height: .64rem;/*输入框内容的行高*/
		text-align: left;/*字体在组件中的布局位置*/
		padding-left: .2rem;/*设置元素的左内边距*/
		margin-top: .10rem;/*距离上边缘*/
		margin-left: .2rem;
		border-radius: .1rem; /*添加圆角边框，数值表示圆角大小*/
		color:#ccc ;/*重新设置字体颜色*/
	}
	.header-right{
		min-width:1.04rem;/*以下两行为了让地名显示不折行*/
		padding: 0 0.1rem;
		float:right;
		text-align:center;/*字体在组件中的布局位置*/
		font-size:.34rem;
		/*防止被router-link改颜色*/
		color: #fff
	}
	/*rem与px的换算，50rem=1px*/
	.arrow-icon{
		font-size:.24rem;
		margin-left: -0.04rem; /*向左移2px*/
	}
</style>
