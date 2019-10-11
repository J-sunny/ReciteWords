import MinRequest from './index.js'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
	// console.log(request)
	const token = uni.getStorageSync('token');
	if (token) {
		request.header["X-Token"] = token;
	} else {
		uni.redirectTo({
			url: '/pages/view/login/index'
		});
	}
	return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	// console.log(response.status)
	if (response.data.code == 508) {
		console.log("loginout")
		uni.redirectTo({
			url: '/pages/view/login/index'
		});
	}
	return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
	// config.baseURL = 'http://192.168.2.102:8089/backwordSystem'
	// config.baseURL = 'http://localhost:8089/backwordSystem'
	config.baseURL = 'http://148.70.55.201:8089/backwordSystem'
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
			return minRequest.post('/loginByAccount', data)
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
		// 获取章下拉列表
		chapterList(data) {
			return minRequest.get('/teacher/task/chapterList', data)
		},
		// 获取节下拉列表
		lessonList(data) {
			return minRequest.get('/teacher/task/lessonList', data)
		},
		// 获取学校下拉列表
		schoolList(data) {
			return minRequest.get('/schoolList', data)
		},
		// 获取班级下拉列表
		getClassList(data) {
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
		// 任务详情列表
		taskDetailsList(data) {
			return minRequest.get('/teacher/main/taskDetailsList', data)
		},
		// 获取用户学习情况(今日时长,今日单词,总时长,总单词)
		getStudentRecord(data) {
			return minRequest.get('/student/behaviorRecord/getStudentRecord', data)
		},
		// 根据当前用户获取班级列表
		classList(data) {
			return minRequest.get('/teacher/manager/classList', data)
		},
		// 获取待分配学生列表
		pendingList(data) {
			return minRequest.get('/teacher/manager/pendingList', data)
		},
		// 删除班级
		classDelete(data) {
			return minRequest.post('/teacher/manager/classDelete', data)
		},
		// 修改班级信息
		classSave(data) {
			return minRequest.post('/teacher/manager/classSave', data)
		},
		// 提出学生
		studentDelete(data) {
			return minRequest.post('/teacher/manager/studentDelete', data)
		},
		// 分配学生
		assignStudent(data) {
			return minRequest.post('/teacher/manager/assignStudent', data)
		},
		// 通过课程章节获取单词列表
		wordListByChapter(data) {
			return minRequest.get('/teacher/word/wordListByChapter', data)
		},
		// 教师发布任务
		publish(data) {
			return minRequest.post('/teacher/task/publish', data)
		}


	}
}
