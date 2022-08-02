<template>
	<view>
		 <!-- <u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"></u-picker> -->
		 
		 <uni-combox :border="true" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
		 <view class="">
		 	{{message | cap(message1,message2)}}
		 </view>
		 <view class="">
		 	{{this.$u.utils.callToString("18771496933")}}
		 </view>
	</view>
   
</template>

<script>
	export default {
		data() {
			return {
				message:10,
				message1:100,
				message2:1000,
				show: true,
                columns: [
                    ['中国', '美国'],
                    ['深圳', '厦门', '上海', '拉萨'],
					 ['深圳', '厦门', '上海', '拉萨'],
					  ['深圳', '厦门', '上海', '拉萨']  
				],
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口']
			}
		},
		filters:{
			cap(val,a,b){
				console.log(val);
				console.log(a);
				console.log(b);
				return val*a*b
			}
		},
		methods: {
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
                console.log('confirm', e)
                this.show = false
			},
			function(){
				
				
				
			}
		}
	}
</script>

<style>
	
</style>