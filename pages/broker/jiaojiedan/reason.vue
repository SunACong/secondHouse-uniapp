<template>
	<view>
		<view class="padding-xs bg-white">
			<u-gap height="5" bgColor="#fff"></u-gap>
			<view class="flex">
				<view class="flex-treble">
					<u--text size='10' :text="'编号: ' + item.id"></u--text>
					<view class="flex">
						<u--text  :text="'客户姓名: ' + item.buyName"></u--text>
						<view class="margin-lr-xs"></view>
						<u--text   :text="'电话: ' + item.customerPhone"></u--text>
					</view>
					<view class="flex">
						<u--text  :text="'卖方姓名: ' + item.buyName"></u--text>
						<view class="margin-lr-xs"></view>
						<u--text   :text="'电话: ' + item.customerPhone"></u--text>
					</view>
					<u--text :text="'地址: ' + '202205132'"></u--text>
					<u--text :text="'房源方: ' + item.homeAspect"></u--text>
					<u--text :text="'客源方: ' + item.customerAspect"></u--text>
					<u--text size='10' :text="'提交日期: ' + item.date"></u--text>
				</view>
				<view class="flex-sub  margin-top-xs">
					<u-button style="box-shadow: 5px 6px 10px #bbb;width: 160rpx;height: 60rpx;font-size: 26rpx;background-color: #04f64d;" shape="circle" >已拒绝</u-button>
					<u-button style="box-shadow: 5px 6px 10px #bbb;width: 160rpx;height: 60rpx;margin-top: 100rpx;font-size: 26rpx;background-color: #eb09be;" shape="circle" @click="go(current,item)" >重新填写</u-button>
				</view>
			</view>
		</view>
		<view class='padding'>
			<u--text class='padding-xl' type="error" text="错误原因:" size='40rpx'></u--text>
			<u--text :text='reason'></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{},
				reason:'价格填写错误，存量存在误差，需要重新填写，价格应修改为58.8万'
			}
		},
		onLoad(option) {
			this.item = option
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
