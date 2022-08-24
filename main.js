import App from './App'
import store from '@/store'
// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import cuCustom from 'colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)


let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

const app = new Vue({
	store,
	...App
})


// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

import httpApi from '@/config/api.js'
Vue.use(httpApi, app)

// 自定义工具
import utils from '@/config/utils.js'
Vue.use(utils, app)

import globalVariable from '@/config/globle_variable.js'
Vue.prototype.GLOBLE = globalVariable

app.$mount()

// #endif 

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp () {
  const app = createSSRApp(App)
  return { app }
}
// #endif
