import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)


export default new Vuex.Store({
	state,
	// state:{
	// 	// 设置默认值,第一次显示默认值，后边显示之前选过的城市
	// 	// 优先从localStorge.city中取值，没有值才取值北京
	// 	city:localStorage.city||"北京"
	// },
	// actions:{
	// 	changeCity(ctx,city){
	// 		// 借助ctx拿到commit，用mutation的changeCity来改变city的值。
	// 		ctx.commit('changeCity',city)
	// 	}
	// },
	mutations,
	// mutations:{
	// 	changeCity(state,city){
	// 		// 让state的city等于传入的city
	// 		state.city = city
	// 		try {
	// 			localStorage.city=city
	// 		} catch (e) {}
	// 	}
	// }
	// 
	// gettters的作用和computed作用类似
	// 当需要利用state里的数据进行计算出新的数据时可以使用getters
	// getters:{
	// 	doubleCity (state) {
	// 		return state.city+' ' +state.city
	// 	}
	// }
})