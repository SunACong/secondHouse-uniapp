<template>
    <view id="animateList">
        <view id="box">
            <view id="con1" ref="con1" :class="{anim:animate==true}" :id="oneClass===false?'m-margin-30':'m-margin-0'" @mouseenter="mEnter" @mouseleave="mLeave">
                <view v-for="(item,index) in List" :key="index">
                    <text>
						<text class="mg mg1" >{{item.name}}</text>
						<text class="mg mg2" >{{replaceStr(item.phoneNum)}}</text>
						<!-- <text class="mg mg2" >{{utils.callToString(item.phonenum)}}</text> -->
						<text class="mg mg3" @click="clickList(item)">查看</text>
					</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'animateList',
        props: {
            List: {
                type: Array,
                default: ()=>[]
            },
        },
        data () {
			return {
				oneClass: false,
				animate: false,
			}
        },
        mounted () {
            this.timer= setInterval(this.scroll, 1500)
        },  
        methods: {
					scroll () {
							let that = this
							that.oneClass = false
							that.animate = !that.animate
							setTimeout(function () {
									that.List.push(that.List[0])
									that.List.shift()
									that.oneClass = true
									that.animate = !that.animate // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
							}, 500)
					},
					mEnter () {
							// clearInterval(this.timer)
					},
					mLeave () {
							// this.timer = setInterval(this.scroll, 3000) 
					},
					replaceStr (str) {
						return str.substring(0, 4) + '****' + str.substring(8)
					},
					clickList (item) {
						this.$emit('clickList', item)
					}
				},
				beforeDestroy () {
						if (this.timer) {clearInterval(this.timer)}
				},
    }
</script>

<style scoped>
    #box{
        height: 240rpx;
        line-height: 60rpx;
        overflow: hidden;
        transition: all 0.5s;
        color: #ffffff;
    }
    .anim{
        transition: all 0.5s;
    }
    #con1 li{
        list-style: none;
        line-height: 60rpx;
        height: 120rpx;
    }
	.mg{
		display: inline-block;
		width: 100rpx;
		color: #020202;
		font-size: 20rpx;
		margin-left: 15rpx;
	}
	.mg1{
		margin-right: 50rpx;
	}
	.mg2{
		margin-right: 110rpx;
	}
	.m-margin-0{
		margin-top: 0rpx;
	}
	.m-margin-30{
		margin-top: -60rpx;
	}
</style>
