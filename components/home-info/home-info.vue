<template>
	<view>
		<view class="bg-gray" style="height: 10rpx;">		</view>
		<view class="flex bg-white margin-top-xs padding-left-xl" style="height: 200rpx;">
			<u-icon  width="216rpx" height="156rpx"  :name="item.picOne?item.picOne.split(',')[0]:'@/static/logo.png'"></u-icon>
			<!-- <u-image  width="216rpx" height="156rpx"  :src="item.picOne?item.picOne.split(',')[0]:'@/static/logo.png'" :lazy-load="true"></u-image> -->
			<view class="margin-left margin-top" style="width: 100%;">
				<view class="text-bold m-text-30">{{item.homeName}}</view>
				<view class="m-text-20 u-light-color margin-top-xs">
					<text class="margin-right">{{item.furnish}}</text>
					<text>{{item.floor}}层</text>
				</view>
				<view class="m-text-20 u-light-color margin-top-xs">
					<text class="margin-right">{{item.homeType}}</text>
					<text>{{item.area}}m²</text>
				</view>
				<view class="flex m-text-24 text-bold margin-top-xs text-center"> 
					<view  class="bg-gray margin-right padding-lr-xs">{{item.storeFront}}</view>
					<view   class="bg-gray padding-lr-xs">{{item.creater}}</view>
				</view>
			</view>
			<view class="margin-top-xl m-text-40 text-center text-bold" style="width: 50%;">
				<view class="text-red"> 
					{{item.onePay}}万
				</view>
				<view class="text-green">
					{{item.allPrice}}万
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return{}
		},
		props: {
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		}
	}
</script>

<style lang="scss">
</style>
