<template>
	<view class="u-page" style="background-color: #ecf8ff;">
		<view class="" v-show="false">
			{{listenChange}}
		</view>
		<view class="u-demo-block padding-left-xl padding-right-xl padding-top">
			<text class="u-demo-block__title m-text-32" style="color: #1f5c99;font-weight: 700;">房屋基本信息</text>
			<view class="u-page__line-item margin-top">
				<u-line color="#d2e1ea"></u-line>
			</view>
			
			<!-- 图片上传 -->
			<view class="flex">
				<u-upload :style="fileList.length!=0? 'margin-left: 70rpx;':'margin-left: 250rpx;'" :fileList="fileList"
					@afterRead="afterRead" @delete="deletePic" multiple :maxCount="9">
					<image :src="this.GLOBLE.imgURL+'/broker/homeUpload/upload.png'" mode="widthFix"
						style="width: 170rpx;height: 170rpx;"></image>
				</u-upload>
			</view>
			
			<!-- 中间表单 -->
			<view>
				<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
				<!-- <u--form labelPosition="left" :model="  homeUploadForm" ref="form1" labelAlign="right" labelWidth="160rpx" errorType="border-bottom"> -->
				<u--form labelPosition="left" :model="homeUploadForm" ref="form1" labelAlign="right"
					labelWidth="160rpx">

					<u-form-item label="房东1姓名: " prop="name" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="homeUploadForm.name"
							border="none" placeholder="请输入房东1姓名"></u--input>
					</u-form-item>

					<u-form-item label="房东1电话: " prop="phoneNum" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right"
							v-model="homeUploadForm.phoneNum" border="none" placeholder="请输入房东1电话"></u--input>
					</u-form-item>

					<u-form-item label="房东2姓名: " prop="nameOne" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="homeUploadForm.nameOne"
							border="none" placeholder="请输入房东2姓名"></u--input>
					</u-form-item>

					<u-form-item label="房东2电话: " prop="phoneNumber" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right"
							v-model="homeUploadForm.phoneNumber" border="none" placeholder="请输入房东2电话"></u--input>
					</u-form-item>

					<u-form-item label="小区名称: " prop="homeName" borderBottom ref="item1">
						<uni-combox style="width: 100%;padding: 0;"
							@input="selectHomeName()" v-model="homeUploadForm.homeName"
							:border="false" :candidates="pickerDict[7][0]" placeholder="请选择所在小区"></uni-combox>
					</u-form-item>

					<u-form-item label="区域: " prop="region" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" disabled disabledColor="#ecf8ff" v-model="homeUploadForm.region" border="none"></u--input>
					</u-form-item>

					<view class="flex solid-bottom">
						<u-form-item style="padding-left: 80rpx;" labelWidth="80rpx" label="栋座: " prop="build"
							ref="item1">
							<u--input style="width: 50rpx;" v-model="homeUploadForm.build" border="none"></u--input>
						</u-form-item>
						<u-form-item labelWidth="80rpx" label="单元: " prop="unit" ref="item1">
							<u--input style="width: 50rpx;" v-model="homeUploadForm.unit" border="none"></u--input>
						</u-form-item>
						<u-form-item labelWidth="80rpx" label="楼层: " prop="floor" ref="item1">
							<u--input style="width: 50rpx;" v-model="homeUploadForm.floor" border="none"></u--input>
						</u-form-item>
						<u-form-item labelWidth="80rpx" label="房号: " prop="roomId" ref="item1">
							<u--input style="width: 80rpx;" v-model="homeUploadForm.roomId" border="none"></u--input>
						</u-form-item>
					</view>

					<u-form-item label="房源等级: " prop="homeLevel" borderBottom @click="pickerShow(0)" ref="item1">
						<u--input v-model="homeUploadForm.homeLevel" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>

					<u-form-item label="支付方式: " prop="payType" borderBottom @click="pickerShow(5)" ref="item1">
						<u--input v-model="homeUploadForm.payType" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>

					<u-form-item label="产证面积: " prop="area" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="homeUploadForm.area"
							border="none" placeholder="请输入产证面积"></u--input>
						<text>m²</text>
					</u-form-item>

					<u-form-item label="总价: " prop="allPrice" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right"
							v-model="homeUploadForm.allPrice" border="none" placeholder="请输入总价"></u--input>
						<text>万</text>
					</u-form-item>
					<u-form-item label="首付: " prop="onePay" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right"
							v-model="homeUploadForm.onePay" border="none" disabled disabledColor="#ecf8ff" placeholder="首付计算值"></u--input>
						<text>万</text>
					</u-form-item>
					
					<u-form-item label="产证地址: " prop="location" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right"
							v-model="homeUploadForm.location" border="none" placeholder="请输入产证地址"></u--input>
					</u-form-item>

					<u-form-item label="户型: " prop="homeType" borderBottom @click="pickerShow(1)" ref="item1">
						<u--input v-model="homeUploadForm.homeType" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>

					<u-form-item label="朝向: " prop="towards" borderBottom @click="pickerShow(4)" ref="item1">
						<u--input v-model="homeUploadForm.towards" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>

					<u-form-item label="电梯/步梯: " prop="elevator" borderBottom @click="pickerShow(8)" ref="item1">
						<u--input v-model="homeUploadForm.elevator" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>

					<u-form-item label="装修现状: " prop="furnish" borderBottom @click="pickerShow(3)" ref="item1">
						<u--input v-model="homeUploadForm.furnish" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<view v-show="homeUploadForm.furnish === '毛坯房'?false:(homeUploadForm.furnish === '清水房'?false:true)">
						<u-form-item label="装修风格: " prop="furnishStyle" borderBottom @click="pickerShow(2)" ref="item1">
							<u--input v-model="homeUploadForm.furnishStyle" inputAlign="right" disabled
								disabledColor="#ecf8ff" border="none"></u--input>
							<u-icon slot="right" name="arrow-down"></u-icon>
						</u-form-item>
						<u-form-item label="装修价格: " prop="furnishAmount" borderBottom ref="item1">
							<u--input style="background-color: #ecf8ff;" inputAlign="right"
								v-model="homeUploadForm.furnishAmount" border="none" placeholder="请输入装修价格"></u--input>
							<text>万</text>
						</u-form-item>
						<u-form-item label="装修时间: " prop="furnishTime" borderBottom ref="item1">
							<uni-datetime-picker style="margin-left: 210rpx;" :border="false" type="date"
								v-model="homeUploadForm.furnishTime" />
						</u-form-item>
					</view>
					<u-form-item label="产权性质: " prop="property" borderBottom @click="pickerShow(6)" ref="item1">
						<u--input v-model="homeUploadForm.property" inputAlign="right" disabled disabledColor="#ecf8ff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="产权类型: " prop="propertyType" borderBottom @click="pickerShow(9)" ref="item1">
						<u--input v-model="homeUploadForm.propertyType" inputAlign="right" disabled
							disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="产证状态: " prop="productStatus" borderBottom @click="pickerShow(10)" ref="item1">
						<u--input v-model="homeUploadForm.productStatus" inputAlign="right" disabled
							disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="房屋现状: " prop="currentStatus" borderBottom @click="pickerShow(11)" ref="item1">
						<u--input v-model="homeUploadForm.currentStatus" inputAlign="right" disabled
							disabledColor="#ecf8ff" border="none"></u--input>
						<u-icon slot="right" name="arrow-down"></u-icon>
					</u-form-item>
					<u-form-item label="备注: " prop="note" borderBottom ref="item1">
						<u--input style="background-color: #ecf8ff;" inputAlign="right" v-model="homeUploadForm.note"
							border="none" placeholder="请输入需求"></u--input>
					</u-form-item>

					<u-form-item label="附属设施: " prop="facility" ref="item1"/>
				</u--form>

				<view class="flex flex-wrap">
					<button :class="rSelect.indexOf(index)!=(-1)?'title':'title1'"
						style="text-align: center;background-color: #f0f0fc;margin: 20rpx 5rpx;width: 150rpx;height: 50rpx;font-size: 24rpx;"
						v-for="(value,index) in infoArr" :key="index" @click="tapInfo(index)">{{value.name}}</button>
				</view>

				<u-button type="primary" text="提交" customStyle="margin-top: 50px" @click="submit" :loading="loading"
					loadingMode="circle" loadingText="提交中..."></u-button>
				<u-button type="error" text="重置" customStyle="margin-top: 10px" @click="reset"></u-button>


				<u-picker :show="show" :columns="pickerChoose" @change="change" @cancel="cancel" @confirm="confirm" :defaultIndex="[0,0,0,0]"></u-picker>
			</view>

		</view>

		<u-popup :show="loading" :round="10" mode="center" :closeOnClickOverlay="false" bgColor="transparent">
			<view class="u-popup-slot flex-column" style="width: 250rpx;height: 250rpx;line-height: 300rpx;">
				<u-loading-icon show text="提交中" textSize="18"></u-loading-icon>
			</view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		data ( ) {
			return {
				loading: false,
				// 特殊需求
				rSelect: [ ],
				infoArr: [{ name: '平台' }, { name: '阁楼' }, { name: '院子' }, { name: '煤棚' }, { name: '车位' }, { name: '满五唯一' },
					{ name: '满二' }, { name: '幼儿园' }, { name: '小学' }, { name: '初中' }, { name: '高中' }, { name: '图书馆' }, { name: '体育馆' },
					{ name: '健身房' }, { name: '游泳馆' }, { name: '影视城' }, { name: '医院' }, { name: '银行' }, { name: '超市/商场' }, { name: '广场' },
					{ name: '公园' }, { name: '餐饮美食' }, { name: '菜市场' }, { name: '酒店' }, { name: '停车场' }, { name: '汽车站' }, { name: '火车站' },
					{ name: '高铁站' }, { name: '建材市场' }, { name: '物流中心' }, { name: '湖景房' }, { name: '河景房' }, { name: '事故房' }
				],
				// 图片上传
				fileList: [ ],
				// 房源上传前端字段
				homeUploadForm: {
					name: '', // 房东1
					phoneNum: '', // 房东1电话
					homeName: '', // 小区名称
					payType: '', // 支付方式
					area: '', // 产证面积
					allPrice: '', // 总价
					onePay: '',
					homeType: '', // 户型
					towards: '', // 朝向
					elevator: '', // 有无电梯
					furnish: '', // 装修
					productStatus: '', // 产证状态
					note: '', // 备注
					facility: '', // 附属设施
					build: '', // 楼栋
					unit: '', // 单元
					floor: '', // 层
					roomId: '', // 房号
					picOne: '', // 

					name_one: '', // 房东2
					phoneNumber: '', // 房东2电话
					region: '', // 区域
					homeLevel: '', // 房源等级
					location: '', // 产证地址
					furnishStyle: '', // 装修风格
					furnishAmount: '', // 装修金额
					furnishTime: '', // 装修时间
					property: '', // 产权性质
					propertyType: '', // 产权类型
					currentStatus: '', // 房屋现状
				},
				show: false,
				pickerIndex: 0,
				pickerChoose: [ ],
				pickerValue: [ 'homeLevel', 'homeType', 'furnishStyle', 'furnish', 'towards', 'payType', 'property', 'homeName', 'elevator', 'propertyType', 'productStatus', 'currentStatus'],
				pickerDict: [
					[
						[ '等级A', '等级B', '等级C' ]
					],
					[
						[ '一室', '两室', '三室', '四室', '五室', '六室', '七室', '八室', '九室' ],
						[ '无厅', '一厅', '两厅', '三厅', '四厅', '五厅', '六厅', '七厅', '八厅', '九厅' ],
						[ '无厨', '一厨', '两厨', '三厨', '四厨', '五厨', '六厨', '七厨', '八厨', '九厨' ],
						[ '无卫', '一卫', '两卫', '三卫', '四卫', '五卫', '六卫', '七卫', '八卫', '九卫' ]
					],
					[
						[ '简单装修', '现代轻奢', '欧式风格', '中式风格', '工业风格', '无' ]
					],
					[
						[ '毛坯房', '清水房', '简装房', '小精装房', '精装房', '豪装房' ]
					],
					[
						[ '东', '西', '南', '北', '南北', '东西' ]
					],
					[
						[ '全款', '按揭', '分期', '转按揭' ]
					],
					[
						[ '出让/市场化商品房', '单位集资建房', '安置房', '廉租房', '经济适用房', '自建房', '其他' ]
					],
					[
						[ ]
					],
					[
						[ '电梯', '步梯', '无' ]
					],
					[
						[ '高层', '小高层', '复式', '多层', '洋楼', '别墅', '写字楼', '商铺', '其他' ]
					],
					[
						[ '有', '无' ]
					],
					[
						['空置', '租赁', '自用' ]
					]
				],
				caculator: {
					loanValue: 0,
					bankValue: 0,
				},
				housing: {},
				// 验证规则
				rules: {
					name: [ { type: 'string', required: true, message: '请填写房东1姓名', trigger: [ 'change', 'blur' ] } ], // 房东1姓名
					phoneNum: [ { type: 'string', required: true, message: '请填写电话号码', trigger: [ 'change', 'blur' ] },
						{
							validator: ( rule, value, callback ) => {
								return uni.$u.test.mobile( value )
							},
							message: '请输入正确的手机号',
							trigger: [ 'change', 'blur' ]
						},
					],
					homeName: [ { type: 'string', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 小区名称
					region: [ { type: 'string', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 区域
					build: [ { type: 'string', required: true, message: '*', trigger: [ 'change', 'blur' ] } ], // 栋座
					unit: [ { type: 'string', required: true, message: '*', trigger: [ 'change', 'blur' ] } ], // 单元
					floor: [ { type: 'number', required: true, message: '*', trigger: [ 'change', 'blur' ] } ], // 层数
					roomId: [ { type: 'string', required: true, message: '*', trigger: [ 'change', 'blur' ] } ], // 房号
					homeLevel: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 房屋等级
					payType: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 支付方式
					area: [ { type: 'number', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 面积
					allPrice: [ { type: 'number', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 总价
					location: [ { type: 'string', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 产证地址
					homeType: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 户型
					towards: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 朝向
					elevator: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 电梯/步梯
					furnish: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 装修现状
					// furnishStyle: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 装修风格
					// furnishAmount: [ { type: 'number', required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 装修价格
					// furnishTime: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 装修时间
					property: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 产权性质
					propertyType: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 产权类型
					productStatus: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 产证状态
					currentStatus: [ { required: true, message: '未填', trigger: [ 'change', 'blur' ] } ], // 房屋现状
					picOne: [ { required: true, message: '至少上传一张图片', trigger: [ 'change', 'blur' ] } ], // 图片上传
				},
			}
		},
		onReady ( ) {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.form1.setRules( this.rules )
		},
		async onLoad ( ) {
			console.log('0.00-null-null: ', 0.00-null-null)
			// 清空小区列表
			this.pickerDict[ 7 ][ 0 ] = [ ]
			// 请求新的小区列表
			const { rows: list } = await uni.$u.api.housing.getHomeName( )
			this.housing = list
			list.forEach( item => {
				this.pickerDict[ 7 ][ 0 ].push( item.name )
			} )
			console.log('小区列表长度：', list.length)
		},
		computed: {
			listenChange ( ) {
				let _this = this
				_this.homeUploadForm.onePay = ( Number( this.homeUploadForm.allPrice ) - parseInt( Number( this.homeUploadForm.area ) * this.caculator.loanValue * this.caculator.bankValue * 0.000001 ) ).toFixed( 2 )
				console.log('首付：', _this.homeUploadForm.onePay )
				return _this.homeUploadForm.onePay
			}
		},
		methods: {
			tapInfo ( e ) {
				if ( this.rSelect.indexOf( e ) === -1 ) {
					this.rSelect.push( e ) // 选中添加到数组里
				} else {
					this.rSelect.splice( this.rSelect.indexOf( e ), 1 ) // 取消
				}
				console.log('选择的附属设施：', this.rSelect )
			},

			selectHomeName ( e ) {
				this.$u.debounce(() => {
					console.log('我是节流')
					console.log('小区名称: ', this.homeUploadForm.homeName )
					uni.$u.api.housing.getHomeName( { params: { name: this.homeUploadForm.homeName } } ).then( res => {
						// 获取银行评估值 和 面积单价
						this.caculator.loanValue = res.rows[ 0 ].loanValue
						this.caculator.bankValue = res.rows[ 0 ].bankValue
						this.homeUploadForm.region = res.rows[0].distric
						console.log( '首付计算属性: ', this.caculator )
						console.log( '区域: ', this.homeUploadForm.region )
					} )
				}, 3000)
			},

			pickerShow ( index ) {
				this.show = true
				this.pickerIndex = index
				this.pickerChoose = this.pickerDict[ index ]
				console.log( 'this.pickerChoose: ', this.pickerChoose )
			},

			cancel ( index ) {
				this.show = false
			},

			change ( ) {},

			confirm ( e ) {
				this.show = false
				if ( this.pickerIndex === 1 ) {
					this.homeUploadForm[ `${this.pickerValue[this.pickerIndex]}` ] = '' + e.value[ 0 ] + e.value[ 1 ] + e.value[ 2 ] + e.value[ 3 ]
				} else {
					this.homeUploadForm[ `${this.pickerValue[this.pickerIndex]}` ] = '' + e.value[ 0 ]
				}
			},

			async submit ( ) {
				this.loading = true
				// 图片上传并且获取地址 存放在picOne中
				for ( let i = 0; i < this.fileList.length; i++ ) {
					this.fileList.splice( i, 1, Object.assign( this.fileList[ i ], {
						status: 'uploading',
						message: '上传中',
					} ) )
					const result = await this.uploadFilePromise( this.fileList[ i ].url )
					this.fileList.splice( i, 1, Object.assign( this.fileList[ i ], {
						status: 'success',
						message: '',
						url: result.url,
					} ) )
					this.homeUploadForm.picOne += this.fileList[ i ].url + ','
				}
				console.log('上传图片列表：', this.homeUploadForm.picOne)
				if(this.homeUploadForm.picOne === '') {
					this.$u.toast('图片至少上传一张')
					this.loading = false
					return new Error('图片至少上传一张')
				}
				
				this.$refs.form1.validate( ).then(res => {
					// 获取特殊需求
					console.log( this.rSelect )
					this.homeUploadForm.facility = ''
					for ( var i = 0; i < this.rSelect.length; i++ ) {
						this.homeUploadForm.facility += this.infoArr[ this.rSelect[ i ] ].name + ','
					};
					console.log('提交的表单房源：', this.homeUploadForm )
					// 表单上传
					this.$u.api.home.homeUpload( this.homeUploadForm ).then( res => {
						this.loading = false
						if ( res.code === 200 ) {
							this.fileList = [ ]
							this.rSelect = [ ]
							this.clearForm()
							uni.showToast( { title: '上传成功' } )
						}
					} ).catch( err => {
						this.loading = false
						uni.$u.toast(err )
						console.log( '上传出错：', err )
					} )
				} ).catch( errors => {
					console.log(errors)
					uni.$u.toast( '校验失败' )
				} )
			},
			
			reset ( ) {
				this.$refs.form1.clearValidate( )
				this.clearForm()
			},

			deletePic ( event ) {
				this.fileList.splice( event.index, 1 )
				console.log('待上传的图片：', this.fileList )
			},

			// 新增图片
			async afterRead ( event ) {
				this.fileList = this.fileList.concat( event.file )
				console.log('待上传的图片：', this.fileList )
			},

			uploadFilePromise ( url ) {
				return new Promise( ( resolve, reject ) => {
					this.$u.api.home.imageUpload( {
						filePath: url,
						name: 'file',
						custom: { catch: false },
					} ).then( res => {
						setTimeout( ( ) => {
							resolve( res )
						}, 1000 )
					} ).catch( err => {
						console.log( 'catch:' + err )
					} )
				} )
			},
			clearForm ( ) {
				this.rSelect = [ ]
				this.fileList = [ ]
				this.homeUploadForm = {}
				// 防止parseInt解析不了空值
				this.$set(this.homeUploadForm, 'area', 0.00)
				this.$set(this.homeUploadForm, 'allPrice', 0.00)
				this.$set(this.homeUploadForm, 'furnishTime', '')
				console.log(this.caculator)
				uni.$u.toast( '已清空' )
				console.log('房源上传表单: ', this.homeUploadForm)
			}
		},
	}
</script>

<style lang="scss">
	.title {
		color: red;
	}

	.title1 {
		color: #000000;
	}

	.u-popup-slot {
		width: 200px;
		height: 150px;
		@include flex;
		justify-content: center;
		align-items: center;
	}
</style>
