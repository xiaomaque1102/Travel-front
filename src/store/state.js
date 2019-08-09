let defaultCity = "北京"
// 使用localstorage最好加入try catch，这是为了防止出现异常，因为用户可能关闭本地存储的功能导致出错
try{
	if (localStorage.city){
		defaultCity = localStorage.city
	}
} catch(e) {}

export default {
	city: defaultCity
}