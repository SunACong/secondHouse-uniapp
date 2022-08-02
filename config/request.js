module.exports = (vm) => {
    uni.$u.http.setConfig((config) => {
			// config.baseURL = 'http://localhost:8080'; /* 自己 */
			// config.baseURL = 'http://46a268854t.qicp.vip'; /* 自己 */
      // config.baseURL = 'http://520o1938c9.qicp.vip'; /* 张高义 */
      // config.baseURL = 'http://520596g41f.wicp.vip'; /* 朱家华 */
      config.baseURL = 'http://47.111.85.236:8080'; /* 服务器 */
      // config.baseURL = 'http://47.111.85.236:9527/prod-api'; /* 服务器 */
			config.custom = {auth: true,catch: true}; 
			// config.timeout= 6000;
      return config
    })
	
	 // 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data || {}
		/**
		 * 根据custom参数中配置的是否需要token，添加对应的请求头
		 * 这里设置的是非登录接口都需要添加请求头
		 */
		if(config?.custom?.auth && config.url!="/login") {
			config.header = {
				 "Authorization":"Bearer "+ vm.vuex_token,
			};
		}
	    return config 
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	
	//响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		// 自定义参数
		const custom = response.config?.custom
		
		//调试显示
		let {config , data} = response;
		console.log("config: ",config);
		console.log("data: ",data);
		if (data.code !== 200) { 
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			// if (custom.toast !== false) {
			// 	uni.$u.toast(data.msg)
			// }
			if (data.code == 401) {
				uni.$u.toast("未登录或者登录已过期")
				uni.$u.route({
					url: '/pages/login/login',
					type:'redirect'
				})
			}else if(data.code == 500){
				uni.$u.toast(data.msg);
			}
			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				// if(response.config?.url == '/login'){
				// 	return '登陆失败'
				// }
				return Promise.reject(new Error(data.msg || "捕捉错误"))
			} else {
				// 否则返回一个pending中的promise，请求不会进入catch中
				return new Promise(() => { })
			}
		}
		
		return data
	}, (response) => { 
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}