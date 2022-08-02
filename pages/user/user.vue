<template>
	<view>
		<view class="bg-white flex padding-xl shadow" style="width: 96%;height: 250rpx;margin: 100rpx auto 0 auto;border-radius: 30rpx;">
			<view class="bg-gray text-center" style="width: 160rpx;height: 160rpx;border-radius: 50%;line-height: 160rpx;">
				<uni-icons custom-prefix="iconfont" type="icon-person" size="60" color="#07D5F4"></uni-icons>
			</view>
			<view class="margin-left-xl">
				<u--text :text="'昵称：'+ vuex_userInfo.nickName"></u--text>
				<u--text style="margin-top: 20rpx;" :text="vuex_userInfo.dept.deptName"></u--text>
				<u-button style="margin-top: 20rpx;" color="#0AF775" size="mini" shape="circle" :text="vuex_userInfo.roles[0].roleName"></u-button>
			</view>
		</view>
		
		<view class="bg-white flex shadow justify-between" style="background-color: #0BF6D7;width: 96%;height: 200rpx;margin: 20rpx auto 0 auto;border-radius: 30rpx;">
			<view class="flex-sub text-center margin-top-xl">
				<uni-icons custom-prefix="iconfont" type="icon-yinhangka" size="30" color="#fff"></uni-icons>
				<view class="text-white">我的银行卡</view>
			</view>
			<u-line color="#fff" direction="col" length="50%" :hairline="false" margin="50rpx"></u-line>
			<view class="flex-sub text-center margin-top-xl">
				<uni-icons custom-prefix="iconfont" type="icon-qianbao" size="30" color="#fff"></uni-icons>
				<view class="text-white">我的钱包</view>
			</view>
		</view>
		
		<view class="bg-white shadow" style="width: 96%;margin: 20rpx auto 0 auto;">
			<u-cell-group>
				<u-cell
				    isLink
				    url="url"
					rightIcon="play-right-fill"
				>
					<view slot="title">
						<uni-icons custom-prefix="iconfont" type="icon-duoren" size="30"></uni-icons>
						<text style="vertical-align: 25%;margin-left: 30rpx;">我的提成</text>
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		
		<view class="bg-white shadow" style="width: 96%;margin: 10rpx auto 0 auto;">
			<u-cell-group v-for="(item,index) in cellList" :key="index">
				<u-cell
				    isLink
				    :url="item.url"
					:rightIcon="item.rightIcon"
				>
					<view slot="title">
						<uni-icons custom-prefix="iconfont" :type="item.type" size="30"></uni-icons>
						<text style="vertical-align: 25%;margin-left: 30rpx;">{{item.title}}</text>
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		
		<view class="flex flex-direction align-center " >
			<view class="margin-top-xl" style="width: 50%;">
				<u-button :customStyle="{color:'red'}" color="#03FD67" shape="circle"   @click="outLogin">退出登录</u-button>
			</view>
			<view class="margin-top" style="width: 50%;">
				<u-button :customStyle="{color:'red'}" color="#03FD67" shape="circle" text="检查更新" @click="toUpdate"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update'
	export default {
		data () {
			return {
				cellList: [
					{
						url: 'url',
						type: 'icon-meiyuan',
						title: '我的提成',
						rightIcon: 'play-right-fill'
					}, {
						url: 'url',
						type: 'icon-liwu',
						title: '我要推荐',
						rightIcon: 'play-right-fill'
					}, {
						url: 'url',
						type: 'icon-person',
						title: '通讯录',
						rightIcon: 'play-right-fill'
					}, {
						url: 'url',
						type: 'icon-huizhang',
						title: '我的企业',
						rightIcon: 'play-right-fill'
					}
				],
			}
		},
		onLoad () {},
		methods: {
			outLogin () {
				uni.$u.route ({
					type: 'reLaunch',
					url: 'pages/login/login'
				})
				uni.$u.toast('退出成功' )
				this.$u.vuex('vuex_token', '')
				this.$u.vuex('vuex_userInfo', '')
			},
			toUpdate () {
				let isUpadate = checkUpdate()
				console.log(isUpadate)
			}, 
			woqu () {
				let s = this.$u.utils.callToString('18771496933')
				console.log(s)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
