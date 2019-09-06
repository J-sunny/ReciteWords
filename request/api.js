import MinRequest from './index.js'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
	// console.log(request)
	const token = uni.getStorageSync('token');
	if (token) {
		request.header["X-Token"] = token;
	}
	else{
		
	}
	return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	// console.log(response.status)
	if (response.status == 100) {
		uni.redirectTo({
			url: '/pages/view/login/index'
		});
	}
	return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
	config.baseURL = 'http://192.168.2.167:8089/backwordSystem'
	return config
})

export default {
	// 这里统一管理api请求
	apis: {
		// 获取用户信息
		getUserInfo(data) {
			return minRequest.get('/getUserInfo', data)
		},
		// 单日任务详情列表
		dayOfMissionList(data) {
			return minRequest.get('/teacher/main/dayOfMissionList', data)
		},
		// 获取任务日历数据
		taskCalendar(data) {
			return minRequest.get('/teacher/main/taskCalendar', data)
		},
		// 登录
		loginByAccount(data) {
			return minRequest.get('/loginByAccount', data)
		},
		// 退出登录
		loginOut(data) {
			return minRequest.get('/loginOut', data)
		},
		// 获取用户信息
		getUserInfo(data) {
			return minRequest.get('/getUserInfo', data)
		},
		// 获取课程下拉列表
		thesaurusList(data) {
			return minRequest.get('/teacher/task/thesaurusList', data)
		},
		// 获取章节下拉列表
		chapterList(data) {
			return minRequest.get('/teacher/task/chapterList', data)
		},
		// 获取学校下拉列表
		schoolList(data) {
			return minRequest.get('/schoolList', data)
		},
		// 获取班级下拉列表
		classList(data) {
			return minRequest.get('/classList', data)
		},
		// 获取所有单词列表
		allWordList(data) {
			return minRequest.get('/teacher/word/allWordList', data)
		},
		// 查看任务排名
		taskRank(data) {
			return minRequest.get('/student/task/taskRank', data)
		},
	}
}
