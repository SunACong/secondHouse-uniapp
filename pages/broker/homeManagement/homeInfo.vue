<template>
	<view>
		<u-navbar :title="'房源编号' + homeInfo.id" @leftClick="leftClick" bgColor="transparent" titleStyle="color: #fff" leftIconColor="#fff"></u-navbar>
		<u-swiper
					height="480rpx"
					:list="homeInfo.picOne"
					indicator
					indicatorMode="line"
					circular
					@click="saveImg"
		    ></u-swiper>
		
		<view class=" bg-white">
			<view class="m-text-18 u-light-color text-right padding-right margin-top-xs">
				<text class="margin-right">经纪人：{{homeInfo.creater}}</text>
				<text>发布时间：{{homeInfo.createTime}}</text>
			</view>
			<view class="m-text-38 text-bold margin-left">{{homeInfo.homeName}}</view>
			<view class="flex padding text-bold text-center m-text-30" >
				<view class="flex-sub ">
					<view class="m-text-20"> 
						售价
					</view>
					<view class="text-red margin-top-xs">
						{{homeInfo.allPrice}}万
					</view>
				</view>
				<view class="flex-sub">
					<view class="m-text-20">
						面积
					</view>
					<view class="text-red margin-top-xs">
						{{homeInfo.area}}平米
					</view>
				</view>
				<view class="flex-twice">
					<view class="m-text-20">
						户型
					</view>
					<view class="text-red margin-top-xs">
						{{homeInfo.homeType}}
					</view>
				</view>
			</view>
			<view class="margin-top-xs margin-left">
				<text class="m-text-30 text-bold">售房信息</text>
				<view class="flex flex-wrap margin-top-xs m-text-28" >
					<view class="sale-info">区域：{{homeInfo.region}}</view>
					<view class="sale-info">等级：{{homeInfo.homeLevel}}</view>
					<view class="sale-info">支付方式：{{homeInfo.payType}}</view>
					<view class="sale-info">首付：{{homeInfo.onePay}}万</view>
					<view class="sale-info">单价：{{parseInt(homeInfo.allPrice*10000/homeInfo.area)}} 元/平米</view>
					<view class="sale-info">栋座：{{isWho? homeInfo.build:'***'}}</view>
					<view class="sale-info">单元：{{isWho? homeInfo.unit:'***'}}</view>
					<view class="sale-info">楼层：{{isWho? homeInfo.floor:'***'}}</view>
					<view class="sale-info">门牌：{{isWho? homeInfo.roomId:'***'}}</view>
					<view class="sale-info">产证地址：{{isWho? homeInfo.location:'***'}}</view>
					<view class="sale-info">朝向：{{homeInfo.towards}}</view>
					<view class="sale-info">电梯/步梯：{{homeInfo.elevator}}</view>
					<view class="sale-info">装修现状：{{homeInfo.furnish}}</view>
					<view class="sale-info">装修风格：{{homeInfo.furnishStyle}}</view>
					<view class="sale-info">产权性质：{{homeInfo.property}}</view>
					<view class="sale-info">产权类型：{{homeInfo.propertyType}}</view>
					<view class="sale-info">产证状态：{{homeInfo.productStatus}}</view>
					<view class="sale-info">房屋现状：{{homeInfo.currentStatus}}</view>
					<view class="sale-info">备注：{{homeInfo.note}}</view>
					<view class="sale-info">附属设施：{{homeInfo.facility}}</view>
				</view>
				
			</view> 
		</view>
		
		<view class="bg-gray m-text-40 text-bold text-center" style="padding-top: 30rpx;margin-left: 30rpx;">
			<text>客源匹配</text>
			<u-subsection class="margin-tb" :list="matchList" :current="current" @change="sectionChange" bgColor="#fff"></u-subsection>
			<view class="flex m-text-26 margin-top-xs text-gray" v-for="(item,index2) in list2" :key="index2">
				<view style="width: 50rpx;">{{item.id}}.</view>
				<view style="width: 200rpx;">{{item.name}}</view>
				<!-- <view style="width: 250rpx;">{{item.phonenum.substring(0, 4)}}****{{item.phonenum.substring(8)}}</view> -->
				<view style="width: 250rpx;">{{noShow(item.phoneNum)}}</view>
				<view style="width: 200rpx;" @click="toCall(item.phoneNum)">查看联系方式</view>
			</view>
		</view>
		
		<view style="height: 140rpx;"></view>
		
		<view class="flex bg-white align-center" style="position: fixed;bottom: 0;width: 100%;height: 110rpx;">
			<view class=" flex-sub">
				<u-icon :label="this.isWho?'联系房东' : '联系经纪人'" @click="callSomebody()" labelPos="bottom" :name="this.GLOBLE.imgURL+'/broker/homeManagement/aixin.png'" width="52rpx" height="44rpx"></u-icon>
			</view>
			<view class="padding-lr flex-sub">
				<u-button class="m-text-20" style="color: #fff;height: 67rpx;background-color: #ff2a39;border-radius: 30rpx;" @click="toJiaoJieDan()">交接单</u-button>
			</view>
			<view class="padding-lr flex-sub">
				<u-button class="m-text-20"  style="height: 67rpx;border-radius: 30rpx;border: 2rpx solid red ;" :plain="true">房源推广</u-button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				homeInfo: {},
				list2: [],
				matchList: ['模糊匹配', '中等匹配', '精准匹配'],
				current: 0,
				customerMatchOne: {},
				customerMatchTwo: {},
				customerMatchThree: {},
				phoneNum: '',
				isWho: false,
			}
		},
		onLoad (option) {
			/**
			 * 判断是不是本人 true  false
			 */
			this.isWho = uni.$u.utils.isWho(option.userId)
			console.log('是不是本人: ', this.isWho)
			/**
			 * 接收上个页面传递的信息
			 */
			this.homeInfo = option
			if (this.homeInfo.picOne.indexOf(',') !== -1) { // 
				this.homeInfo.picOne = option.picOne.split(',')
				this.homeInfo.picOne.pop()
			} else {
				this.homeInfo.picOne = option.picOne.split(',')
			}
			console.log('传递的房屋信息: ', this.homeInfo )
			/**
			 * 客源匹配
			 */
			this.customerMatchThree = {
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
			this.customerMatchTwo = {
				allPrice: option.allPrice,
				onePay: option.onePay,
				area: option.area,
				homeType: option.homeType,
				region: option.region,
				towards: option.towards,
				furnish: option.furnish,
				furnishStyle: option.furnishStyle
			}
			this.customerMatchOne = {
				allPrice: option.allPrice,
				onePay: option.onePay,
				area: option.area,
				homeType: option.homeType
			}
			this.match(this.customerMatchOne)
		},
		methods: {
			// 保存图片
			async saveImg (index) {
				const url = await this.preView(index)
				// 下载文件请求地址
				uni.downloadFile({ 
					url: url, 
					success: res=>{
						if(res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath, // 传入临时地址
								success () {
									uni.showToast({ title: '保存成功' })
								},
								fail () {
									uni.showToast({ title: '保存失败', icon: 'error' })
								}
							})
						}
					}   
				})
			},
			/**
			 * 预览照片
			 */
			preView (index) {
				// 预览图片
				const res =	new Promise((resolve, reject) => {
					uni.previewImage({
						urls: this.homeInfo.picOne,
						longPressActions: {
							itemList: ['保存图片'],
							success: data => {
								console.log(this.homeInfo.picOne[data.index])
								resolve(this.homeInfo.picOne[data.index])
							},
							fail: err => {
								console.log(err.errMsg)
								reject(err.errMsg)
							}
						}
					})
				})
				return res
			},
			/**
			 * 点击切换匹配类型
			 */
			sectionChange (index) {
				this.current = index
				if(index === 0) {
					this.match(this.customerMatchOne)
				}else if(index === 1) {
					this.match(this.customerMatchTwo)
				}else if(index === 2) {
					this.match(this.customerMatchThree) 
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
			 * 房源匹配 点击查看联系方式
			 * @param {string} phonenum
			 */
			toCall (phonenum) {
				uni.makePhoneCall({ phoneNumber: phonenum })
			},
			/**
			 * 底部联系判断是否联系房东还是经纪人
			 */
			callSomebody () {
				// 拨打电话 由于数据库中没有经纪人电话 暂时用登录人的电话代替
				uni.makePhoneCall({ phoneNumber: this.isWho ? this.homeInfo.phoneNum : this.homeInfo.createrNumber })
			},
			/**
			 * 交接单表单
			 */
			toJiaoJieDan () {
				this.$u.route({
					url: '/pages/broker/jiaojiedan/jiaojiedan',
					type: 'navigateTo'
				})
			},
			/**
			 * 
			 */
			noShow (phoneNum) {
				return phoneNum.substring(0, 4)+'****'+phoneNum.substring(8)
			},
			/**
			 * 客源匹配函数，传入不同的参数来确定匹配的等级
			 */
			match (customerMatch) {
				uni.$u.api.customer.customerMatch({ params: customerMatch }).then(res => {
					this.list2 = res.rows
					if (res.rows.length === 0) this.$u.toast('未匹配到数据')
				}).catch(err => {
					this.$u.toast(err)
				})
			}
		}
	}
</script>

<style lang="scss">
.sale-info {
	margin-top: 15rpx;
	flex: 50%;
}
</style>
