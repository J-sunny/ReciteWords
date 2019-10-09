<template>
	<view class="byCourseBox" :class="show==true?'preventTouchMove':''">
		<!-- 分类 -->
		<view class="byList">
			<!-- 分类标题 -->
			<view class="courseNavBox">
				<view>
					<view class="courseType" @tap="actives1()">
						<text class="typeTitle">{{title1}}</text>
						<uni-icon class='typeIcon' :type="active1==1?'arrowdown ':'arrowup'" style='font-size: 20rpx;'></uni-icon>
					</view>
					<!-- 分类选项--第一级 -->
					<scroll-view scroll-y='true' class="courseOptions" v-if='show1'>
						<view class="options" :class="item.thesaurusName==title1?'activeColor':''" v-for="item in thesaurusLists" :key='item'
						 @tap="optionsActive1(item.thesaurusName,item.thesaurusId)">{{item.thesaurusName}}</view>
					</scroll-view>
				</view>

				<view>
					<view class="courseType courseBorder" @tap="actives2()">
						<label class="typeTitle">{{title2}}</label>
						<uni-icon class='typeIcon' :type="active2==1?'arrowdown ':'arrowup'"></uni-icon>
					</view>
					<!-- 分类选项--第二级 -->
					<scroll-view scroll-y='true' class="courseOptions" v-if='show2'>
						<view class="options" :class="item.belong_chapter==title2?'activeColor':''" v-for="(item,index) in chapterLists"
						 :key='index' @tap="optionsActive2(item.belong_chapter)">{{item.belong_chapter}}</view>
					</scroll-view>
				</view>

				<view>
					<view class="courseType" @tap="actives3()">
						<label class="typeTitle" for="">{{title3}}</label>
						<uni-icon class='typeIcon' :type="active3==1?'arrowdown ':'arrowup'"></uni-icon>
					</view>
					<!-- 分类选项--第三级 -->
					<scroll-view scroll-y='true' class="courseOptions" v-if='show3'>
						<view class="options" :class="item.belong_lesson==title3?'activeColor':''" v-for="(item,index) in lessonLists"
						 :key='index' @tap="optionsActive3(item.belong_lesson)">{{item.belong_lesson}}</view>
					</scroll-view>
				</view>


			</view>
		</view>

		<!-- 内容 -->
		<view class="courseConBox">
			<view class="courseList">
				<view class="Title">
					<label class="bigTitle">{{title1}}</label>
					<label class="smallTitle" for="">{{title2}}-{{title3}}</label></view>
				<van-checkbox-group :value="result" @change="onChanges()">
					<view class="checkedBox" v-for="item in list" :key="item.wordId">
						<view class="box" :style="{height:'160rpx',padding:'40rpx 24rpx' ,'border-radius':'16rpx','margin-top':'32rpx',background:'#fff','box-sizing': 'border-box'}">
							<!-- 复选框组 -->
							<van-checkbox class="vanCheckBox" :name="item.wordId" checked-color="#FFBB00">
								<view class="words">
									<view class="word">{{item.wordSpell}}</view>
									<view class="Interpretation">{{item.interpretation}}</view>
								</view>
							</van-checkbox>
						</view>
					</view>
				</van-checkbox-group>
			</view>
		</view>
		<!-- 底部全选 -->
		<view class="allCheck" v-if="false">
			<!-- <label class="radio"> -->
			<!-- <checkbox  color="#FFBB00" style="transform:scale(1)" @tap="checkAll=!checkAll" :checked="checkAll"/>全选 -->
			<van-checkbox class="radio" :value="checkAll" @change="onChange()" checked-color="#FFBB00">全选</van-checkbox>
			<!-- </label> -->
			<label v-if='lookSelects==false' url='/pages/view/home/arrangementTasks/checkSelected' class="lookCheck">
				查看已选（{{wordCount}}）
			</label>
			<navigator v-if="lookSelects!=false" url='/pages/view/home/arrangementTasks/checkSelected' class="lookCheck lookActive">
				查看已选（{{wordCount}}）
			</navigator>
		</view>

		<!-- 遮罩层 -->
		<view :class="show==true?'backgrounds':''">
		</view>

	</view>
</template>

<script>
	// import uniIcon from "../../../components/uni-icon/uni-icon.vue"
	import {
		uniIcon
	} from '@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'
	export default {
		data() {
			return {
				title1: '暂无数据',
				title2: '暂无数据',
				title3: '暂无数据',
				active1: 1,
				active2: 1,
				active3: 1,
				show: false,
				show1: false,
				show2: false,
				show3: false,
				checkAll: false,
				lookSelects: false,
				wordCount: 0,
				// 				list: [{
				// 						courseTitle: '四级词汇核心词汇',
				// 						chapter: 'chapter 1-Lesson 2',
				// 						wordList: [{
				// 								'word': 'accessory',
				// 								'wordId': 1,
				// 								'Interpretation': 'n.同谋，从犯；附件'
				// 							},
				// 							{
				// 								'word': 'accidental',
				// 								'wordId': 2,
				// 								'Interpretation': 'a.偶然的；非本质的'
				// 							},
				// 							{
				// 								'word': 'accommodate',
				// 								'wordId': 3,
				// 								'Interpretation': 'vt.容纳；供应，供给'
				// 							},
				// 							{
				// 								'word': 'accordance',
				// 								'wordId': 4,
				// 								'Interpretation': 'n.一致；和谐；授予'
				// 							},
				// 							{
				// 								'word': 'accordingly',
				// 								'wordId': 5,
				// 								'Interpretation': 'ad.因此，所以；照着'
				// 							},
				// 
				// 						]
				// 					},
				// 					{
				// 						courseTitle: '六级核心词汇',
				// 						chapter: 'chapter 5-Lesson 13',
				// 						wordList: [{
				// 								'word': 'bacon',
				// 								'wordId': 6,
				// 								'Interpretation': 'n.实例，情况，建议；vt.举...为例'
				// 							},
				// 							{
				// 								'word': 'ability',
				// 								'wordId': 7,
				// 								'Interpretation': 'vt.容纳；供应，供给'
				// 							},
				// 							{
				// 								'word': 'involve',
				// 								'wordId': 8,
				// 								'Interpretation': 'a.偶然的；非本质的'
				// 							},
				// 							{
				// 								'word': 'jail',
				// 								'wordId': 9,
				// 								'Interpretation': 'ad.因此，所以；照着'
				// 							},
				// 							{
				// 								'word': 'aboard',
				// 								'wordId': 10,
				// 								'Interpretation': 'n.一致；和谐；授予'
				// 							},
				// 
				// 						]
				// 					}
				// 				],
				// 				
				list: [],
				result: [],
				thesaurusLists: [],
				chapterLists: [],
				lessonLists: [],
				arr: [],
				b: [],
				qArr:[]

			};
		},
		watch: {
			result() {

				// console.log(this.checkAll)
			}
		},
		components: {
			uniIcon
		},
		watch: {
			title1() {
				// console.log(this.title1)
				this.chapterList(this.title1)
				this.title2 = "暂无数据"
				this.title3 = "暂无数据"
				this.chapterLists = [],
					this.lessonLists = [],
					this.list = []
			},
			title2() {
				this.lessonList(this.title1, this.title2)
			}
		},
		methods: {
			actives1() {
				if (this.show == true && (this.show2 == true || this.show3 == true)) {
					this.show = this.show
					// console.log(1)
				} else if (this.show == true && this.show1 == false) {
					this.show = false
					// console.log(2)
				} else {
					this.show = !this.show
					// console.log(3)
				}
				// console.log(this.show)
				this.active1 = !this.active1
				this.show1 = !this.show1
				this.show2 = false
				this.show3 = false
				this.active2 = false
				this.active3 = false
				// console.log(this.active1, 'active1')
			},
			actives2() {
				if (this.show == true && (this.show1 == true || this.show3 == true)) {
					this.show = this.show
				} else {
					this.show = !this.show
				}

				this.active2 = !this.active2
				this.show2 = !this.show2
				this.show1 = false
				this.show3 = false
				this.active1 = false
				this.active3 = false
				// console.log(this.active2, 'active2')
			},
			actives3() {
				if (this.show == true && (this.show1 == true || this.show2 == true)) {
					this.show = this.show
				} else {
					this.show = !this.show
				}

				this.show1 = false
				this.show2 = false
				this.active2 = false
				this.active1 = false
				this.active3 = !this.active3
				this.show3 = !this.show3
				// console.log(this.active3)
			},
			optionsActive1(val) {
				this.title1 = val
				// console.log(this.title1, this.thesaurusId1)
				this.show = !this.show
				this.show1 = false
				this.active1 = !this.active1
			},
			optionsActive2(val) {
				this.title2 = val
				// console.log(val)
				this.show = !this.show
				this.show2 = false
				this.active2 = !this.active2
			},
			optionsActive3(val) {
				this.title3 = val
				// console.log(val)
				this.show = !this.show
				this.show3 = false
				this.active3 = !this.active3


				// console.log(999)
				// console.log(this.title1)
				// console.log(this.title2)
				// console.log(this.title3)
				this.wordListByChapter()

			},
			// 全选
			onChange(event) {
				if (event.detail == false) {
					this.result = []
				}
				if (event.detail == true) {
					this.result = []
					this.list.forEach(data => {
						// console.log(data)						
						this.result.push(data.wordId.toString())
					})

					// 保存到storage里面
					uni.setStorage({
						key: 'selectedWords',
						data: this.list
					});

				}
				console.log(this.result)
				this.wordCount = this.result.length
				this.checkAll = event.detail
				this.lookSelects = event.detail
			},
			
			onChanges(event) {
				console.log(this.qArr)
				this.result = event.detail
				console.log(this.result)
				if (this.result.length == 0) {
					this.lookSelects = false
				} else {
					this.lookSelects = true
					this.result.forEach(data => {
						this.list.forEach(val => {
							if (data == val.wordId) {
								this.arr.push(val)
							}
						})
					})
					console.log(this.arr)

					// this.arr.forEach(i => {
					// 	if (this.b.indexOf(i) == -1) {
					// 		this.b.push(i)
					// 	}
					// })
					// 去除重复
					this.b = [...new Set(this.arr)]
					this.qArr=this.b

					console.log(this.b)
					console.log(this.qArr)
				}
				// console.log(this.arr)
				// 保存到storage里面
				uni.setStorage({
					key: 'selectedWords',
					data: this.b
				});
				this.wordCount = this.result.length
			},
			// 获取课程下拉列表
			thesaurusList() {
				this.$minApi.thesaurusList({}).then(data => {
					// console.log(data)
					this.thesaurusLists = data.data
					this.title1 = data.data[0].thesaurusName
				})
				console.log(this.title1)
				// this.chapterList(this.title1)
			},
			// 获取章下拉列表
			chapterList(thesauruName) {
				this.$minApi.chapterList({
					thesauruName: thesauruName
				}).then(data => {
					console.log(data)
					this.chapterLists = data.data
					if (data.data.length != 0) {
						this.title2 = data.data[0].belong_chapter
						// this.lessonList(this.title1, this.title2)
					}
				})
			},
			// 获取节下拉列表
			lessonList(thesauruName, chapter) {
				// console.log(chapter, thesauruName)
				this.$minApi.lessonList({
					chapter: chapter,
					thesauruName: thesauruName
				}).then(data => {
					console.log(data)
					this.lessonLists = data.data
					if (data.data.length != 0) {
						this.title3 = data.data[0].belong_lesson
						// console.log(data.data[0].belong_lesson)
						this.wordListByChapter()
					}
				})
			},
			// 通过课程章节获取单词列表
			wordListByChapter() {
				// console.log(this.title3,lesson)
				this.$minApi.wordListByChapter({
					thesauruName: this.title1,
					chapter: this.title2,
					lesson: this.title3
				}).then(data => {
					this.list = data.data
					console.log(data)
				})
			}
		},
		created() {
			this.thesaurusList()
			uni.getStorage({
				key: 'selectedWords',
				success: (data) => {
					console.log(data)
					data.data.forEach(val => {
						this.result.push(val.wordId.toString())
					})
					console.log(this.result)
				}
			});
		}
	}
</script>

<style lang="scss">
	.backgrounds {
		background-color: rgba(0, 0, 0, 0.5);
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: fixed !important;
		z-index: 100;
	}

	.preventTouchMove {
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: fixed !important;
		z-index: 100;
	}

	.byCourseBox {
		position: relative;

		.van-checkbox {
			height: 160rpx;
		}

		.word {
			font-size: 32rpx;
			font-weight: bold;
			color: rgba(46, 53, 72, 1);
		}

		.van-checkbox__icon-wrap {
			// margin-top: 20rpx;

		}


		.Interpretation {
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(151, 157, 171, 1);
			margin-top: 12rpx;
		}

		// 分类
		.byList {
			position: fixed;
			top: 288rpx;
			z-index: 100;
			background-color: #FBFBFB;
			margin-bottom: 32rpx;
			z-index: 101;
			width: 100%;

			// 分类标题
			.courseNavBox {
				border-bottom: 1rpx solid #F5F7F7;
				overflow: hidden;
				padding: 24rpx 0 18rpx 0;
				background: rgba(255, 255, 255, 1);

				.courseBorder {
					border-left: 2rpx solid #F5F7F7;
					border-right: 2rpx solid #F5F7F7;
				}

				.courseType {
					// padding: 24rpx 0 18rpx 0;
					display: inline-block;
					width: 248rpx;
					height: 48rpx;
					line-height: 48rpx;
					background: rgba(255, 255, 255, 1);
					font-size: 30rpx;
					font-weight: 400;
					color: #5C6371;
					text-align: center;
					float: left;



					.typeTitle {
						margin-right: -12rpx;
						// width: 198rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						display: inline-block;
					}

					.typeIcon {
						float: right;
						margin-right: 30rpx;
					}
				}
			}

			// 分类选项
			.courseOptions {
				padding-bottom: 16rpx;
				border-radius: 0px 0px 20rpx 20rpx;
				background-color: #fff;
				box-shadow: 0px 30rpx 40rpx rgba(201, 201, 201, 0.3);
				position: absolute;
				// position: fixed;
				top: 90rpx;
				left: 0;
				z-index: 50;
				width: 100%;
				height: 600rpx;

				.options {
					width: 100%;
					height: 96rpx;
					background: rgba(255, 255, 255, 1);
					text-align: center;
					line-height: 96rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #5C6371;
				}

				.activeColor {
					color: #FFBB00;
				}
			}
		}

		// 内容
		.courseConBox {
			padding: 0 32rpx 120rpx 32rpx;
			box-sizing: border-box;
			margin-top: 410rpx;


			.courseList {
				.Title {
					margin-top: 32rpx;

					.bigTitle {
						font-size: 32rpx;
						font-weight: bold;
						color: rgba(46, 53, 72, 1);
					}

					.smallTitle {
						font-size: 26rpx;
						font-weight: 500;
						color: rgba(92, 99, 113, 1);
						margin-left: 24rpx;
					}
				}

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

		// 		// 底部全选
		// 		.allCheck {
		// 			padding: 0 32rpx;
		// 			box-sizing: border-box;
		// 			position: fixed;
		// 			bottom: 0;
		// 			width: 100%;
		// 			height: 112rpx;
		// 			background: #FFFFFF;
		// 			box-shadow: 0px -6rpx 24rpx rgba(201, 201, 201, 1);
		// 			opacity: 1;
		// 			z-index: 100;
		// 
		// 			.radio {
		// 				line-height: 112rpx;
		// 				font-size: 32rpx;
		// 				font-weight: 500;
		// 				color: rgba(46, 53, 72, 1);
		// 				margin-top: 40rpx;
		// 				display: inline-block;
		// 			}
		// 
		// 			.lookCheck {
		// 				display: inline-block;
		// 				width: 456rpx;
		// 				height: 84rpx;
		// 				opacity: 1;
		// 				border-radius: 44rpx;
		// 				float: right;
		// 				text-align: center;
		// 				font-size: 32rpx;
		// 				font-weight: 400;
		// 				line-height: 84rpx;
		// 				opacity: 1;
		// 				margin-top: 14rpx;
		// 				background-color: #EFEFF1;
		// 				color: #979DAB;
		// 
		// 			}
		// 
		// 			.lookActive {
		// 				background: rgba(255, 187, 0, 1);
		// 				color: rgba(255, 255, 255, 1);
		// 			}
		// 		}
		// 	
	}
</style>
