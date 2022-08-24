const install = (Vue, vm) => {
	/**
	 * 登陆者的身份判断
	 */
	const isWho = who =>{
		if (vm.vuex_userInfo.userId == who) {
			return true
		}
		return false
	},
	/**
	 * 隐藏中间四位电话号码
	 */
	callToString = phonenum =>{
		return phonenum.substring(0, 4) + '****' + phonenum.substring(8)
	}
	// 全局静态图片的访问域名
	
	vm.$u.utils={
		isWho,
		callToString
	}
}
export default{ install }
