<template>
	<view style="
			width: 750rpx;
			height: 1610rpx;
			background-image: url(http://47.111.85.236:8099/loginBGI.png);
			opacity: 1.2;
			background-repeat:no-repeat;
			background-size: cover;" >
		<image class="headImg" :src="this.GLOBLE.imgURL+'/logo.png'" :lazy-load="true"></image>
		
		<view class="formArea"> 
			<u--form labelPosition="left" :model="userInfo" ref="form1" :rules="rules" :labelStyle="labelStyle" >
				<u-form-item class="formItem" style="height: 180rpx;" label="用户名" labelWidth="172rpx" prop="username"  borderBottom>
					<u--input v-model="userInfo.username" color="#999999" fontSize="36rpx" border="none" placeholder="请输入用户名" placeholderStyle="color:'#999999'"></u--input>
				</u-form-item>
				<u-form-item class="formItem" style="color: white" label="密码" labelWidth="172rpx" prop="password" borderBottom>
					<u--input v-model="userInfo.password" color="#999999" fontSize="36rpx" type="password" border="none" placeholder="请输入密码" placeholderStyle="color:'#999999'"></u--input>
				</u-form-item>
<!-- 				<u-form-item class="formItem" style="height: 100rpx;color: white" label="门店码" labelWidth="172rpx" prop="" borderBottom>
					<u--input color="#999999" fontSize="36rpx" type="password" border="none" placeholder="请输入门店码" placeholderStyle="color:'#999999'"></u--input>
				</u-form-item> -->
			</u--form>
			<view class="flex">
				<view class="margin-top-xs" style="width: 30%;margin-left: 80rpx;">
						<u-checkbox-group @change="checkboxChange">
								<u-checkbox	label="记住密码"	name="记住密码" labelColor="white" :checked="true"></u-checkbox>
						</u-checkbox-group>
				</view>
				<view class="text-right margin-right-xl margin-top-xs u-primary" style="width: 70%;">
					忘记密码?
				</view>
			</view>
			

		</view> 
		
		<view class="login m-text-38 align-center">
			<u-button shape="circle" @click="toLogin" :loading="loading"  loadingMode="circle" loadingText="正在登录...">登录</u-button>
		</view>
		
		<view class="text-center margin-top m-text-26 text-white">
			没有账号？
			<text class="u-primary">立即注册</text>
		</view>
	</view>
</template>

<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update'
	export default {
		data () {
			return {
				loading: false,
				labelStyle: {
					color: '#ffffff',
					fontSize: '36rpx'
				},
				placeholderStyle: { color: '#999999' },
				userInfo: {
					username: '',
					password: ''
				},
				remember: true,
				rules: {
					username: [{
						required: true,
						message: '未填',
						trigger: ['change', 'blur']
					}],
					password: [{
						required: true,
						message: '未填',
						trigger: ['change', 'blur']
					}]
				}
			}
		},
		onLoad () {
			checkUpdate()
			this.userInfo.username = this.vuex_username
			this.userInfo.password = this.vuex_password
		},
		methods: {
			checkboxChange (e) {
				this.remember = !this.remember
				console.log(this.remember)
			},
			async toLogin () {
				this.loading = true
				try{
					let { code, token } = await this.$u.api.login(this.userInfo)
					if(code === 200) {
						this.$u.vuex('vuex_token', token)
						if(this.remember) {
							this.$u.vuex('vuex_username', this.userInfo.username)
							this.$u.vuex('vuex_password', this.userInfo.password)
						}else{
							this.$u.vuex('vuex_username', '')
							this.$u.vuex('vuex_password', '')
						}
					} 
					let { user } = await this.$u.api.getInfo()
					this.$u.vuex('vuex_userInfo', user)
					uni.$u.route( {
						type: 'switchTab',
						url: '/pages/broker/broker'
					}) 
				}catch(e) {
					uni.$u.toast('请检查用户名和密码')
				}
				this.loading = false
			}
		}
	}
</script>

<style lang="scss">
.headImg{
	width: 184upx;
	height: 184upx;
	margin-left: 289rpx;
	margin-top: 250upx;
	border-radius: 50%;
	background-color: pink;
}
.formArea{
	margin-top: 95rpx;
	.formItem{
		margin: 0 82rpx;
	}
	.margin-right-xl{
		margin-right: 89rpx;
	}
}

.login{
	width: 80%;
	margin-top: 200rpx;
	margin-left: 80rpx;
	border-radius: 30rpx;
}
.margin-top{
	margin-top: 130rpx;
}
</style>
