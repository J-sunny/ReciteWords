import Vue from 'vue'
import App from './App'
import 'pages/style/init.css'
// import{goback} from '/pages/commont/comment.js'
// import {goBack} from '/pages/commont/comment.js'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// 
// Vue.use(Vant);
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
