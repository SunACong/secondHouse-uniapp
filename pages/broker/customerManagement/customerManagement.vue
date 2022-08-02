<template>
	<view >
		<view class="flex" style="height: 80rpx;">
			<view :class="['flex-sub','text-center','m-text-40','text-blod',current?'text-green':'']" style="line-height: 80rpx;" @click="changePage(0)">
				公盘
			</view>
			<u-line color="#03F634" direction="col" length="50%" :hairline="false" margin="25rpx"></u-line>
			<view :class="['flex-sub','text-center','m-text-40','text-blod',current?'':'text-green']"  style="line-height: 80rpx;" @click="changePage(1)">
				私盘
			</view>
		</view>
		<!-- <uni-pagination :current="pageInfo.pageCurrent" :total="pageInfo.pageTotal" title="标题文字" :show-icon="false" @change="change" /> -->
		
		<!-- <view class="" v-for="(item,index) in pageList" :key="index"> -->
		<view class="" v-for="(item,index) in customerList" :key="index">
			<u-gap height="10rpx" bgColor="#fff"></u-gap>
			<view class="flex m-text-26" style="background-color: #F0E5E5;">
				<view class="padding-xs flex-sub">
					<u--text :text="'客源编号：'+ item.id" ></u--text>
					<u-icon height="300rpx" width="240rpx" :name="item.sex === '男'?'/static/broker/customerManegement/man.jpg':'/static/broker/customerManegement/woman.jpg'"></u-icon>
				</view>
				<view class="padding-top-xl flex-twice">
					<view class="">总价：<text style="color: darkgreen;">{{item.allPrice}}</text></view>
					<view class="">首付：<text style="color: darkgreen;">{{item.onePay}}</text></view>
					<view class="">商圈：<text style="color: darkgreen;">{{item.region}}</text></view>
					<view class="">装修风格：<text style="color: darkgreen;">{{item.furnishStyle}}</text></view>
					<view class="">装修现状：<text style="color: darkgreen;">{{item.furnish}}</text></view>
					<view class="">户型：<text style="color: darkgreen;">{{item.homeType}}</text></view>
					<view class="">朝向：<text style="color: darkgreen;">{{item.towards}}</text></view>
					<view class="">步梯/电梯：<text style="color: darkgreen;">{{item.elevator}}</text></view>
					<view class="">忌讳楼层：<text style="color: darkgreen;">{{item.floor}}</text></view>
				</view>
				<view class="flex-sub padding-top-xl padding-right-xs">
					<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;box-shadow: 5px 5px 5px #bbb;" :text="item.gongSiPan" shape="circle" type="success" color="#03F634"></u-button>
					<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;box-shadow: 5px 5px 5px #bbb;" text="电话" shape="circle" type="success" color="#03F634" @click="callCustomer(item.phoneNum)"></u-button>
					<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;box-shadow: 5px 5px 5px #bbb;" text="查看" shape="circle" type="success" color="#03F634" @click="toCustomerInfo(item)"></u-button>
					<view class="" style="padding-right: 0;">上传日期：<text>{{item.createTime}}</text></view>
				</view>
			</view> 
		</view>
		
		<u-loading-page :loading="loading"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				customerList: [],
				pageList: [],
				loading: true,
				current: true,
				pageInfo: {
					pageCurrent: 1,
					pageTotal: 10,
					pageSize: 10,
				}
			}
		},
		async onLoad () {
			this.loading = true
			await uni.$u.api.customer.getOwnCustomer({ params: { gongSiPan: '公盘', firmId: this.vuex_userInfo.dept.parentId } }).then(res => {
				this.customerList = res.rows 
				this.caculator()
				this.loading = false
			}).catch(err => {
				console.log('catch:' + err)
			})
		},
		methods: {
			toCustomerInfo (item) {
				console.log('item: ', item)
				uni.$u.route('/pages/broker/customerManagement/customerInfo', item)
			},
			change (e) {
				this.pageList = this.customerList.slice((e.current-1)*this.pageInfo.pageSize, (e.current-1)*this.pageInfo.pageSize+(this.pageInfo.pageSize-1))
				console.log(e)
				console.log('需要渲染的客户: ', this.pageList)
			},
			async changePage (item) {
				this.current = item===0?true:false
				this.customerList = []
				this.loading = true
				if (item===0) {
					await uni.$u.api.customer.getOwnCustomer({ params: { gongSiPan: '公盘', firmId: this.vuex_userInfo.dept.parentId } }).then(res => {
						console.log(res)
						this.customerList = res.rows
						this.caculator()
						this.loading = false
					}).catch(err => {
						console.log('catch:' + err)
					})
				} else{
					await uni.$u.api.customer.getOwnCustomer({ params: { gongSiPan: '私盘', userId: this.vuex_userInfo.userId } }).then(res => {
						console.log(res)
						this.customerList = res.rows
						this.caculator()
						this.loading = false
					}).catch(err => {
						console.log('catch:' + err)
					})
				}
			},
			caculator () {
				this.pageInfo = {
					pageCurrent: 1,
					pageTotal: this.customerList.length,
					pageSize: 10,
				}
				this.pageList = this.customerList.slice(0, this.pageInfo.pageSize-1)
			},
			callCustomer (phoneNum) {
				uni.makePhoneCall({ phoneNumber: phoneNum })
			}
		}
	} 
</script>

<style>

</style>
