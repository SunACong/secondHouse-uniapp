<template>
	<view class="bg-white">
		<!-- 2.0.19支持autoBack，默认为false -->
		<view class="text-center m-text-40 padding-bottom-lg" >
			<view class="flex justify-center align-end" style="height: 200rpx;">
				<u-avatar icon="account" fontSize="60" size="60"></u-avatar>
			</view>
			<text >{{customerInfo.name}}{{customerInfo.sex === '男'?'先生':'女士'}}</text>
		</view>
		<view class="shadow bg-gray" style="height: 10rpx;"></view>
		<view>
			<view class="margin-top text-center m-text-40" style="color: #09FD77;" >客户需求</view>
			<view class="flex flex-wrap margin-left">
				<view class="margin-top" style="width: 50%;">总价：<text>{{customerInfo.allPrice}}</text></view>
				<view class="margin-top" style="width: 50%;">装修风格：<text>{{customerInfo.furnishStyle}}</text></view>
				<view class="margin-top" style="width: 50%;">首付：<text>{{customerInfo.onePay}}</text></view>
				<view class="margin-top" style="width: 50%;">户型：<text>{{customerInfo.homeType}}</text></view>
				<view class="margin-top" style="width: 50%;">目的：<text>{{customerInfo.purpose}}</text></view>
				<view class="margin-top" style="width: 50%;">朝向：<text>{{customerInfo.towards}}</text></view>
				<view class="margin-top" style="width: 50%;">商圈：<text>{{customerInfo.region}}</text></view>
				<view class="margin-top" style="width: 50%;">小区名称：<text>{{customerInfo.homeName}}</text></view>
				<view class="margin-top" style="width: 50%;">忌讳楼层：<text>{{customerInfo.floor}}</text></view>
				<view class="margin-top" style="width: 50%;">备注：<text>{{customerInfo.note}}</text></view>
			</view>
		</view>
		
		<view>
			<view class="margin-top-lg text-center m-text-40" style="color: #09FD77;" >房源匹配</view>
			<u-subsection class="margin-tb" :list="matchList" :current="current" @change="sectionChange" bgColor="#fff"></u-subsection>
			<view  v-for="(item,index) in list2" :key="index" @click="toHomeInfo(item)">
				<home-info :item="item"></home-info>
			</view>
		</view>
		
		<view class="flex m-text-40 text-center align-center text-red" style="background-color: #02f9d8;height: 100rpx;width: 100%;position: fixed;bottom: 0;">
			<view class="flex-sub u-border-right" style="border-right: #fff 10rpx solid;" @click="callCustomer(customerInfo.uploaderPhone, 2)">
				经纪人
			</view>
			<view class="flex-sub" @click="callCustomer(customerInfo.phoneNum, 1)">
				客户电话
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				isWho: false,
				phonenum: '',
				picture: [],
				// 接收上个页面传递的点击的客户的信息
				customerInfo: '',
				// 查询出来的房源列表
				list2: [],
				// 房源匹配条件
				homeMatchThree: {},
				homeMatchTwo: {},
				homeMatchOne: {},
				// 日志上传
				addCallLogForm: {},
				// 分页列表
				matchList: ['模糊匹配', '中等匹配', '精准匹配'],
				// 分页的目前索引
				current: 0,
			}
		},
		onLoad (option) {
			this.isWho = uni.$u.utils.isWho(option.userId)
			console.log('this.isWho: ', this.isWho)
			/**
			 * 获取上个页面传来的参数
			 */
			console.log(option)
			this.customerInfo = option
			console.log('客户信息: ', this.customerInfo)
			this.addCallLogForm.name = option.agent
			/**
			 * 房源匹配
			 * c_name首付需求
			 */
			this.homeMatchThree = {
				allPrice: option.allPrice,
				onePay: option.onePay,
				area: option.area,
				homeType: option.homeType,
				region: option.region,
				towards: option.towards,
				furnish: option.furnish,
				furnishStyle: option.furnishStyle,
				homeName: option.homeName,
				payType: option.payType,
				elevator: option.elevator,
				facility: option.facility
			}
			this.homeMatchTwo = {
				allPrice: option.allPrice,
				onePay: option.onePay,
				area: option.area,
				homeType: option.homeType,
				region: option.region,
				towards: option.towards,
				furnish: option.furnish,
				furnishStyle: option.furnishStyle
			}
			this.homeMatchOne = {
				allPrice: option.allPrice,
				onePay: option.onePay,
				area: option.area,
				homeType: option.homeType
			}
			this.match(this.homeMatchOne)
		},
		methods: {
			/**
			 * 点击切换匹配类型
			 * one 低等匹配
			 * two 中等匹配
			 * three 精准匹配
			 */
			sectionChange (index) {
				this.current = index
				if(index === 0) {
					this.match(this.homeMatchOne)
				}else if(index === 1) {
					this.match(this.homeMatchTwo)
				}else if(index === 2) {
					this.match(this.homeMatchThree) 
				}
			},
			/**
			 * 返回上一个页面
			 */
			leftClick () {
				this.$u.route({
					type: 'navigateBack',
					delta: 1,
				})
			},
			/**
			 * @param {传递过去的房源信息} item
			 */
			toHomeInfo (item) {
				uni.$u.route('/pages/broker/homeManagement/homeInfo', item) 
			},
			/**
			 * @param {String} phonenum
			 * @param {1 查看客户电话, 其他 查看经纪人电话 } flag
			 */
			callCustomer (phoneNum, flag) {
				this.addCallLogForm = {
					name: this.vuex_userInfo.nickName,
					store: this.vuex_userInfo.dept.deptName,
					department: this.vuex_userInfo.roles[0].roleName,
				}
				if(flag === 1) {
					this.addCallLogForm.remark = this.vuex_userInfo.dept.deptName + '的' + this.vuex_userInfo.roles[0].roleName + this.vuex_userInfo.nickName + '查看了客户' + this.customerInfo.name + '联系方式'
				}else {
					this.addCallLogForm.remark = this.vuex_userInfo.dept.deptName + '的' + this.vuex_userInfo.roles[0].roleName + this.vuex_userInfo.nickName + '查看了经纪人' + this.customerInfo.uploader + '联系方式'
				}
				// 添加日志
				uni.$u.api.log.addCallLog(this.addCallLogForm).then(res => {
					console.log(res)
				}).catch(err => {
					console.log('catch:' + err)
				})
				// 拨打电话
				uni.makePhoneCall({ phoneNumber: phoneNum })
			},
			/**
			 * 客源匹配函数，传入不同的参数来确定匹配的等级
			 */
			match (homeMatch) {
				uni.$u.api.home.homeMatch({ params: homeMatch }).then(res => {
					this.list2 = res.rows
					if (res.rows.length === 0) uni.showToast({
						title: '未匹配到数据',
						icon: 'none'
					})
					/**
					 * 分离多张图片并显示第一张
					 */
					this.list2.forEach(item=>{
						try{
							item.picOne = item.picOne.split(',')[0]
						}catch(e) {
							item.picOne = ['/static/logo.png']
						}
					})
					console.log('匹配结果: ', this.list2)
				}).catch(err => {
					console.log('catch:' + err)
				})
			}
		}
	}
</script>

<style>

</style>
