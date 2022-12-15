 <template>
	<view class="" style="background-color: #FFFFFF;">
		<u-icon width="750rpx" height="84rpx" style="padding-top: 81rpx;" :name="this.GLOBLE.imgURL+'/broker/renwudating.png'"/>
		
		<!-- 客源 -->
		<view class="m-relative">
			<u-icon class="m-absolute::after " width="750rpx" height="450rpx" :name="this.GLOBLE.imgURL+'/broker/kehugongpan.png'">
			</u-icon>
			<view class="m-absolute" style="left: 165rpx;top: 146rpx;">
				<animateList :List="customerList" @clickList="toWatchCustomer"></animateList>
			</view>
		</view>

		<!-- VS -->
		<u-icon width="600rpx" height="220rpx" style="margin-left: 80rpx;" :name="this.GLOBLE.imgURL+'/broker/vs.png'"/>
		
		<!-- 房源 -->
		<view class="m-relative">
			<u-icon class="m-absolute::after " width="750rpx" height="470rpx" style="margin-top: -63rpx;"
				:name="this.GLOBLE.imgURL+'/broker/fangyuan.png'"></u-icon>
			<view class="m-absolute" style="left: 140rpx;top: 146rpx;">
				<animateList4 :List="homeList" @clickListTwo="toWatchHome"></animateList4>
			</view>
		</view> 
		
		<!-- 工作区 -->
		<u-icon width="750rpx" height="80rpx" :name="this.GLOBLE.imgURL+'/broker/gongzuoqu.png'"></u-icon>

		<!-- 我的成果 -->
		<view class="chengguo m-relative">
			<u-icon class="m-absolute" width="690rpx" height="372rpx" style="top: 39rpx;left: 40rpx;"
				:name="this.GLOBLE.imgURL+'/broker/wodechengguo.png'"></u-icon>
			<u-icon class="m-absolute" width="288rpx" height="288rpx" style="top: 102rpx;left: 227rpx;"
				:name="this.GLOBLE.imgURL+'/broker/VS2.png'"></u-icon>
			<text class="m-absolute m-text-40"
				style="top: 58rpx;left: 306rpx;color: #34f308;font-weight: 700;">我的成果</text>
			<view class="m-absolute flex flex-direction  align-center chengGuo1" style="width: 200rpx;">
				<u-icon width="105rpx" height="105rpx" :name="this.GLOBLE.imgURL+'/broker/fangyuanshuju.png'"></u-icon>
				<text>{{result_home}}套房源</text>
			</view>
			<view class="m-absolute flex flex-direction  align-center chengGuo2" style="width: 200rpx;">
				<u-icon width="105rpx" height="105rpx" :name="this.GLOBLE.imgURL+'/broker/tichengshuju.png'"></u-icon>
				<text>1830.03元整</text>
			</view>
			<view class="m-absolute flex flex-direction  align-center chengGuo3" style="width: 200rpx;">
				<u-icon width="105rpx" height="105rpx" :name="this.GLOBLE.imgURL+'/broker/kehushuju.png'"></u-icon>
				<text>{{result_customer}}位客户</text>
			</view>
			<view class="m-absolute flex flex-direction  align-center chengGuo4" style="width: 200rpx;">
				<u-icon width="105rpx" height="105rpx" :name="this.GLOBLE.imgURL+'/broker/jiangjinshuju.png'"></u-icon>
				<text>1888元</text>
			</view>
		</view>
		
		<!-- OA办公流 -->
		<u-icon width="670rpx" height="180rpx" style="margin-left: 40rpx;margin-top: 20rpx;" :name="this.GLOBLE.imgURL+'/broker/OA.png'"/>
		
		<!-- 通知    公告 -->
		<view class="u-demo-block margin-left margin-right ">
			<view class="u-demo-block__content">
				<u-notice-bar text="恭喜X号公司X号门店XXX售出五十套房子,获得本月的销售标兵"></u-notice-bar>
			</view>
		</view>

		<!-- 底部板块 -->
		<view class="bg-white solid-bottom solid-top">
			<view class="grid text-center col-2">
				<view class=" flex solid-right solid-bottom align-center padding-top padding-bottom" @click="toHomeUpload(index1)" v-for="(item,index1) in oneList" :key="index1">
					<u-icon class="fourItemIcon" width="70rpx" height="70rpx" :name="item.icon"></u-icon>
					<view class="flex flex-direction align-start margin-left-xs">
						<view class="fourItemTitle">{{item.title}}</view>
						<view class="fourItemSmallTitle">{{item.smallTitle}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-gray" style="height: 20rpx;" />
		
		<view class="bg-white solid-bottom solid-top">
			<view class="grid text-center col-2">
				<view class="flex solid-right solid-bottom align-center padding-top padding-bottom" @click="toJiaojiedan(index2)" v-for="(item,index2) in twoList" :key="index2">
					<u-icon class="fourItemIcon" width="70rpx" height="70rpx" :name="item.icon"></u-icon>
					<view class="flex flex-direction align-start margin-left-xs">
						<view class="fourItemTitle">{{item.title}}</view>
						<view class="fourItemSmallTitle">{{item.smallTitle}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-gray" style="height: 20rpx;" />
		
		<view class="bg-white solid-bottom solid-top">
			<view class="grid  col-2">
				<view class="flex solid-right solid-bottom align-center padding-top padding-bottom"
					v-for="(item,index3) in threeList" :key="index3">
					<u-icon class="fourItemIcon" width="70rpx" height="70rpx" :name="item.icon"></u-icon>
					<view class="flex flex-direction align-start margin-left-xs">
						<view class="fourItemTitle">{{item.title}}</view>
						<view class="fourItemSmallTitle">{{item.smallTitle}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white" style="height: 50rpx;" />
	</view>
</template>

<script>
	import animateList from '@/components/animateList-zsptsf/animateList.vue'
	import animateList4 from '../../components/animateList-zsptsf/animateList4.vue'
	export default {
		components: {
			animateList,
			animateList4
		},
		computed: {},
		data () {
			return {
				oneList: [{
						icon: this.GLOBLE.imgURL+'/broker/fangyuanshangchuan.png',
						title: '房源上传',
						smallTitle: '房屋上传、界定',
						url: '/pages/broker/homeUpload/homeUpload',
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/keyuanshangchuan.png',
						title: '客源上传',
						smallTitle: '客源上传、公盘',
						url: '/pages/broker/customerUpload/customerUpload',
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/fangyuanguanli.png',
						title: '房源管理',
						smallTitle: '房源推广、管理',
						url: '/pages/broker/homeManagement/homeManagement',
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/keyuanguanli.png',
						title: '客源管理',
						smallTitle: '客源管理、管理',
						url: '/pages/broker/customerManagement/customerManagement',
					}
				],
				twoList: [{
						icon: this.GLOBLE.imgURL+'/broker/jiaojiedan.png',
						title: '交接单',
						smallTitle: '交接单管理',
						url: '/pages/broker/jiaojiedan/index', 
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/banlijindu.png',
						title: '办理进度',
						smallTitle: '办理进度查询'
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/zhengxinguanli.png',
						title: '征信管理',
						smallTitle: '征信上传管理'
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/feiyongshenpi.png',
						title: '费用审批',
						smallTitle: '一键处理审批流程'
					}
				],
				threeList: [{
						icon: this.GLOBLE.imgURL+'/broker/hetongguanli.png',
						title: '合同管理',
						smallTitle: '合同下载、填写'
					}, 
					{
						icon: this.GLOBLE.imgURL+'/broker/jianzhiguanli.png',
						title: '兼职管理',
						smallTitle: '兼职人员客房员管理'
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/tichengguanli.png',
						title: '提成管理',
						smallTitle: '我的收入、提成'
					},
					{
						icon: this.GLOBLE.imgURL+'/broker/gonggaoguanli.png',
						title: '公告管理',
						smallTitle: '最新公司情况、政策管理'
					}
				],
				// 房源列表
				customerList: [],
				// 客源列表
				homeList: [],
				// 我的成果 房源
				result_home: '',
				// 我的成果 客源
				result_customer: ''
			}
		},
		onLoad () {
			// 打印出token值
			console.log(this.vuex_token)
			this.getList()
		},
		created () {
			if(this.vuex_token === '') {
				uni.$u.route({
					url: '/pages/login/login',
					type: 'redirect'
				})
			}
		},
		onPullDownRefresh () {
			this.getList()
			uni.stopPullDownRefresh()
		},
		
		methods: {
			toHomeUpload (index) {
				uni.$u.route(this.oneList[index].url)
			},
			toJiaojiedan (index) {
				uni.$u.route(this.twoList[index].url)
			},
			toWatchCustomer (item) {
				console.log('客户信息: ', item)
				uni.$u.route('/pages/broker/customerManagement/customerInfo', item)
			},
			toWatchHome (item) {
				console.log('房屋信息: ', item)
				uni.$u.route('/pages/broker/homeManagement/homeInfo', item) 
			},
			
			// 获取展示数据
			async getList () {
				let customerInfo = await uni.$u.api.customer.getOwnCustomer({ params: { gongSiPan: '公盘', firmId: this.vuex_userInfo.dept.parentId } })
				this.customerList = customerInfo.rows
				console.log('${11}', 'this.customerList : ', this.customerList )
				// 查询本地区房源
				let homeInfo = await uni.$u.api.home.getOwnHome({ params: { companyId: this.vuex_userInfo.dept.parentId } })
				this.homeList = homeInfo.rows
				// 查询个人客户
				let ownCustomerInfo = await uni.$u.api.customer.getOwnCustomer({ params: { userId: this.vuex_userInfo.userId } })
				this.result_customer = ownCustomerInfo.total
				// 查询个人房源
				let ownHomeInfo = await uni.$u.api.home.getOwnHome({ params: { userId: this.vuex_userInfo.userId } })
				this.result_home = ownHomeInfo.total
				
			}
		}
	}
</script>

<style lang="scss">
	.chengguo {
		width: 100%;
		height: 420rpx;
		background-color: #FFFFFF;

		.chengGuo1 {
			top: 67rpx;
			left: 75rpx;
		}

		.chengGuo2 {
			top: 67rpx;
			right: 70rpx;
		}
		.chengGuo3 {
			top: 246rpx;
			left: 75rpx;
		}

		.chengGuo4 {
			top: 246rpx;
			right: 70rpx;
		}
	}
	.fourItemIcon {
		margin-left: 45rpx;
		margin-top: 10rpx;
	}

	.fourItemTitle {
		margin-bottom: 14rpx;
		color: #1a1a1a;
		font-size: 28rpx;
		font-weight: 1000;
	}

	.fourItemSmallTitle {
		color: #999999;
		font-size: 20rpx;
	}
</style>
