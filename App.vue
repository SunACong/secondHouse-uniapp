<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update'
	export default {
		onLaunch: function () {
			console.log('App Launch')
			console.log('开始检查更新。。。')
			checkUpdate()
			console.log('检查完毕')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script> 

<style lang="scss">
	@import "./common/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";
	@import "colorui/main.css";
	@import "colorui/icon.css";

	// 字体大小控制
	.m-text-40{
		font-size: 40rpx;
	}
	.m-text-38{
		font-size: 38rpx;
	}
	.m-text-36{
		font-size: 36rpx;
	}
	.m-text-34{
		font-size: 34rpx;
	}
	.m-text-32{
		font-size: 32rpx;
	}
	.m-text-30{
		font-size: 30rpx;
	}
	.m-text-28{
		font-size: 28rpx;
	}
	.m-text-26{
		font-size: 26rpx;
	}
	.m-text-24{
		font-size: 24rpx;
	}
	.m-text-22{
		font-size: 22rpx;
	}
	.m-text-20{
		font-size: 20rpx;
	}
	.m-text-18{
		font-size: 18rpx;
	}
	
	//定位
	.m-relative{
		position: relative;
	}
	.m-absolute{
		position: absolute;
		z-index: 1;
	}
	
</style>
