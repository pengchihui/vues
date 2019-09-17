import Vue from 'vue'
import Vuex from 'vuex'
import state123 from './list.js'


Vue.use(Vuex)

var state={
		pro:[
			{tit:"产品123"},
			{tit:"产品456"},
			{tit:"产品789"}
		],
		news:[
			{tit:"新闻123"},
			{tit:"新闻456"},
			{tit:"新闻456"}
		]
	}

export default new Vuex.Store({
	state,
	modules:{
		state123
	}
})