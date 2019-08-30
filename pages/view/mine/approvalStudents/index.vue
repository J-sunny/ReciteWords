<template>
	<view class="approvalStudents">
		<!-- 顶部 -->
		<view class="tasksHeadBox">
			<view class="tasksBoxHead">
				<!-- 返回按钮 -->
				<view class="arrow" @tap="goBack"></view>
				<!-- 标题 -->
				<view class="title">审批学生</view>
			</view>
			<!-- 未审批--已审批按钮 -->
			<view class="approvalNav">
				<view class="unapproval" @tap="change('unapproval')" :class="showPass=='unapproval'?'active':''">未审批</view>
				<view class="approved" @tap="change('approved')" :class="showPass=='approved'?'active':''">已审批</view>
			</view>
		</view>

		<!-- 内容 -->
		<view class="approvalCon">
			<!-- 框框 -->
			<!-- 已审批 -->
			<view class="frame" v-for="item in 10" :key='item' v-if="showPass=='unapproval'">
				<!-- 左边 -->
				<view class="frameLeft">
					<view class="studentName">张建科</view>
					<view class="stuName">年级：<label class="stuNames">2018级</label></view>
					<view class="stuName">学号：<label class="stuNames">20181227</label></view>
				</view>
				<!-- 右边通过、不通过按钮 -->
				<view class="frameRight">
					<label class="adopt">通过</label>
					<label class="noPassage">不通过</label>
				</view>
			</view>
			<!-- 未审批 -->
			<view class="frame" v-for="item in 10" :key='item' v-if="showPass=='approved'">
				<!-- 左边 -->
				<view class="frameLeft">
					<view class="studentName">张建科</view>
					<view class="stuName">年级：<label class="stuNames">2018级</label></view>
					<view class="stuName">学号：<label class="stuNames">20181227</label></view>
				</view>
				<!-- 右边通过、不通过按钮 -->
				<view class="frameRights">
					<view class="statused">已通过</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPass: 'unapproval'
			}
		},
		methods: {
			// 切换审批状态
			change(val) {
				this.showPass = val
			},

			// 返回
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		created() {

		}

	}
</script>

<style lang="scss">
	.approvalStudents {

		// 顶部
		.tasksHeadBox {
			position: fixed;
			top: 0;
			z-index: 100;
			background-color: #FBFBFB;
			width: 100%;

			.tasksBoxHead {
				width: 100%;
				height: 128rpx;
				background: rgba(255, 255, 255, 1);
				opacity: 1;
				text-align: center;
				overflow: hidden;
				// position: fixed;
				// top: 0;
				// left: 0;
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

			// 未审批--已审批按钮
			.approvalNav {
				text-align: center;
				line-height: 90rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 6rpx 24rpx rgba(201, 201, 201, 0.15);
				border-top: 2rpx solid #F0F0F0;
				overflow: hidden;
				font-size: 30rpx;
				font-weight: bold;
				color: rgba(92, 99, 113, 1);

				.unapproval {
					width: 375rpx;
					float: left;
				}

				.approved {
					width: 374rpx;
					border-left: 2rpx solid #F0F0F0;
					float: left;
				}

				.active {
					color: #FFBB00;
					border-bottom: 4rpx solid #FFBB00;
				}
			}
		}

		// 内容
		.approvalCon {
			padding: 0 40rpx 50rpx;
			box-sizing: border-box;

			// 框框
			// 已审批
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
				.frameRight {
					float: right;
					text-align: center;
					font-weight: 500;
					font-size: 30rpx;
					line-height: 52rpx;
					margin-top: 74rpx;

					.adopt {
						display: inline-block;
						width: 112rpx;
						height: 52rpx;
						background: linear-gradient(90deg, rgba(254, 201, 27, 1) 0%, rgba(255, 187, 0, 1) 100%);
						box-shadow: 0px 1px 6px rgba(255, 187, 0, 0.4);
						opacity: 1;
						border-radius: 40rpx;
						color: rgba(255, 255, 255, 1);
					}

					.noPassage {
						display: inline-block;
						color: #FE661C;
						width: 112rpx;
						height: 52rpx;
						background: rgba(255, 255, 255, 1);
						border: 2rpx solid rgba(254, 102, 28, 1);
						opacity: 1;
						border-radius: 40rpx;
						margin-left: 24rpx;
					}

				}

				// 已审批
				.frameRights {
					float: right;

					.statused {
						font-size: 30rpx;
						font-weight: 500;
						line-height: 202rpx;
						color: rgba(201, 201, 201, 1);
						opacity: 1;
					}
				}
			}

		}

	}
</style>
