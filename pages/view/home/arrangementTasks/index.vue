<template>
	<!-- 布置任务 -->
	<view class="arrangementTasksBox">
		<view class="tasksHeadBox">
			<!-- 顶部 -->
			<view class="tasksBoxHead">
				<!-- 返回按钮 -->
				<view class="arrow" @tap="goBack"></view>
				<!-- 标题 -->
				<view class="title">布置任务</view>
			</view>
			<!-- tab -->
			<view class="lesson">
				<!-- 按课程选择 -->
				<view class="byCourse mr" @tap="show='course'" :class="show=='course'?'byCourseBorder':''">
					<image class="byCoursePic" src="../../../../static/images/lesson.png" mode=""></image>
					<label class="byCourseTxt" for="">按课程选择</label>
				</view>
				<!-- 按字母选择 -->
				<view class="byCourse" @tap="show='word'" :class="show=='word'?'byCourseBorder':''">
					<image class="byCoursePic" src="../../../../static/images/zimu.png" mode=""></image>
					<label class="byCourseTxt" for="">按字母选择</label>
				</view>
			</view>

		</view>
		<!-- 内容 -->
		<view class="contentBox">
			<!-- 按课程 -->
			<byCourse v-if="show=='course'"></byCourse>
			<!-- 按字母 -->
			<buLetter v-if="show=='word'"></buLetter>
		</view>
	</view>
</template>

<script>
	import byCourse from '../../../component/byCourse/index.vue'
	import buLetter from '../../../component/byLetter/index.vue'

	export default {
		data() {
			return {
				show: 'course'
			}
		},
		components: {
			byCourse,
			buLetter
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 切换选择类型
			changeType() {

			},
		},
	}

</script>

<style lang="scss">
	.arrangementTasksBox {
		.tasksHeadBox {
			position: fixed;
			top:0;
			z-index: 100;
			background-color: #FBFBFB;
		}

		// 顶部
		.tasksBoxHead {
			width: 100%;
			height: 128rpx;
			background: rgba(255, 255, 255, 1);
			opacity: 1;
			text-align: center;
			overflow: hidden;
			position: relative;

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

		// tab
		.lesson {
			padding: 0 32rpx;
			box-sizing: border-box;
			margin-top: 24rpx;
			overflow: hidden;
			margin-bottom: 24rpx;

			.mr {
				margin-right: 31rpx;
			}

			.byCourseBorder {
				border: 2px solid rgba(255, 187, 0, 0.30196078431372547);
				box-shadow: 0px 6rpx 12rpx rgba(255, 187, 0, 0.1);
			}

			.byCourse {
				width: 320rpx;
				height: 112rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 6rpx 12rpx rgba(201, 201, 201, 0.15);
				opacity: 1;
				border-radius: 16px;
				line-height: 112rpx;
				text-align: center;
				float: left;

				.byCoursePic {
					width: 54rpx;
					height: 56rpx;
					vertical-align: middle;
					margin-right: 12rpx;
				}

				.byCourseTxt {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(46, 53, 72, 1);
				}
			}
		}

		// 内容
		.contentBox {
			margin-top: 24rpx;
		}
	}
</style>
