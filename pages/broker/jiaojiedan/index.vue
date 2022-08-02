<template>
	<view>
		 <u-tabs  :list="tabList" :scrollable="false" lineColor="#04F62D" @change="change"></u-tabs>
		 
		 <view class="margin-lr-xs" v-for="(item,index) in list" :key="index">
		 	<u-gap height="10" bgColor="#fff"></u-gap>
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
					<u-button :style="status[current].style1" style="box-shadow: 5px 6px 10px #bbb;width: 160rpx;height: 60rpx;font-size: 26rpx;" shape="circle" >{{status[current].title1}}</u-button>
					<u-button :style="status[current].style2" style="box-shadow: 5px 6px 10px #bbb;width: 160rpx;height: 60rpx;margin-top: 120rpx;font-size: 26rpx;" shape="circle" @click="go(current,item)" >{{status[current].title2}}</u-button>
				</view>
			</view>
		 </view>
		 <u-popup :customStyle="style" :show="show" mode="center">
			 <view class="text-center u-border-bottom" style="height: 80%;line-height: 180rpx;font-size: 40rpx;">是否撤回？</view>
			 <view class="flex">
			 	<view class="text-center u-border-right" style="width: 50%;line-height: 120rpx;">
			 		确认
			 	</view>
				<view class="text-center" style="width: 50%;line-height: 120rpx;" @click="show = false">
			 		取消
			 	</view>
			 </view>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
    export default {
        data() {
            return {
				show:false,
				current:0,
				style:{
					'backgroundColor':'#0bf4f4',
					'color':'red',
					'width':'70%',
					'height':'300rpx',
					'border-radius':'30rpx'
				},
				status:[
					{
						title1:'审核中',
						title2:'撤回',
						style1:{
							'background-color':'#04F62D',
							color:'red'
						},
						style2:{
							'background-color':'purple',
							color:'#04F62D'
						}
					},{
						title1:'已拒绝',
						title2:'查询原因',
						style1:{
							'background-color':'#04F62D',
							color:'red'
						},
						style2:{
							'background-color':'purple',
							color:'#04F62D'
						}
					},{
						title1:'已通过',
						title2:'查看进度',
						style1:{
							'background-color':'#04F62D',
							color:'red'
						},
						style2:{
							'background-color':'#04F62D',
							color:'red'
						}
					},{
						title1:'已完成',
						title2:'查看',
						style1:{
							'background-color':'#04F62D',
							color:'red'
						},
						style2:{
							'background-color':'purple',
							color:'#04F62D'
						}
					},
				],
                tabList: [{
                    name: '审核中',
                },{
                    name: '已拒绝'
                }, {
                    name: '已通过'
                }, {
                    name: '已完成'
                }],
				list:[
					{
						id:'202205132',
						customerName:'张三',
						customerPhone:'13986786789',
						buyName:'李四',
						buyPhone:'13986786789',
						address:'瓮安县锦美时代广场2栋301室',
						homeAspect:'占山',
						customerAspect:'王安',
						date:'2022-05-30 15:29'
					},{
						id:'202205132',
						customerName:'张三',
						customerPhone:'13986786789',
						buyName:'李四',
						buyPhone:'13986786789',
						address:'瓮安县锦美时代广场2栋301室',
						homeAspect:'占山',
						customerAspect:'王安',
						date:'2022-05-30 15:29'
					},{
						id:'202205132',
						customerName:'张三',
						customerPhone:'13986786789',
						buyName:'李四',
						buyPhone:'13986786789',
						address:'瓮安县锦美时代广场2栋301室',
						homeAspect:'占山',
						customerAspect:'王安',
						date:'2022-05-30 15:29'
					},{
						id:'202205132',
						customerName:'张三',
						customerPhone:'13986786789',
						buyName:'李四',
						buyPhone:'13986786789',
						address:'瓮安县锦美时代广场2栋301室',
						homeAspect:'占山',
						customerAspect:'王安',
						date:'2022-05-30 15:29'
					}
				]
            }
        },
		methods:{
			change(item){
				this.current = item.index;
			},
			go(current,item){
				if(this.current === 0){
					this.show = true
				}else if(this.current === 1){
					console.log(item);
					uni.$u.route('/pages/broker/jiaojiedan/reason', item);
				}else if(this.current === 2){
					console.log(item);
					uni.$u.route('/pages/broker/jiaojiedan/schedule', item);
				}else if(this.current === 3){
					
				}
			}
		}
    }
</script>

<style>

</style>
