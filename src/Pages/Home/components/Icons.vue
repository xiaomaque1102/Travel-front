<template>
	<div class="icons" :options="swiperOption">
		<swiper>
			<!-- 循环展示每页 -->
			<swiper-slide v-for="(page,index) of pages" :key='index'>
				<!-- 循环展示每页内容 -->
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-imag">
						<!-- src前不要忘记加冒号，表示绑定 -->
						<img class="icon-imag-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script >
export default{
	name: 'HomeIcons',
	data(){
		return{
			// 返回swiper绑定的数据
			swiperOption:{
			},
		}
	},
	props:{
		iconList: Array
	},
	computed:{
		pages (){
			const pages=[]
			this.iconList.forEach((item, index) =>{
				// 分页,8个icon为一页
				const page = Math.floor(index/8) 
				if (!pages[page]){
					pages[page]=[]
				}
				pages[page] .push(item)	
			})
			return pages
		}
	}

}
</script>

<style scoped="">
	.icons >>> .swiper-container{
		/*设置元素的上外边距*/
		margin-top: .1rem;
		height: 0;
		/*宽高比2，高度是宽度的50%,高度设为0是为了根据宽高比设置高度*/
		padding-bottom: 50%;

	}
		/*overflow 属性规定如何处理不符合元素框的内容。*/
		/*hidden:内容会被修剪，但是浏览器不会显示供查看内容的滚动条。*/
		/*overflow: hidden;*/
		/*height: 0;*/
		/*宽高比2，高度是宽度的50%,高度设为0是为了根据宽高比设置高度*/
		/*padding-bottom: 50%;*/
		/*background: green*/
	.icon{
		/*位置被设置为 relative 的元素，可将其移至相对于其正常位置的地方，因此 "left:20" 会将元素移至元素正常位置左边 20 个像素的位置。*/
		position: relative;
		overflow: hidden;
		/*float 属性定义元素在哪个方向浮动。*/
		float:left;
		/*宽是父元素的25%*/
		width: 25%;
		/*padding-bottom 如果用%来表示的话，计算是根据父元素的100%的值进行计算的。*/
		padding-bottom: 25%;
	}
	.icon-imag{
		/*位置设置为 absolute 的元素，可定位于相对于包含它的元素的指定坐标。此元素的位置可通过 "left"、"top"、"right" 以及 "bottom" 属性来规定。*/
		position: absolute;
		/*设置偏移*/
		top: 0;
		left: 0;
		right: 0;
		bottom: .44rem;
		/*background: blue;*/
		/*box-sizing:border-box令浏览器呈现出带有指定宽度和高度的框*/
		box-sizing: border-box;
		/*间距下一元素0.1rem*/
		padding: .1rem
	}
	.icon-imag-content{
		height: 100%;
		/*display: block;*/
		/*margin: 0 auto*/
	}
	.icon-desc{
		position: absolute;
		/*top: 0;*/
		left: 0;
		right: 0;
		bottom: 0;
		/*height 属性设置元素的高度*/
		height: 0.44rem;
		/*line-height 属性设置行间的距离（行高）*/
		line-height: 0.44rem;
		color: #333;
		/*以下三行为了实现当文字太长时使用。。。效果*/
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
</style>