import Vue from 'vue'
import Router from 'vue-router'


import a from "../components/test/test1.vue";	
// import b from "../components/test/test2.vue";	
// import c from "../components/test/test3.vue";	

import ming1 from "../components/ming/ming1.vue";	
import ming2 from "../components/ming/ming2.vue";	
import ming3 from "../components/ming/ming3.vue"

Vue.use(Router)

export default new Router({
	routes:[
		{path:"/",component:a},
		{path:"/123",
			components:{ //懒加载路由
				"luyou":resolve=>require(['../components/test/test2.vue'],resolve)
			},
		},
		{path:"/456/",
			components:{ //懒加载路由
				"luyou":resolve=>require(['../components/test/test3.vue'],resolve)
			}
		},
		{path:"/ming1",component:ming1},
		{path:"/ming2",component:ming2},
		{path:"/ming3",component:ming3},
	],
	mode:"history" /* 解决井号*/
})