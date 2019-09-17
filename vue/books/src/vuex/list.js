import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

var state={
	product:[
		{"tit":"asdasdas"},
		{"tit":"zxczxczxc"},
		{"tit":"werwerwerwe"},
		{"tit":"1321321321"},
		{"tit":"爱仕达撒所大所多"}
	],
	time:[
		{"time":12},
		{"time":24},
		{"time":36}
	]
}

export default new Vuex.Store({
	state
})




