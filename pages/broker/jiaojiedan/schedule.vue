<template>
	<view class="bg-white padding">
		<view class="padding bg-gray">
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
			</view>
		</view>
		<view class="margin-xl">办理进度</view>
		<view class="">
			<u-steps current="3" direction="column" dot>
				<u-steps-item title="产权过户" desc="10:30"></u-steps-item>
				<u-steps-item title="银行按揭" desc="10:35"></u-steps-item>
				<u-steps-item title="银行抵押" desc="11:40"></u-steps-item>
				<u-steps-item title="银行放款" desc="11:40"></u-steps-item>
				<u-steps-item title="水电煤气过户" desc="11:40"></u-steps-item>
				<u-steps-item title="完成" desc="11:40"></u-steps-item>
			</u-steps>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{}
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
