<template>
	<view class="checkSelectBox" :class="shows==true?'tripList_root':''">
		<!-- 顶部 -->
		<view class="tasksHeadBox">
			<view class="tasksBoxHead">
				<!-- 返回按钮 -->
				<view class="arrow" @tap="goBack"></view>
				<!-- 标题 -->
				<view class="title">查看已选单词</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="selectCon">
			<!-- 选择班级 -->
			<view class="selectClass">
				<label class="classText">选择单词</label>
				<label class="selected">（已选<label class="yellowColor">4</label>个）</label>
				<label class="lookClass"></label>
				<!-- <uni-icon class='typeIcon' type="arrowright"></uni-icon> -->
			</view>
			<!-- 已选班级列表 -->
			<scroll-view class="selectedList">
				<label class="className">视觉传达301班</label>
				<label class="className">动画设计102班</label>
				<label class="className">艺术设计系动画设计艺术设计104班</label>
				<label class="className">视觉传达301班</label>
			</scroll-view>
			<!-- 已选单词 -->
			<view class="selectClass">
				<label class="classText">选择班级</label>
				<label class="selected">（已选<label class="yellowColor">4</label>个）</label>
			</view>
			<!-- 已选单词列表 -->
			<view class="checkedWordList">
				<van-checkbox-group :value="result" @change="onChanges()">
					<view class="checkedBox" v-for="(item , index2) in 5" :key="index2">
						<view class="box" :style="{height:'160rpx',padding:'40rpx 24rpx' ,'border-radius':'16rpx','margin-top':'32rpx',background:'#fff','box-sizing': 'border-box'}">
							<van-checkbox class="vanCheckBox" :name="item" checked-color="#FFBB00">
								<view class="words">
									<view for="" class="word">{{item}}</view>
									<view for="" class="Interpretation">n.同谋，从犯；附件</view>
								</view>
							</van-checkbox>
						</view>
					</view>
				</van-checkbox-group>

			</view>

		</view>
		<!-- 底部 发布-->
		<view class="allCheck">
			<label class="goBack" @tap="goBack()">
				返回
			</label>
			<label class="lookCheck" @tap="showBox()">
				{{fabu}}（共4个）
			</label>
		</view>

		<!-- 弹框 -->
		<view class="headPicPopup">
			<van-popup :show='shows' position="bottom" @close="onClose()">
				<scroll-view scroll-y='true' class="botBox">
					<van-checkbox-group :value=" results " @change="onChangess()">
						<van-checkbox v-for="item in 15" :key='item' checked-color="#FFBB00" :name="item">
							{{item}}艺术设计系动画设计艺术设计101班艺术设计系动画设计艺术设计101班
						</van-checkbox>
					</van-checkbox-group>
				</scroll-view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	import popupLayer from '../../../../components/popup-layer.vue'
	export default {
		data() {
			return {
				// 控制底部弹出框
				shows: false,
				fabu: '发布',
				result: [],
				results: []
			}
		},
		components: {
			popupLayer
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack({
					delta: 1,
				})
			},
			// 选择单词
			onChanges(event) {
				this.result = event.detail
				console.log(this.result)
			},
			// 选择班级
			onChangess(event) {
				console.log(event)
				this.results = event.detail
				console.log(this.results)
			},
			// 控制---底部弹出框
			onClose() {
				this.shows = false
				this.fabu = '发布'
			},
			showBox() {
				this.shows = true
				this.fabu = '确认'
			}
		}
	}
</script>

<style lang="scss">
	
	.tripList_root {
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: fixed !important;
		z-index: 0;
	}

	.checkSelectBox {
		position: relative;
		

.van-checkbox {
			height: 160rpx;
		}

		.word {
			font-size: 32rpx;
			font-weight: bold;
			color: rgba(46, 53, 72, 1);
			line-height: 40rpx;
		}

		.van-checkbox__icon-wrap {
			// margin-top: 20rpx;

		}


		.Interpretation {
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(151, 157, 171, 1);
			margin-top: 12rpx;
			line-height: 40rpx;
		}

		// 顶部
		.tasksHeadBox {
			// position: fixed;
			top: 0;
			z-index: 100;
			background-color: #FBFBFB;


			.tasksBoxHead {
				width: 100%;
				height: 128rpx;
				background: rgba(255, 255, 255, 1);
				opacity: 1;
				text-align: center;
				overflow: hidden;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 100;

				// 返回按钮
				.arrow {
					position: fixed;
					left: 40rpx;
					top: 73rpx;
					display: flex;
					width: 20rpx;
					height: 20rpx;
					border-left: 4rpx solid #000;
					border-top: 4rpx solid #000;
					transform: rotate(-45deg);
					z-index: 20;
				}

				// 标题
				.title {
					width: 100%;
					text-align: center;
					position: absolute;
					left: 0;
					top: 60rpx;
					font-size: 36rpx;
					font-weight: 800;
					opacity: 1;
					z-index: 15;
					color: rgba(35, 37, 42, 1);
				}
			}

		}

		// 内容
		.selectCon {
			padding: 0 32rpx;
			box-sizing: border-box;
			margin-top: 128rpx;

			// 选择班级
			.selectClass {
				width: 100%;
				margin-top: 40rpx;
				margin-bottom: 16rpx;

				.classText {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(46, 53, 72, 1);
				}

				.selected {
					font-size: 26rpx;
					font-weight: 500;
					color: rgba(92, 99, 113, 1);
				}

				.lookClass {
					float: right;
					display: flex;
					width: 16rpx;
					height: 16rpx;
					border-left: 2rpx solid #5C6371;
					border-top: 2rpx solid #5C6371;
					transform: rotate(135deg);
					z-index: 20;
					margin-top: 15rpx;
				}
			}

			// 已选班级列表
			.selectedList {
				width: 100%;
				background: rgba(255, 255, 255, 1);
				border-radius: 16rpx;
				padding-bottom: 32rpx;

				label {
					display: inline-block;
					height: 56rpx;
					line-height: 56rpx;
					background: rgba(243, 243, 244, 1);
					border-radius: 40rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: rgba(46, 53, 72, 1);
					margin-top: 32rpx;
					margin-left: 32rpx;
					padding: 0 32rpx;
				}
			}

			// 已选单词列表
			.checkedWordList {
				padding-bottom: 120rpx;

				.listCon {
					margin-top: 16rpx;
					width: 100%;
					height: 138rpx;
					background: rgba(255, 255, 255, 1);
					border-radius: 16rpx;
					padding: 24rpx;
					box-sizing: border-box;

					.listConRadio {
						// height: 100%;
						float: left;
						line-height: 90rpx;
					}

					.listConWord {
						float: left;
						margin-left: 24rpx;

						.word {
							font-size: 32rpx;
							font-weight: bold;
							color: rgba(46, 53, 72, 1);
						}

						.Interpretation {
							font-size: 24rpx;
							font-weight: 400;
							color: rgba(151, 157, 171, 1);
							margin-top: 12rpx;
						}
					}
				}
			}
		}

		// 底部发布
		.allCheck {
			padding: 0 32rpx;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 112rpx;
			background: #FFFFFF;
			box-shadow: 0px -6rpx 24rpx rgba(201, 201, 201, 1);
			opacity: 1;
			z-index: 99999999;

			.goBack {
				display: inline-block;
				width: 242rpx;
				height: 84rpx;
				background: rgba(235, 235, 236, 1);
				border-radius: 44rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: 400;
				line-height: 84rpx;
				color: rgba(92, 99, 113, 1);
				margin-top: 14rpx;
			}

			.lookCheck {
				display: inline-block;
				width: 396rpx;
				height: 84rpx;
				opacity: 1;
				border-radius: 44rpx;
				float: right;
				text-align: center;
				font-size: 32rpx;
				font-weight: 400;
				line-height: 84rpx;
				opacity: 1;
				margin-top: 14rpx;
				background: rgba(255, 187, 0, 1);
				color: rgba(255, 255, 255, 1);

			}


		}

		// 底部弹框
		
		.headPicPopup{
			.van-popup {							
			background-color:rgba(0,0,0,0.1) ;				
			}
		}


		.botBox {
			// position: fixed;
			// bottom: 112rpx;
			// left: 0;
			width: 100%;
			background: rgba(255, 255, 255, 1);
			// box-shadow: 0px -6px 40px rgba(201, 201, 201, 0.3);
			border-radius: 20rpx 20rpx 0px 0px;
			padding: 64rpx 32rpx 176rpx;
			box-sizing: border-box;
			line-height: 106rpx;
			overflow: hidden;
			height: 1000rpx;
			border-radius:20rpx 20rpx 0px 0px;
			
			
		
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:400;
			line-height:106rpx;
			color:rgba(46,53,72,1);
			opacity:1;

			.selectedName {
				background: rgba(255, 255, 255, 1);
				overflow: hidden;

				checkbox {
					margin-right: 24rpx;
					float: left;
				}

				label {
					display: inline-block;
					float: left;
					width: 80%;
					font-size: 30rpx;
					font-weight: 400;
					color: rgba(46, 53, 72, 1);
					overflow: hidden; //超出一行文字自动隐藏
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行
				}
			}
		}


	}
</style>
