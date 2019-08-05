 <template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom" >当前位置</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button" @click="nowhandleCityClick" >{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :k="item.id" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<!-- 对象也可被v-for循环，第二项不是index而是key -->
			<div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list" >
					<div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'
export default{
	name:'CityList',
	computed:{
		// 以下两种写法均可，可以是数组也可以是对象
		// ...mapState(['city'])
		...mapState({
			currentCity:'city'
		}),
	},
	// props接收信息,定义接收信息的类型
	props:{
		hot: Array,
		cities: Object,
		letter: String,
	},
	methods:{
		...mapMutations(['changeCity']),
		handleCityClick(city){
			// 可以省略action步骤，直接由commit调用mutation
			// this.$store.commit("changeCity",city)
			// 引入mapMutations之后可以简写
			this.changeCity(city)
			// this.$store.dispatch("changeCity",city)
			// 改变完城市后跳转回首页
			this.$router.push("./")
		},
		nowhandleCityClick(){
			// 改变完城市后跳转回首页
			this.$router.push("./")
		},
		// 把mutation映射到组件中叫做changeCity的方法里
		
	},
	// 侦听器，监听letter的变化
	watch:{
		letter () {
			// 将页面移动到选择的字母位置
			if(this.letter){
				// 加0是因为elemen&&t是数组，scrollToElement参数必须是DOM元素
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
				// console.log(element)
			}
		}
	},
	mounted () {
		// this.scroll= new Bscroll(this.$refs.wrapper)
		this.scroll= new Bscroll(this.$refs.wrapper,{
			// disableWeel:false,
			// wheel: true,
			// snap: true 

		})
		// setTimeout(()=>{
		// 	this.scroll= new Bscroll(this.$refs.wrapper);
		// },20)
	},
}
</script>

<style scoped="">
	.list{
		overflow: hidden;
		position: absolute;
		top:1.58rem;
		left: 0;
		right: 0;
		bottom:0;
		/*background: red;*/
	}
	/*修改border-topbottom类的两个伪元素设置*/
	.border-topbottom:before{
		border-color: #ccc;
	}
	.border-topbottom:after{
		border-color: #ccc;
	}
	.border-bottom:before{
		border-color: #ccc;
	}
	.button-list{
		overflow: hidden;
		/*内边距上右下左顺时针顺序*/
		padding: .1rem .6rem .1rem .1rem;

	}
	.button-wrapper{
		float: left;
		width: 33.33%
	}
	.button{
		margin: .1rem;
		padding: .1rem 0;
		border: .02rem solid #ccc;
		border-radius: .06rem
	}
	.title{
		line-height: .54rem;
		background: #eee;
		padding-left: .2rem;
		text-align: left;
		color: #666;
		font-size: .26rem
	}
	.item{
		text-align: left;
		padding-left: .2rem;
		line-height: .76rem;

	}
</style>