<template>
	<view>
		<u-gap height="10rpx" bgColor="#fff"></u-gap>
		<view class="flex m-text-24" style="background-color: #F0E5E5;">
			<view class="padding-xs flex-sub">
				<u--text :text="'客源编号：'+ item.id" ></u--text>
				<!-- <view class="flex">客源编号：<text>20220001</text></view> -->
				<u-icon height="300rpx" width="240rpx" :name="item.sex === '男'?'/static/broker/customerManegement/man.jpg':'/static/broker/customerManegement/woman.jpg'"></u-icon>
			</view>
			<view class="padding-top flex-twice">
				<view class="">总价：<text>{{item.allPrice}}</text></view>
				<view class="">首付：<text>{{item.onePay}}</text></view>
				<view class="">商圈：<text>{{item.region}}</text></view>
				<view class="">装修风格：<text>{{item.furnishStyle}}</text></view>
				<view class="">装修价格：<text>{{item.allpriceneed}}</text></view>
				<view class="">户型：<text>{{item.homeType}}</text></view>
				<view class="">朝向：<text>{{item.towards}}</text></view>
				<view class="">步梯/电梯：<text>{{item.elevator}}</text></view> 
				<view class="">忌讳楼层：<text>{{item.floor}}</text></view>
			</view>
			<view class="flex-sub padding-top padding-right-xs">
				<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;" text="公盘" shape="circle" type="success" color="#03F634"></u-button>
				<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;" text="电话" shape="circle" type="success" color="#03F634"></u-button>
				<u-button class="margin-bottom-xs"  style="height: 60rpx;color: black;" text="查看" shape="circle" type="success" color="#03F634" @click="toCustomerInfo(item)"></u-button>
				<view class="" style="padding-right: 0;">上传日期：<text>{{item.createTime}}</text></view>
			</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name: 'customer-info',
		data () {
			return {}
		},
		props: {
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		methods: {
			toCustomerInfo (item) {
				console.log('item: ', item)
				uni.$u.route('/pages/broker/customerManagement/customerInfo', item)
			},
		}
	}
</script>

<style>

</style>
