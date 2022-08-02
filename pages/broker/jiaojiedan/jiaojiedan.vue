<template>
	<view>
		<view class="bg-white padding-top">
			<u-steps :current="current">
				<u-steps-item title="身份信息"></u-steps-item>
				<u-steps-item title="产权信息"></u-steps-item>
				<u-steps-item title="交易信息"></u-steps-item>
			</u-steps>
		</view>
		
		<view class="bg-white" v-if="current==0">
			<u--form class="margin padding-bottom-xs padding-top-xs" labelPosition="left" :model="idInfo" ref="form3"  labelWidth="160rpx" :labelStyle="labelStyle">
				<u-form-item class="margin-top" label="买方名字"  prop="buyName"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.buyName" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="身份证号码"  prop="buyIdCard"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.buyIdCard" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="联系方式"  prop="buyPhoneNum"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.buyPhoneNum" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="卖方姓名"  prop="sellName"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.sellName" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="身份证号码"  prop="sellIdCard"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.sellIdCard" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="联系方式"  prop="sellPhoneNum"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="idInfo.sellPhoneNum" border="none"></u--input>
				</u-form-item>
				
				<u-form-item class="margin-top" label="征信报告"  prop="creditReport"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(0)">
					<u--input class="margin-right text-blod" v-model="idInfo.creditReport" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="交易方式"  prop="way"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(1)">
					<u--input class="margin-right text-blod" v-model="idInfo.way" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
			</u--form>
		</view>
		<view class="bg-white" v-if="current==1">
			<u--form class="margin padding-bottom-xs padding-top-xs" labelPosition="left" :model="propertyInfo" ref="form3"  labelWidth="160rpx" :labelStyle="labelStyle">
				<u-form-item class="margin-top" label="产权地址"  prop="propertyAddress"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="propertyInfo.propertyAddress" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="产权面积"  prop="propertyArea"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="propertyInfo.propertyArea" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="交易价格"  prop="price"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="propertyInfo.price" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="产权状态"  prop="propertyStatus"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(2)">
					<u--input class="margin-right text-blod" v-model="propertyInfo.propertyStatus" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="产权证书"  prop="propertyCertificate"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(3)">
					<u--input class="margin-right text-blod" v-model="propertyInfo.propertyCertificate" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				
				<view class="flex">
					<u-form-item class="margin-top" label="税率"  prop="taxRate"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;width: 538rpx; " @click="pickerShow(4)">
						<u--input class=" text-blod" v-model="propertyInfo.taxRate" inputAlign="right"  border="none"></u--input>
						<u-icon class=""  slot="right" name="arrow-down-fill"></u-icon>
					</u-form-item>	
					<u-form-item class="margin-top"  prop="payer" style="border: solid 2rpx #e5e5e5;width: 150rpx;"  @click="pickerShow(5)">
						<u--input class="text-blod" v-model="propertyInfo.payer"   border="none"></u--input>
						<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
					</u-form-item>	
				</view>
				<u-form-item class="margin-top" label="房源归属"  prop="homeBelong"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(6)">
					<u--input class="margin-right text-blod" v-model="propertyInfo.homeBelong" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="客源归属"  prop="guestBelong"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(7)">
					<u--input class="margin-right text-blod" v-model="propertyInfo.guestBelong" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs text-blue"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
			</u--form>
		</view>
		
		<view class="bg-white" v-if="current==2">
			<u--form class="margin padding-bottom-xs padding-top-xs" labelPosition="left" :model="tradeInfo" ref="form4"  labelWidth="160rpx" :labelStyle="labelStyle">
				<u-form-item class="margin-top" label="存量总价"  prop="stockPrice"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="tradeInfo.stockPrice" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="存量首付"  prop="stockOnePay"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="tradeInfo.stockOnePay" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="存量贷款"  prop="stockLoan"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="tradeInfo.stockLoan" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="交易佣金"  prop="tradeMoney"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(8)">
					<u--input class="margin-right text-blod" v-model="tradeInfo.tradeMoney" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="按揭银行"  prop="mortgageBank"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(9)">
					<u--input class="margin-right text-blod" v-model="tradeInfo.mortgageBank" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="婚姻状态"  prop="marriageStatus"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(10)">
					<u--input class="margin-right text-blod" v-model="tradeInfo.marriageStatus" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
				<u-form-item class="margin-top" label="借贷金额"  prop="creditFinance"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;">
					<u--input class="margin-right text-blod" inputAlign="right" v-model="tradeInfo.creditFinance" border="none"></u--input>
				</u-form-item>
				<u-form-item class="margin-top" label="按揭种类"  prop="marriageType"  style="padding-left: 20rpx;border: solid 2rpx #e5e5e5;" @click="pickerShow(11)">
					<u--input class="margin-right text-blod" v-model="tradeInfo.marriageType" inputAlign="right"  border="none"></u--input>
					<u-icon class="margin-right-xs text-blue"  slot="right" name="arrow-down-fill"></u-icon>
				</u-form-item>	
			</u--form>
		</view>
		<u-button
			type="primary"
			:text="current==2?'提交审核':'下一步'"
			customStyle="margin-top: 50px"
			@click="submit"
		></u-button>
		
		<u-picker
			:show="show"
			:columns="pickerChoose"
			@change="change"
			@cancel="cancel"
			@confirm="confirm"
		></u-picker>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelStyle:{
					color:'#b3b3b3',
				},
				current:0,
				idInfo:{
					buyName:'',
					buyIdCard:'',
					bugPhoneNum:'',
					sellName:'',
					sellIdCard:'',
					sellPhoneNum:'',
					creditReport:'',
					way:'',
				},
				propertyInfo:{
					propertyAddress:'',
					propertyArea:'',
					price:'',
					propertyStatus:'',
					propertyCertificate:'',
					taxRate:'',
					payer:'',
					homeBelong:'',
					guestBelong:'',
				},
				tradeInfo:{
					stockPrice:'',
					stockOnePay:'',
					stockLoan:'',
					tradeMoney:'',
					mortgageBank:'',
					marriageStatus:'',
					creditFinance:'',
					marriageType:'',
				},
				show:false,
				pickerIndex: 0,
				pickerChoose:[],
				pickerValue:["creditReport","way","propertyStatus","propertyCertificate","taxRate","payer","homeBelong","guestBelong","tradeMoney","mortgageBank","marriageStatus","marriageType"],
				pickerDict:[
					[
						["公盘","私盘"] 
					],
					[
						["20万以下","20-30万","30-40万","40-50万","50-60万","60-70万","70-90万","90万以上"]
					],
					[
						["5万以下","5-10万","10-15万","15-20万","20-25万","25-30万","30万以上"]
					],
					[
						["市中心","学校旁"]
					],
					[
						["毛坯","清水房","简装","小精装","精装","豪装","年限"]
					],
					[
						["一室一厅一卫一厨","两室一厅一卫一厨","两室两厅一卫一厨","三室一厅一卫一厨"]
					],
					[
						["东","西","南","北","南北","东西"]
					],
					[
						["电梯","步梯"]
					],
					[
						["全款","按揭","分期","公积金"]
					],
					[
						["满五唯一","车位","煤棚","煤棚","平台","满二","银行","医院","公园"]
					],
					[
						["满五唯一","车位","煤棚","煤棚","平台","满二","银行","医院","公园"]
					],
					[
						["满五唯一","车位","煤棚","煤棚","平台","满二","银行","医院","公园"]
					],
				],
			}
		},
		methods: {
			/**
			 * 显示picker 获取
			 * @param {传入点击第几个picker} index
			 */
			pickerShow(index){
				console.log(index);
				this.show = true;
				this.pickerIndex = index;
				//选择picker的内容
				this.pickerChoose = this.pickerDict[index];
			},
			/**
			 * 关闭picker
			 * @param {} index
			 */
			cancel(index) {
				this.show = false;
			},
			/**
			 * 当picker值改变的时候触发
			 * @param {Object} e
			 */
			change(e) {
				console.log(e.index);
			},
			/**
			 * pickerIndex控制交接单哪个表单
			 * @param {Object} e
			 */
			confirm(e) {
				this.show = false;
				if(this.pickerIndex <= 1){
					this.idInfo[`${this.pickerValue[this.pickerIndex]}`] = e.value[0];
				}else if(1 < this.pickerIndex &&  this.pickerIndex <= 6) {
					this.propertyInfo[`${this.pickerValue[this.pickerIndex]}`] = e.value[0];
				}else{
					this.tradeInfo[`${this.pickerValue[this.pickerIndex]}`] = e.value[0];
				}
				console.log(e.value[0]);
			},
			/**
			 * 页面渲染改变
			 */
			submit() {
				this.current+=1
			},
		}
	}
</script>

<style>

</style>
