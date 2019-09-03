import Vue from 'vue'
import App from './App'
import 'pages/style/init.css'
// import{goback} from '/pages/commont/comment.js'
// import {goBack} from '/pages/commont/comment.js'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// 
// Vue.use(Vant);

import MinRequest from './request/index'
import minRequest from './request/api'
Vue.use(MinRequest)

import Toast from './wxcomponents/dist/toast/toast';



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App,
	minRequest
})
app.$mount()
