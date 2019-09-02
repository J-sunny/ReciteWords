<template>
	<view class="stuDetailsBox">
		<!-- 顶部背景图 -->
		<image class='site-img' src="../../../../static/images/BJ.png" catchtap='navmap'></image>
		<!-- 返回按钮 -->
		<view class="arrow" bindtap="goBack" @tap="goBack"></view>
		<!-- 标题 -->
		<view class="title">学生学习详情</view>
		<!-- 头像 -->
		<view class="touBox">
			<view class="touXiang">
				<image src="../../../../static/images/touXiang%20(1).png"></image>
			</view>
			<view class="touName">武蒙蒙·20190112</view>
		</view>
		<!-- 主体内容 -->
		<view class="conBox">
			<!-- 总列表 -->
			<view class="stuList">
				<!--  -->
				<view class="toDay">
					<view class="dayTitle">
						<image class="titleIcon" src="../../../../static/images/today.png"></image>今日学习
					</view>
					<view class="dayNum"><label class="bigFont">2</label>词</view>
				</view>
				<view class="toDay">
					<view class="dayTitle">
						<image class="titleIcon" src="../../../../static/images/Cumulative.png"></image>累计学习
					</view>
					<view class="dayNum"><label class="bigFont">2</label>词</view>
				</view>
				<view class="toDay">
					<view class="dayTitle">
						<image class="titleIcon" src="../../../../static/images/Duration.png"></image>今日学习时长
					</view>
					<view class="dayNum"><label class="bigFont">2</label>词</view>
				</view>
				<view class="toDay">
					<view class="dayTitle">
						<image class="titleIcon" src="../../../../static/images/Cumulativelength.png"></image>累计学习时长
					</view>
					<view class="dayNum"><label class="bigFont">2</label>词</view>
				</view>
			</view>
			<!-- 柱状统计图 -->
			<view class="histogram">
				<!-- 柱状图标题 -->
				<view class="hisTitle">
					<image class="titleIcon" src="../../../../static/images/today.png"></image>今日学习
				</view>
				<!-- 柱状图 -->
				<view class="qiun-columns">
					<view class="qiun-charts">
						<myCharts canvas-id="canvasColumnStack" id="canvasColumnStack" class="charts" @touchstart="touchColumn"></myCharts>
						<!-- <canvas canvas-id="canvasColumnStack" id="canvasColumnStack" class="charts" @touchstart="touchColumn"></canvas> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../../../components/u-charts/u-charts.js';
	import myCharts from '../../../../components/u-charts/component';
	// import echarts from 'echarts';
	// import mpvueEcharts from 'mpvue-echarts';

	var _self;
	var canvaColumn = null;

	export default {
		components:{myCharts},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
				studentId:''
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			goBack(){
				uni.navigateBack({delta: 1})
			},
			getServerData() {
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverData = res.data.data;
						let ColumnStack = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						ColumnStack.categories = res.data.data.ColumnStack.categories;
						ColumnStack.series = res.data.data.ColumnStack.series;
						_self.showColumnStack("canvasColumnStack", ColumnStack);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
// 			showColumnStack(canvasId, chartData) {
// 				canvaColumn = new uCharts({
// 					$this: _self,
// 					canvasId: canvasId,
// 					type: 'column',
// 					enableMarkLine:true,
// 					legend: {
// 						show: true
// 					},
// 					colors:['#FFBB00', '#FF5C5C', '#2E3548', '#f04864', '#979DAB', '#90ed7d'],
// 					fontSize: 8,
// 					background: '#FFFFFF',
// 					pixelRatio: _self.pixelRatio,
// 					animation: true,
// 					categories: chartData.categories,
// 					series: chartData.series,					
// 					xAxis: {
// 						disableGrid: true,
// 						itemCount:7,
// 						gridColor:'#F5F7F7',
// 					},
// 					yAxis: {
// 						data:{
// 							disabled:false,
// 							axisLine:false,
// 							calibration:false,
// 							axisLineColor:'#FFBB00'
// 						}
// 						
// 					},
// 					dataLabel: true,
// 					padding:[0,0,0,0],
// 					width: _self.cWidth * _self.pixelRatio,
// 					height: 500,
// 					extra: {
// 						column: {
// 							type: 'stack',
// 							width: 7,
// 						}
// 					}
// 				});
// 
// 			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
		},
		created(){
			
		},
		onLoad(options) {
			console.log(options)
			this.studentId = options.studentId
		}
	}
</script>

<style lang="scss">
	// page{background:#F2F2F2;width: 407upx;overflow-x: hidden;}
	// .qiun-padding{padding:2%; width:96%;}
	// .qiun-wrap{display:flex; flex-wrap:wrap;}
	// .qiun-rows{display:flex; flex-direction:row !important;}
	// .qiun-columns{display:flex; flex-direction:column !important;}
	// .qiun-common-mt{margin-top:10upx;}
	// .qiun-bg-white{background:#FFFFFF;}
	// .qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	// .qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	// .qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	// .charts{width: 750upx; height:500upx;background-color: #FFFFFF;}

	.stuDetailsBox {
		position: relative;
		overflow: hidden;

		// 顶部背景图片
		.site-img {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			height: 376rpx;
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

		// 头像
		.touBox {
			width: 100%;
			position: absolute;
			z-index: 30;
			top: 160rpx;

			.touXiang,
			.touXiang image {
				width: 108rpx;
				height: 108rpx;
				margin: 0 auto;
			}

			.touName {
				text-align: center;
				font-size: 30rpx;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				margin-top: 26rpx;
			}
		}

		// 主体内容
		.conBox {
			margin-top: 416rpx;
			padding: 0 32rpx;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			z-index: 50;

			// 总列表
			.stuList {
				width: 686rpx;
				height: 352rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 8rpx 36rpx rgba(201, 201, 201, 0.15);
				opacity: 1;
				border-radius: 16rpx;
				padding: 40rpx 0 0 48rpx;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;

				.toDay {
					width: 50%;
					height: 50%;
					float: left;

					.dayTitle {
						font-size: 24rpx;
						font-weight: bold;
						color: rgba(92, 99, 113, 1);

						.titleIcon {
							width: 28rpx;
							height: 28rpx;
							margin-right: 16rpx;
						}
					}

					.dayNum {
						font-size: 16rpx;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);

						.bigFont {
							font-size: 48rpx;
							font-weight: normal;
							color: rgba(46, 53, 72, 1);
							margin-left: 44rpx;
							margin-right: 8rpx;
						}
					}
				}
			}

			// 柱状统计图
			.histogram {
				width: 100%;
				height: 820rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 8rpx 36rpx rgba(201, 201, 201, 0.15);
				border-radius: 16rpx;
				margin-top: 36rpx;
				// padding-top: 32rpx;
				// padding-bottom: 40rpx;
				padding: 32rpx 32rpx 40rpx;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;

				.hisTitle {
					font-size: 28rpx;
					font-weight: 800;
					color: rgba(46, 53, 72, 1);

					.titleIcon {
						width: 28rpx;
						height: 28rpx;
						margin-right: 16rpx;
					}
				}
			}

		}
	}
</style>
