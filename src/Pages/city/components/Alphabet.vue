<template>
	<ul class="list">
		<li class="item" 
		v-for="item of letters" 
		:key="item" 
		:ref="item"
		@click="handleLetterClick" 
		@touchstart="handleTouchStart" 
		@touchmove="handleTouchMove" 
		@touchend="handleTouchEnd"
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
export default{
	name:'CityAlphabet',
	// 引入接收信息及信息类型
	data(){
		return{
			touchStatus:false,
			startY: 0
		}
	},
	// 页面完成更新之后及执行updated生命周期钩子 
	updated () {
		this.startY =  this.$refs['A'][0].offsetTop

	},
	props: {
		cities:Object
	},
	computed:{
		// letters是一个数组，形如['A','B','C'...]
		letters(){
			const letters = []
			for (let i in this.cities){
				letters.push(i)
			}
			return letters
		}
	},
	methods:{
		handleLetterClick(e){
			// 向外触发事件,程序中city在监听change事件
			this.$emit("change",e.target.innerText)
			// 打印点击的字母
			// console.log(e.target.innerText)
		},
		handleTouchStart(){
			this.touchStatus=true
		},
		handleTouchMove(e){
			if(this.touchStatus){
				// 拿到A元素距离顶部的高度
				// const startY = this.$refs['A'][0].offsetTop
				// 点击的高度去除列表上的部分的高度
				const touchY = e.touches[0].clientY-79
				// 字母下标index，每个字母占20px
				const index = Math.floor((touchY-this.startY)/20)
				if(index>= 0 && index< this.letters.length){
					this.$emit('change',this.letters[index])
				}
			}
		},
		handleTouchEnd(){
			this.touchStatus=false
		}
	}
}
</script>

<style scoped="">
	.list{
		/*以下三行为了垂直方向居中*/
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top:1.58rem;
		right: 0;
		bottom: 0;
		width: .4rem;
	}
	.item{
		/*text-align: center;*/
		line-height:0.4rem;
		color: #00bcd4;
	}
</style>