const install = (Vue, vm) => {
	vm.$u.api = {}
	vm.$u.api = {
		
		// 登录接口
		login: (params, config = {}) => vm.$u.http.post('/login', params, config),
		getInfo: data => vm.$u.http.get('/getInfo', data),
		
		// 客源表
		customer: {
			customerUpload: (params, config = {}) => vm.$u.http.post('/houseservice/customerManagement', params, config), 
			getCustomer: data => vm.$u.http.get('/houseservice/customerManagement/list', data),
			customerMatch: data => vm.$u.http.get('/houseservice/customerManagement/getcustomerinfo', data),
			
			getOwnCustomer: data => vm.$u.http.get('/houseservice/customerManagement/listInfo', data), // 权限管理
		},
		// 房源表
		home: {
			getHome: data => vm.$u.http.get('/houseservice/upload/listOrderByPrice', data), // 获取房源列表
			getOwnHome: data => vm.$u.http.get('/houseservice/upload/listInfo', data), // 只查询自己的房源
			homeManagementList: data => vm.$u.http.get('/houseservice/upload/homeManagementList', data), // 房源管理匹配
			selectBrokerList: data => vm.$u.http.get('/houseservice/upload/selectBrokerList', data), // 获取经纪人列表
			homeUpload: (params, config = {}) => vm.$u.http.post('/houseservice/upload', params, config), // 房源上传
			homeMatch: data => vm.$u.http.get('/houseservice/upload/homeInfoMohu', data), // 客源管理匹配
			homeTypeList: data => vm.$u.http.get('/houseservice/upload/selecthomeTypeList', data), // 房源管理户型筛选条件
			imageUpload: data => vm.$u.http.upload('/common/upload', data), // 图片上传
		},
		// 小区表
		housing: {
			getHomeName: data => vm.$u.http.get('/houseservice/housing/list', data), // 获取小区
			selectDistricList: data => vm.$u.http.get('/houseservice/housing/selectDistricList', data), // 获取商圈列表
		},
		// 日志:biao
		log: { addCallLog: (params, config = {}) => vm.$u.http.post('/houseservice/log', params, config), }
		
	}
}

export default { install }
