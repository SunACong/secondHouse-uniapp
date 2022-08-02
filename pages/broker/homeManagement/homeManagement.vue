<template>
	<view>

		<view class="padding-top-xl bg-white" style="position: fixed;top: 0;z-index: 999;">
			<u-tabs :list="topList" lineColor="#ffffff" :activeStyle="{
					color: '#303133',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}">
				<view slot="right">
					<u-icon class="margin-right" name="plus" size="19" bold></u-icon>
				</view>
				<view class="margin-left" style="margin-right: 190rpx;" slot="left" @click="navaBack">
					<u-icon name="arrow-left" size="19" bold></u-icon>
				</view>
			</u-tabs>
		
			<u-search 	placeholder="搜索小区"
						margin="20rpx 57rpx"
						shape="square" 
						bgColor="#f4f5f9" 
						:show-action="false" 
						input-align="left" 
						v-model="homeName" 
						@search="searchHome()"></u-search>
			<view class="flex margin-lr-lg"> 
				<u--input :disabled="!list[1].data[10].status" type="number" placeholder="最低价格" border="surround"
					clearable v-model="minPrice"></u--input>
				<u--input :disabled="!list[1].data[10].status" type="number" placeholder="最高价格" border="surround"
					clearable v-model="maxPrice" @blur="blur()"></u--input>
			</view>
			<view class="flex">
				<smh-select class="margin-left-xl" :list="list" @change="show"></smh-select>
				<u-icon width="50rpx" height="30rpx" name="/static/broker/homeManagement/liuliang.png" @click="clear()">
				</u-icon>
			</view>
		</view>
		<view class="" style="height: 392rpx;"/>
			<!-- <uni-pagination :current="pageInfo.pageCurrent" :total="pageInfo.pageTotal" title="标题文字" :show-icon="true" @change="change" /> -->
		<view>
			<view style="" v-for="(item,index) in homeList" :key="index" @click="toHomeInfo(item)">
				<home-info :item="item"></home-info>
			</view>
		</view>
		<!-- <u-loading-icon :show="bootomStatus"></u-loading-icon> -->
		<view v-if="bootomStatus" class="text-red text-center text-blod m-text-40">
			------------我是有底线的------------
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				loading: false,
				bootomStatus: false,
				homeList: [],
				topList: [{ name: '二手房', },
					{ name: '租房', },
				],
				list: [{
						title: '区域',
						data: []
					},
					{
						title: '价格',
						data: [{
								text: '20万以下',
								identity: 1,
								status: false
							},
							{
								text: '21-30万',
								identity: 1,
								status: false
							},
							{
								text: '31-40万',
								identity: 1,
								status: false
							},
							{
								text: '41-50万',
								identity: 1,
								status: false
							},
							{
								text: '50-60万',
								identity: 1,
								status: false
							},
							{
								text: '61-70万',
								identity: 1,
								status: false
							},
							{
								text: '71-80万',
								identity: 1,
								status: false
							},
							{
								text: '81-100万',
								identity: 1,
								status: false
							},
							{
								text: '101-130万',
								identity: 1,
								status: false
							},
							{
								text: '131万以上',
								identity: 1,
								status: false
							},
							{
								text: '自定义价格',
								identity: 1,
								status: false
							},
						]
					},
					{
						title: '户型',
						data: []
					},
					{
						title: '经纪人',
						data: []
					}
				],
				condition: {
					pageNum: 1,
					pageSize: 10
				},
				total: 0,
				homeName: '',
				minPrice: null,
				maxPrice: null
			}
		},
		onReachBottom () {
			console.log('触底了')
			if(this.homeList.length === this.total) {
				this.bootomStatus = true
				return console.log('加载完了！！！')
			} 
			this.condition.pageNum++
			this.getList(this.condition)
		},
		async onLoad () {
			this.getList(this.condition)
			
			
			let { rows: districList } = await uni.$u.api.housing.selectDistricList()
			// console.log('商圈列表：', districList)
			for (var i = 0; i < districList.length; i++) {
				this.list[0].data[i] = {
					text: districList[i].distric,
					identity: 0,
					status: false
				}
			}
			let { data: homeTypeList }= await uni.$u.api.home.homeTypeList()
			// console.log('户型列表：', homeTypeList) 
			for (var i = 0; i < homeTypeList.length; i++) {
				this.list[2].data[i] = {
					text: homeTypeList[i].home_type,
					identity: 2,
					status: false 
				}
			}
			let { data: brokerList } = await uni.$u.api.home.selectBrokerList()
			// console.log('经纪人列表：', brokerList)
			for (var i = 0; i < brokerList.length; i++) {
				this.list[3].data[i] = {
					text: brokerList[i].creater,
					identity: 3,
					status: false
				}
			}
		},
		methods: {
			changeTab () {
				this.tabbootomStatus = !this.tabbootomStatus
			},
			toHomeInfo (item) {
				uni.$u.route('/pages/broker/homeManagement/homeInfo', item)
			},
			
			navaBack () {
/* 				uni.$u.route({
					type: 'back',
					detail: 1,
				}) */
				uni.$u.route({
					url: '/pages/broker/broker',
					type: 'switchTab'
				})
			},
			/**
			 * 搜索小区点击小区后触发
			 */
			searchHome () {
				// console.log('点击搜索')
				uni.$u.api.home.homeManagementList({ params: { homeName: this.homeName } }).then(res => {
					this.homeList = res.data
				}).catch(err => {})
			},
			/*  清除所哟筛选表单 重新请求所有房源	*/
			clear () {
				// 清空已查询的列表
				this.homeList = []
				// 清空查询条件
				this.condition = {
					pageNum: 1,
					pageSize: 10
				}
				// 底部提示清空v   04
				this.bootomStatus = false
				this.minPrice = null
				this.maxPrice = null
				// 清空数据的被选中状态
				this.list.forEach(el => {
					el.data.forEach(el1 => {
						el1.status = false
					})
				}) 
				// 再次请求列表数据
				this.getList(this.condition)
			},
			/* 
			 blur 焦点离开价格最大值input框时触发
			 */
			blur () {
				this.condition.readyOne = this.minPrice
				this.condition.readyTwo = this.maxPrice
				this.getList(this.condition)
			},
			/*
			 show 点击筛选时不同条件在匹配表单加入不同的属性
			 每次变更会携带变更条件再次请求
			 */
			show (e) {
				console.log('选择的item：', e)
				// 每次触发前先清空以下房源列表
				this.homeList = []
				// this.condition = {}
				// 遍历筛选条件根据status状态判断哪个被选中
				for (var i = 0; i < e.length; i++) {
					switch (e[i].identity) {
						case 0:
							this.condition.distric = e[i].text
							break
						case 1:
							if (e[i].text === '20万以下') {
								this.condition.readyOne = 0
								this.condition.readyTwo = 20
							} else if (e[i].text === '131万以上') {
								this.condition.readyOne = 131
								this.condition.readyTwo = 100000
							} else if (e[i].text !== '自定义价格') {
								try{
									this.condition.readyOne = e[i].text.split('-')[0]
									this.condition.readyTwo = e[i].text.split('-')[1].split('万')[0]
								}catch(e) {
									console.log('提取最高价和最低价失败')
								}
							}
							break
						case 2:
							this.condition.homeType = e[i].text
							break
						case 3:
							this.condition.creater = e[i].text
							break
						default:
							break
					}
				}
				// 请求
				this.getList(this.condition)
			},
			
			async getList (condition) {
				condition.companyId = this.vuex_userInfo.dept.parentId
				console.log('表单: ', condition)
				const res = await uni.$u.api.home.getOwnHome({ params: condition })
				this.homeList = [...this.homeList, ...res.rows]
				this.total = res.total
			}
		}
	}
</script>

<style lang="scss">
	.margin-lr-lg {
		margin-left: 55rpx;
		margin-right: 55rpx;

	}
</style>
