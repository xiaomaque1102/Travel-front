let defaultCity = "北京"
// 加入try catch是为了防止出现异常
try{
	if (localStorage.city){
		defaultCity = localStorage.city
	}
} catch(e) {}

export default {
	city: defaultCity
}