<template>
	<view class="missionDetailsBox">
		<view class="headBox">
			<!-- 顶部背景图 -->
			<image class='site-img' src="../../../../static/images/BJ2.png" catchtap='navmap'></image>
			<!-- 返回按钮 -->
			<view class="arrow" @tap="goBack"></view>
			<!-- 标题 -->
			<view class="title">班级管理</view>
			<!-- 任务词汇量 -->
			<view class="taskVocabulary">
				<!-- 左边--任务词汇量 -->
				<view class="taskLeft">
					<view class='taskTitle' @click="changeRanking()">{{className}}</view>
					<view class='taskTime'><label>年级：</label>2016级</view>
					<view class='taskTime'><label>学生数量：</label>26个</view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="contentBox">
			<!-- 框框 -->
			<view class="frame" v-for="item in 10" :key='item'>
				<!-- 左边 -->
				<view class="frameLeft">
					<view class="studentName">张建科</view>
					<view class="stuName">年级：<label class="stuNames">2018级</label></view>
					<view class="stuName">学号：<label class="stuNames">20181227</label></view>
				</view>
				<!-- 右边查看详情按钮 -->
				<navigator class="frameRightBtn" url='../../home/details/studentDetails'>查看详情</navigator>
			</view>

		</view>

		<!-- 选择班级  弹出框 -->
		<van-popup :show="show" position="bottom" style="height: 356rpx">
			<van-picker show-toolbar title="选择班级" :columns="columns" @cancel="onCancel()" @confirm="onConfirm()" />
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: ['一班', '二班', '三班'],
				className:"一班"
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			// picker选择器
			onConfirm(event) {
					const {
						picker,
						value,
						index
					} = event.detail;
					console.log((`当前值：${value}, 当前索引：${index}`));
					this.show = false;
					this.className=value
				},
				onCancel() {
					this.show = false;
				},
				// 改变班级
				changeRanking() {
					console.log(222)
					this.show = true;
				},
		},
		created() {
			
		}

	}


	// uni.navigateBack({
	// 		// console.log(11);
	// 	delta: 1,
	// 	animationType: 'pop-out',
	// 	animationDuration: 200
	// });
</script>

<style lang="scss">
	.missionDetailsBox {
		position: relative;
		overflow: hidden;

		.headBox {
			position: fixed;
			top: 0;
			left: 0;
			overflow: hidden;
			height: 400rpx;
			width: 100%;
		}

		// 顶部背景图片
		.site-img {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			height: 288rpx;
			z-index: 10;
		}

		// 返回按钮
		.arrow {
			position: fixed;
			left: 40rpx;
			top: 73rpx;
			display: flex;
			width: 20rpx;
			height: 20rpx;
			border-left: 4rpx solid #fff;
			border-top: 4rpx solid #fff;
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
			color: rgba(255, 255, 255, 1);
			opacity: 1;
			z-index: 15;
		}

		// 任务词汇量
		.taskVocabulary {
			position: absolute;
			top: 130rpx;
			width: 100%;
			height: 334rpx;
			background-image: url('../../../../static/images/BJj2.png');
			z-index: 12;
			// right: 20rpx;
			background-size: 100% 100%;
			padding: 86rpx 72rpx 0;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;

			// 任务词汇量--左边
			.taskLeft {
				float: left;

				.taskTitle {
					font-size: 36rpx;
					font-weight: bold;
					color: rgba(46, 53, 72, 1);
					opacity: 1;
				}

				.taskTime {
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(151, 157, 171, 1);
					opacity: 1;
					margin-top: 16rpx;

					label {
						color: #2E3548;
					}
				}
			}

			// 右边查看排名按钮
			.viewBtn {
				width: 140rpx;
				height: 56rpx;
				float: right;
				line-height: 56rpx;
				background: linear-gradient(90deg, rgba(254, 201, 27, 1) 0%, rgba(255, 187, 0, 1) 100%);
				opacity: 1;
				border-radius: 40rpx;
				text-align: center;
				font-size: 24rpx;
				font-weight: 400;
				margin-top: 22rpx;
				color: rgba(255, 255, 255, 1);
			}
		}

		// 内容
		.contentBox {
			padding: 0 32rpx 50rpx;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			margin-top: 440rpx;


			// 框框
			.frame {
				width: 100%;
				height: 201rpx;
				background: rgba(255, 255, 255, 1);
				opacity: 1;
				border-radius: 16rpx;
				margin-top: 32rpx;
				padding: 0 32rpx;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;

				// 左边
				.frameLeft {
					float: left;

					.studentName {
						font-size: 30rpx;
						font-weight: bold;
						color: rgba(46, 53, 72, 1);
						margin-top: 32rpx;
					}

					.stuName {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(46, 53, 72, 1);
						opacity: 1;
						margin-top: 12rpx;

						.stuNames {
							font-size: 26rpx;
							font-weight: 400;
							color: rgba(151, 157, 171, 1);
							opacity: 1;
						}



					}

				}

				// 右边按钮
				.frameRightBtn {
					float: right;
					font-size: 26rpx;
					font-weight: 400;
					color: rgba(255, 187, 0, 1);
					opacity: 1;
					margin-top: 82rpx;
				}
			}

		}
	}
</style>
