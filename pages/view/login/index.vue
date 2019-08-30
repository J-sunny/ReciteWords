<template>
	<view class="loginBox">
		<!-- 顶部导航背景图 -->
		<view class="loginNav">
			<image class='site-img' src="../../../static/images/BJ.png" catchtap='navmap'></image>
			<view class="navTitle">登录</view>
			<view class="loginTitle">背单词·教师端</view>
		</view>

		<!-- 内容 -->
		<view class="loginCon">
			<view class="userNameBox">
				<image class="pwdPic" src="../../../static/images/userName@2x.png" mode=""></image>
				<input class="nameInput" type="text" placeholder="请输入用户名">
			</view>
			<view class="userNameBox">
				<image class="pwdPic" src="../../../static/images/pwd@2x.png" mode=""></image>
				<input class="nameInput" type="text" placeholder="请输入密码">
			</view>
			<view class="loginBtn" @tap="login()">登录</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {}
		},
		methods:{
			login(){
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.loginBox {

		// 导航
		.loginNav {

			// 顶部导航背景图
			.site-img {
				width: 100%;
				height: 454rpx;
			}

			.navTitle {
				width: 100%;
				position: fixed;
				text-align: center;
				top: 58rpx;
				font-size: 36rpx;
				font-weight: 800;
				color: rgba(255, 255, 255, 1);
			}

			.loginTitle {
				text-align: center;
				width: 100%;
				font-size: 48rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				opacity: 1;
				position: fixed;
				top: 176rpx;
			}

		}

		// 内容
		.loginCon {
			position: fixed;
			// margin-top:-26rpx ;
			padding: 20rpx 40rpx 0rpx 40rpx;
			box-sizing: border-box;
			top: 362rpx;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 1);
			opacity: 1;
			border-radius: 24rpx 24rpx 0px 0px;
			box-sizing: border-box;

			.userNameBox {
				position: relative;
				margin-top: 38rpx;

				.pwdPic {
					position: absolute;
					width: 28rpx;
					height: 28rpx;
					top: 32rpx;
					left: 10rpx;
				}

				.nameInput {
					width: 100%;
					height: 88rpx;
					border-bottom: 2rpx solid #F0F0F0;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 400;
					// line-height:20px;
					color: rgba(201, 201, 201, 1);
					padding-left: 52rpx;
					box-sizing: border-box;
					// opacity:1;
				}
			}

			// 登录按钮
			.loginBtn {
				width: 622rpx;
				height: 88rpx;
				background: rgba(255, 187, 0, 1);
				opacity: 1;
				border-radius: 44rpx;

				// margin-top: 64rpx;
				text-align: center;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 88rpx;
				color: rgba(255, 255, 255, 1);
				margin: 64rpx auto;
			}
		}
	}
</style>
