<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<!-- 组件需要接收的信息在此引入 -->
		<city-list :cities='cities' :hot='hotCities' :letter="letter"></city-list>
		<city-alphabet :cities='cities' @change="handleLetterChage"></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
export default{
	name:'City',
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet,
	},
	data(){
		return{
			cities:{},
			hotCities:[],
			letter:''
		}
	},
	methods:{
		getCityInfo () {
			// 发送axios请求，请求地址在括号里
			axios.get('http://39.98.212.142:10006/city.json')
				.then(this.handleGetCityInfoSucc)
				.catch(error => {
					console.log(error)
				})			
		},
		handleGetCityInfoSucc (res) {
			// console.log(res)
			res=res.data
			if (res.ret && res.data){
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterChage (letter) {
			this.letter=letter
			// console.log(letter)

		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style scoped="">
</style>