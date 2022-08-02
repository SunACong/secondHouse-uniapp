<template>
	<view class="u-page" style="background-color: #ecf8ff;">
		<view class="u-demo-block padding-left-xl padding-right-xl padding-top">
			<text class="u-demo-block__title m-text-32" style="color: #1f5c99;font-weight: 700;">客户需求</text>
			<view class="u-page__line-item margin-top">
				<u-line color="#d2e1ea"></u-line>
			</view>
		
			<!-- 中间表单 -->
			<view class="u-demo-block__content">
				<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
				<u--form labelPosition="left" :model="customerUploadForm" ref="form2" :rules="rules" labelAlign="right" labelWidth="160rpx">
					
					<u-form-item label="公私盘: " prop="gongSiPan" borderBottom @click="pickerShow(0)" ref="item1">
						<u--input v-model="customerUploadForm.gongSiPan" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="客户等级: " prop="customerLever" borderBottom @click="pickerShow(11)" ref="item1">
						<u--input v-model="customerUploadForm.customerLever" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="购房目的: " prop="purpose" borderBottom @click="pickerShow(12)" ref="item1">
						<u--input v-model="customerUploadForm.purpose" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="客户1姓名: "  prop="name" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.name" border="none" placeholder="请输入客户1姓名" ></u--input>
					</u-form-item>
					<u-form-item label="客户1电话: "  prop="phoneNum" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.phoneNum"  border="none" placeholder="请输入客户1电话" ></u--input>
					</u-form-item>
					<u-form-item label="客户2姓名: "  prop="nameOne" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.nameOne" border="none" placeholder="请输入客户2姓名" ></u--input>
					</u-form-item>
					<u-form-item label="客户2电话: "  prop="phoneNumber" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.phoneNumber"  border="none" placeholder="请输入客户2电话" ></u--input>
					</u-form-item>
					
					<u-form-item label="性别: " prop="sex" borderBottom @click="pickerShow(10)" ref="item1">
						<u--input v-model="customerUploadForm.sex" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="区域: " prop="region" borderBottom  ref="item1">
						<uni-combox style="width: 100%;padding: 0;" v-model="customerUploadForm.region" :border="false"  :candidates="pickerDict[3][0]" placeholder="请选择所在区域"></uni-combox>
					</u-form-item>
					<u-form-item label="小区: " prop="homeName" borderBottom  ref="item1">
						<uni-combox style="width: 100%;padding: 0;" v-model="customerUploadForm.homeName" :border="false"  :candidates="pickerDict[14][0]" placeholder="请选择所在小区"></uni-combox>
					</u-form-item>
					
					<u-form-item label="总价: " prop="allPrice" borderBottom @click="pickerShow(1)" ref="item1">
						<u--input v-model="customerUploadForm.allPrice" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="面积: " prop="area" borderBottom @click="pickerShow(13)" ref="item1">
						<u--input v-model="customerUploadForm.area" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="首付: " prop="onePay" borderBottom @click="pickerShow(2)" ref="item1">
						<u--input v-model="customerUploadForm.onePay" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					
					<u-form-item label="户型: " prop="homeType" borderBottom @click="pickerShow(6)" ref="item1">
						<u--input v-model="customerUploadForm.homeType" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="步梯/电梯: " prop="elevator" borderBottom @click="pickerShow(8)" ref="item1">
						<u--input v-model="customerUploadForm.elevator" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="朝向: " prop="towards" borderBottom @click="pickerShow(7)" ref="item1">
						<u--input v-model="customerUploadForm.towards" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="装修现状: " prop="furnish" borderBottom @click="pickerShow(4)" ref="item1">
						<u--input v-model="customerUploadForm.furnish" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<view v-show="customerUploadForm.furnish === '毛坯房'?false:(customerUploadForm.furnish === '清水房'?false:true)">
						<u-form-item label="装修风格: " prop="furnishStyle" borderBottom @click="pickerShow(5)" ref="item1">
							<u--input v-model="customerUploadForm.furnishStyle" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
							<u-icon slot="right" name="arrow-down"></u-icon>
						</u-form-item>
						<u-form-item label="装修年限: " prop="furnishYear" borderBottom ref="item1">
							<u--input v-model="customerUploadForm.furnishYear" inputAlign="right"  border="none" placeholder="请输入装修年限"></u--input>
						</u-form-item>
					</view>
					<u-form-item label="支付方式: " prop="payType" borderBottom @click="pickerShow(9)" ref="item1">
						<u--input v-model="customerUploadForm.payType" inputAlign="right" disabled disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="忌讳楼层: "  prop="floor" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.floor" border="none" placeholder="请用逗号分隔" ></u--input>
					</u-form-item>
					<u-form-item label="备注: "  prop="note" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.note" border="none" placeholder="请输入备注" ></u--input>
					</u-form-item>
					<u-form-item label="到期时间: "  prop="expireDate" borderBottom ref="item1">
						<uni-datetime-picker style="margin-left: 210rpx;" :border="false" type="date"
							v-model="customerUploadForm.expireDate" />
						<!-- <u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="customerUploadForm.expireDate" border="none" placeholder="请输入到期时间" ></u--input> -->
					</u-form-item>
					<u-form-item label="附属设施: " prop="facility"  ref="item1">
					</u-form-item>
				</u--form>
				 
				 <view class="flex flex-wrap" >
				 	<button  :class="rSelect.indexOf(index)!=(-1)?'title':'title1'" style="text-align: center;background-color: #f0f0fc;margin: 20rpx 5rpx;width: 150rpx;height: 50rpx;font-size: 24rpx;"  v-for="(value,index) in infoArr" :key="index" @click="tapInfo(index)" >{{value.name}}</button>
				 </view>
				 
				<u-button
					type="primary"
					text="提交"
					customStyle="margin-top: 50px"
					@click="submit"
				></u-button>
				<u-button
					type="error"
					text="重置"
					customStyle="margin-top: 10px"
					@click="reset"
				></u-button>
				
				<u-picker
					:show="show"
					:columns="pickerChoose"
					@change="change"
					@cancel="cancel"
					@confirm="confirm"
					:defaultIndex="[0,0,0,0]"
				></u-picker>
			</view>

		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				rSelect: [],
				infoArr: [{ name: '平台' }, { name: '阁楼' }, { name: '院子' }, { name: '煤棚' }, { name: '车位' }, { name: '满五唯一' },
					{ name: '满二' }, { name: '幼儿园' }, { name: '小学' }, { name: '初中' }, { name: '高中' }, { name: '图书馆' }, { name: '体育馆' },
					{ name: '健身房' }, { name: '游泳馆' }, { name: '影视城' }, { name: '医院' }, { name: '银行' }, { name: '超市/商场' }, { name: '广场' },
					{ name: '公园' }, { name: '餐饮美食' }, { name: '菜市场' }, { name: '酒店' }, { name: '停车场' }, { name: '汽车站' }, { name: '火车站' },
					{ name: '高铁站' }, { name: '建材市场' }, { name: '物流中心' }, { name: '湖景房' }, { name: '河景房' }, { name: '事故房' }
				],
				// 客源上传前端字段
				customerUploadForm: {
					gongSiPan: '',
					name: '',
					phoneNum: '',
					sex: '',
					nameOne: '',
					phoneNumber: '',
					customerLever: '',
					purpose: '',
					region: '',
					elevator: '',
					homeName: '',
					allPrice: '',
					area: '',
					onePay: '',
					homeType: '',
					towards: '',
					furnish: '',
					furnishStyle: '',
					furnishYear: '',
					payType: '',
					floor: '',
					note: '',
					facility: '',
					expireDate: '',
				},
				show: false,
				pickerIndex: 0,
				pickerChoose: [],
				pickerValue: ['gongSiPan', 'allPrice', 'onePay', 'region', 'furnish', 'furnishStyle', 'homeType', 'towards', 'elevator', 'payType', 'sex', 'customerLever', 'purpose', 'area'],
				pickerDict: [
					[
						['公盘', '私盘'] 
					],
					[
						['20万以下', '21-30万', '31-40万', '41-50万', '51-60万', '61-70万', '71-80万', '80-100万', '101-130万', '131万以上']
					],
					[
						['5万以下', '5-10万', '10-15万', '15-20万', '20-25万', '25-30万', '30万以上']
					],
					[
						[]
					],
					[
						['毛坯房', '清水房', '简装房', '小精装房', '精装房', '豪装房', '全部', '无']
					],
					[
						[ '简单装修', '现代轻奢', '欧式风格', '中式风格', '工业风格', '无' ]
					],
					[
						['一室', '两室', '三室', '四室', '五室', '六室', '七室', '八室', '九室'],
						['无厅', '一厅', '两厅', '三厅', '四厅', '五厅', '六厅', '七厅', '八厅', '九厅'],
						['无厨', '一厨', '两厨', '三厨', '四厨', '五厨', '六厨', '七厨', '八厨', '九厨'],
						['无卫', '一卫', '两卫', '三卫', '四卫', '五卫', '六卫', '七卫', '八卫', '九卫']
					],
					[
						['东', '西', '南', '北', '南北', '东西']
					],
					[
						['电梯', '步梯']
					],
					[
						['全款', '按揭', '分期', '转按揭']
					],
					[
						['男', '女']
					],
					[
						['等级A', '等级B', '等级C'] 
					],
					[
						['就业', '就学', '婚房', '换房', '投资', '养老']
					],
					[
						['50㎡下', '51-70㎡', '71-90㎡', '91-100㎡', '101-110㎡', '111-120㎡', '121-130㎡', '131-150㎡', '151-180㎡', '181㎡以上'],
					],
					[
						[]
					]
				],
				rules: {
					gongSiPan: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					customerLever: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					prupose: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					name: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					phoneNum: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] },
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.mobile(value)
						}, message: '请输入正确的手机号', trigger: ['change', 'blur'], 
					}, ],
					// nameOne: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					// phoneNumber: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] },
					// 	{
					// 		validator: (rule, value, callback) => {
					// 			return uni.$u.test.mobile(value)
					// 	}, message: '请输入正确的手机号', trigger: ['change', 'blur'], 
					// }, ],
					sex: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					region: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					homeName: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					allPrice: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					area: [{ type: 'string', required: true, message: '未填', trigger: ['change', 'blur'] }],
					onePay: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					homeType: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					towards: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					furnish: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					// furnishStyle: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					// furnishYear: [{ required: true, message: '未填', trigger: ['change', 'blur'] },
					// {
					// 	validator: (rule, value, callback) => {
					// 			let furnishRegex = /^[12][0-9]{3}-[12][0-9]{3}$/
					// 			console.log(furnishRegex.test(value))
					// 			return furnishRegex.test(value)
					// 	}, message: '请输入四位年份范围，并以-号相连', trigger: ['change', 'blur'], 
					// }],
					payType: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					expireDate: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					elevator: [{ required: true, message: '未填', trigger: ['change', 'blur'] }],
					floor: [{ required: true, message: '未填', trigger: ['change', 'blur'] },
					{
						validator: (rule, value, callback) => {
								let floorRegex = /^(\d+,)*\d+$/
								return floorRegex.test(value)
						}, message: '请以英文逗号隔开,开头结尾不要出现逗号', trigger: ['change', 'blur'], 
					}, ],
				},
			}
		},
		onReady () {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.form2.setRules(this.rules)
		},
		async onLoad () {
			this.pickerDict[3][0] = []
			this.pickerDict[14][0] = []
			
			let { rows: list } = await uni.$u.api.housing.selectDistricList()
			list.forEach(item=>{
				this.pickerDict[3][0].push(item.distric)
			})
			console.log('商圈列表：', list)
			
			let { rows: list1 } = await uni.$u.api.housing.getHomeName()
			list1.forEach(item=>{
				this.pickerDict[14][0].push(item.name)
			})
			console.log('小区列表：', list1)
		},
		methods: {
			tapInfo (e) {
				if (this.rSelect.indexOf(e) === -1) {
					this.rSelect.push(e)// 选中添加到数组里
				} else {
					this.rSelect.splice(this.rSelect.indexOf(e), 1) // 取消
				}
				console.log(this.rSelect)
			},
			
			// picker控制
			pickerShow (index) {
				this.show = true
				this.pickerIndex = index
				this.pickerChoose = this.pickerDict[index]
				console.log(this.pickerIndex)
			},
			cancel (index) {
				this.show = false
			},
			change (e) {},
			confirm (e) {
				this.show = false
				console.log('e: ', e)
				if(this.pickerIndex === 6) {
					this.customerUploadForm[`${this.pickerValue[this.pickerIndex]}`] = e.value[0] + e.value[1] +e.value[2] + e.value[3]
				}else{
					this.customerUploadForm[`${this.pickerValue[this.pickerIndex]}`] = e.value[0]
				}
				console.log(e.value[0])
			},
			
			// 提交
			submit () {
				
				this.$refs.form2.validate().then(res => {
					uni.$u.toast('校验通过')
					console.log('提交的表单数据：', this.customerUploadForm)
					// 传入特殊需求
					for (var i = 0; i < this.rSelect.length; i++) {
						this.customerUploadForm.facility += this.infoArr[this.rSelect[i]].name+','
					}
					// 表单请求
					uni.$u.api.customer.customerUpload(this.customerUploadForm).then(res => {
						// 成功后清除表单
						if(res.code === 200) {
							this.clearForm()
							uni.showToast( { title: '上传成功' } )
						}
					})
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			reset () {
				// this.$refs.form2.clearValidate()
				this.clearForm()

			},
			clearForm () {
				this.$refs.form2.clearValidate()
				this.customerUploadForm = {}
				this.rSelect = []
				this.$set(this.customerUploadForm, 'expireDate', '')
				uni.$u.toast('已清空')
			}
		}
	}
</script>

<style lang="scss">
.title{
	color: red;
}
.title1{
	color: #000000;
}
</style>
