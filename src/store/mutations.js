export default{
	changeCity(state,city){
		// 让state的city等于传入的city
		state.city = city
		try {
			localStorage.city=city
		} catch (e) {}
	}
	
}