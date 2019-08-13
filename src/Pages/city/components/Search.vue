<template>
	<div>
		<div class="search">
			<input class="search-input" v-model="keyword "  type="text" placeholder="输入城市名或拼音"/>
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li v-for="item of list" 
				:key="item.id" 
				class="search-item border-bottom" 
				@click="handleCityClick(item.name)"
				>
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from '@better-scroll/core'
import {mapMutations } from 'vuex'
export default{
	name:'CitySearch',
	props:{
		cities:Object,
	},
	data(){
		return{
			keyword:'',
			list:[],
			timer:null
		}
	},
	computed:{
		hasNoData(){
			return !this.list.length
		}
	},
	methods:{
		...mapMutations(['changeCity']),
		handleCityClick(city){
			// 可以省略action步骤，直接由commit调用mutation
			this.changeCity(city)
			// this.$store.commit("changeCity",city)
			// this.$store.dispatch("changeCity",city)
			// 改变完城市后跳转回首页
			this.$router.push("./")
		},
		
	},
	watch:{
		keyword (){
			if(this.timer){
				 clearTimeout(this.timer)
			}
			// 当取消输入，联想列表消失
			if(!this.keyword){
				this.list=[]
				return
			}
			// 箭头函数延迟100ms执行
			this.timer = setTimeout(()=>{
				const result = []
				for(let i in this.cities){
					this.cities[i].forEach((value)=>{
						// 如果能搜索到关键词，则添加到result中
						if (value.spell.indexOf(this.keyword)>-1||
							value.name.indexOf(this.keyword)>-1){
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.search)
	},
	updated(){
		this.scroll.refresh()
	},
	activated(){
		this.scroll.refresh()
		this.keyword=""
	}
}

</script>

<style scoped="">
	.search{
		height: .72rem;
		padding: 0 .1rem;
		background:#00bcd4;
	}
	.search-input{
		/*以下两行使得输入框的字体左右两边不是完全顶着边的*/
		box-sizing: border-box;
		padding: 0 .1rem;
		width: 100%;
		height: .62rem;
		line-height: .62rem;
		text-align: center;
		border-radius: .06rem;
		color: #666
	}
	.search-content{
		z-index: 1;
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left:0;
		right: 0;
		bottom: 0;
		background: #eee
	}
	.search-item{
		line-height:.62rem;
		padding-left: .2rem;
		color: #666;
		text-align: left;
		background: #fff;

	}
</style>