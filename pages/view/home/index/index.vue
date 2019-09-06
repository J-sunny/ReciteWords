<template>
	<view class="bigBox">
		<!-- 顶部背景图片 -->
		<view class="boxfal">
			<image class='site-img' src="../../../../static/images/BJ.png" catchtap='navmap'></image>
			<!-- 标题 -->
			<view class="title">学英语</view>
			<!-- 日历 -->
			<view class="calendarBox">
				<view class="calendar">
					<uni-calendar :insert="true" :lunar="true" :selected="selected" :disable-before="false" @change="change" />
					<!-- <uni-calendar :selected="selected" :insert="true" :lunar="false" :disable-before="false" @change="change" /> -->
				</view>
			</view>
		</view>
		<!-- 词汇量 -->
		<view class="vocabularyBox" v-if="token">
			<view class="vocabulary" v-for="(item,index) in dayOfMissionList" :key="item.taskId">
				<!-- 左边 -->
				<view style="float: left;">
					<view class='vocTitle'>任务词汇量：<span class='yellowColor'>{{item.allWordCount}}个</span></view>
					<view class='vocClass'>{{item.className}}</view>
					<view class='vocData'>{{item.taskTime}}</view>
				</view>
				<!-- 右边   查看详情 -->
				<label hover-class='none' class='seeDetails' @click="linkTo(item.allWordCount,item.taskTime,item.taskId)">查看详情</label>
			</view>
		</view>
		<!-- 暂无任务 -->
		<view class="noTask" v-if="!token||dayOfMissionList.length==0">
			<image class="noTaskPic" src="../../../../static/images/noTaskTB.png" mode=""></image>
			<view class='noTaskTitle'>暂无任务</view>
			<view class='arrangement'>快去布置任务吧！</view>
		</view>
		<!-- 布置任务悬浮按钮 -->
		<navigator class="arrangementBtn" url='../arrangementTasks/index'>
			<image class="arrangementPic" src="../../../../static/images/ArrangementTB.png" mode=""></image>
			<view class='arrangementTitle'>布置任务</view>
		</navigator>
	</view>
</template>

<script>
	import
	uniCalendar
	from "../../../../components/uni-calendar/uni-calendar"
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				taskCalendarList: [],
				dayOfMissionList: [],
				year: '',
				month: '',
				day: '',
				token: '',
				selected: [{
					date: '2019-09-05'
				}]
			}
		},
		onShow() {
			this.token = uni.getStorageSync('token')
		},

		methods: {
			// 日历
			change(e) {
				console.log(e)
				this.year = e.year
				this.month = e.month
				this.day = e.date
				this.taskCalendar()
				console.log(2222)
				this.getDayOfMissionList()
			},
			// 获取任务日历数据
			taskCalendar() {
				this.$minApi.taskCalendar({
					year: this.year,
					month: this.month,
				}).then(data => {
					this.taskCalendarList = data.data
					console.log(data)
					let list = []
					if (data.data[0]) {
						data.data.forEach(item => {
							list.push({
								date: item.taskTime
							})
						})
						console.log(list)
						// this.selected = list
						this.selected = [{
							date: '2019-09-05'
						},
						{
							date: '2019-09-06'
						},
						{
							date: '2019-09-07'
						},
						{
							date: '2019-09-08'
						},
						{
							date: '2019-09-09'
						},
						{
							date: '2019-09-10'
						},
						{
							date: '2019-09-15'
						},
						{
							date: '2019-09-17'
						},
						{
							date: '2019-09-19'
						},
						{
							date: '2019-09-20'
						},
						{
							date: '2019-09-26'
						},
						{
							date: '2019-09-28'
						},
						{
							date: '2019-09-29'
						},
						{
							date: '2019-08-29'
						},
						{
							date: '2019-08-22'
						},
						{
							date: '2019-08-20'
						},
						{
							date: '2019-08-23'
						},
						]
						console.log(this.selected)						
					}
				})

			},
			// 单日任务详情列表
			getDayOfMissionList() {
				this.$minApi.dayOfMissionList({
					month: this.month,
					year: this.year,
					day: this.day,
				}, ).then(data => {
					this.dayOfMissionList = data.data
					console.log(data)
				}).catch(err => {
					// console.log(err)
				})
			},
			// 页面跳转
			linkTo(allWordCount, taskTime, taskId) {
				uni.navigateTo({
					url: '../details/operationalDetails?taskId=' + taskId + '&allWordCount=' + allWordCount + '&taskTime=' +
						taskTime
				})
			}
		},


	};
</script>

<style lang="scss">

	// 大盒子
	.bigBox {
		position: relative;

		// 顶部背景图片
		.site-img {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			height: 376rpx
		}

		// 标题和日历
		.boxfal {
			overflow: hidden;

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
				// display: inline-block;
				// height: 60rpx;
				// line-height: 60rpx;
				// background-color:#FFBB00 ;
				// z-index: 999999;
			}

			// 日历
			.calendarBox {
				width: 100%;
				position: relative;
				z-index: 10;
				margin-top: 160rpx;

				.calendar {
					padding: 32rpx;
					box-sizing: border-box;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 8rpx 36rpx rgba(201, 201, 201, 0.15);
					opacity: 1;
					border-radius: 28rpx;
					margin: 0 32rpx;
				}
			}

		}


		// 词汇量
		.vocabularyBox {
			font-family: PingFang SC;
			padding: 0 40rpx;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;

			// 左边
			.vocabulary {
				width: 670rpx;
				height: 208rpx;
				background: rgba(255, 255, 255, 1);
				opacity: 1;
				border-radius: 32rpx;
				margin: 40rpx auto 0;
				padding: 32rpx 40rpx;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				float: left;

				.vocTitle {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(46, 53, 72, 1);
					opacity: 1;
				}

				.vocClass,
				.vocData {
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(151, 157, 171, 1);
					opacity: 1;
					margin-top: 16rpx;
				}
			}

			// 右边---查看详情
			.seeDetails {
				float: right;
				width: 136rpx;
				height: 56rpx;
				border: 2rpx solid rgba(255, 187, 0, 1);
				opacity: 1;
				border-radius: 40rpx;
				font-size: 24rpx;
				font-weight: 400;
				line-height: 56rpx;
				color: rgba(255, 187, 0, 1);
				opacity: 1;
				text-align: center;
				margin-top: 44rpx;
			}
		}

		// 暂无任务
		.noTask {
			font-family: PingFang SC;
			text-align: center;

			.noTaskPic {
				width: 224rpx;
				height: 160rpx;
				margin: 64rpx auto 24rpx;
			}

			.noTaskTitle {
				font-size: 32rpx;
				font-weight: 400;
				color: rgba(46, 53, 72, 1);
				opacity: 1;
			}

			.arrangement {
				font-size: 24rpx;
				font-weight: 500;
				color: rgba(201, 201, 201, 1);
				opacity: 1;
				margin-top: 8rpx;
				margin-bottom: 100rpx;
			}
		}

		// 布置任务悬浮按钮
		.arrangementBtn {
			position: fixed;
			bottom: 188rpx;
			right: 32rpx;
			text-align: center;
			width: 120rpx;
			height: 120rpx;
			background: linear-gradient(180deg, rgba(254, 201, 27, 1) 0%, rgba(255, 187, 0, 1) 100%);
			box-shadow: 0px 6rpx 36rpx rgba(255, 187, 0, 0.4);
			border-radius: 50%;
			opacity: 1;
			z-index: 999;

			.arrangementPic {
				width: 40rpx;
				height: 40rpx;
				margin: 22rpx auto 0rpx;
			}

			.arrangementTitle {
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				opacity: 1;
			}
		}
	}
</style>
