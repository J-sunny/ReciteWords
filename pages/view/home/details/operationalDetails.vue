<template>
	<view class="missionDetailsBox">
		<view class="headBox">
			<!-- 顶部背景图 -->
			<image class='site-img' src="../../../../static/images/BJ2.png" catchtap='navmap'></image>
			<!-- 返回按钮 -->
			<view class="arrow" @tap="goBack"></view>
			<!-- 标题 -->
			<view class="title">任务详情</view>
			<!-- 任务词汇量 -->
			<view class="taskVocabulary">
				<!-- 左边--任务词汇量 -->
				<view class="taskLeft">
					<view class='taskTitle'>任务词汇量：<label class='yellowColor'>10个</label></view>
					<view class='taskTime'>7-10 15:00:00</view>
				</view>
				<!-- 右边查看排名 -->
				<navigator hover-class='none' class="viewBtn" url='ranking'>
					查看排名
				</navigator>
			</view>
		</view>

		<!-- 内容 -->
		<view class="contentBox">
			<!-- 班级 -->
			<view class="classMajor">
				班级：<label class='major'> XX专业XX系301班（ <label class='yellowColor'>0</label> /21人）</label>
			</view>
			<!-- 框框 -->
			<view class="frame" v-for="item in 10" :key='item'>
				<!-- 左边 -->
				<view class="frameLeft">
					<view class="stuName">姓名：<label class="stuNames">刘泽琪</label><label class="completionStatus do">已完成</label></view>
					<view class="stuName">学号：<label class="stuNames">20181227</label></view>
				</view>
				<!-- 右边查看详情按钮 -->
				<navigator hover-class='none' class="frameRightBtn" url='studentDetails'>查看详情</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			}
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

.headBox{
	position: fixed;
	top: 0;
	left: 0;
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
			height: 288rpx;
			background-image: url('../../../../static/images/BJ1.png');
			z-index: 12;
			// right: 20rpx;
			background-size: 100% 100%;
			padding: 86rpx 64rpx 0;
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
			margin-top: 400rpx;

			// 班级
			.classMajor {
				margin-top: 390rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: rgba(46, 53, 72, 1);

				.major {
					font-size: 26rpx;
					font-weight: 400;
				}
			}

			// 框框
			.frame {
				width: 100%;
				height: 160rpx;
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

					.stuName {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(46, 53, 72, 1);
						opacity: 1;
						margin-top: 30rpx;

						.stuNames {
							font-size: 26rpx;
							font-weight: 400;
							color: rgba(151, 157, 171, 1);
							opacity: 1;
						}

						// 完成状态
						.completionStatus {
							font-size: 22rpx;
							font-weight: 400;
							width: 84rpx;
							height: 40rpx;
							border-radius: 2px;
							display: inline-block;
							text-align: center;
							line-height: 40rpx;
							margin-left: 24rpx;
						}

						.completionStatus.do {
							color: rgba(255, 187, 0, 1);
							border: 1px solid rgba(255, 187, 0, 1);
						}

						.completionStatus.notDo {
							border: 1px solid rgba(201, 201, 201, 1);
							color: #C9C9C9;

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
					margin-top: 62rpx;
				}
			}

		}
	}
</style>
