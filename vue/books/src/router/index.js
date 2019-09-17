import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
	routes: [{
			path: "/123",
			components:{ //懒加载路由
				"id123":resolve=>require(['../components/HelloWorld.vue'],resolve)
			}
		},
		{
			path: "/",          //  "/"为根目录路劲，一打开首页就显示
			components:{ //懒加载路由
				"id123":resolve=>require(['../components/banner.vue'],resolve)
			}
		},
		{
			path: "/nav",
			components:{ //懒加载路由
				"id123":resolve=>require(['../components/nav.vue'],resolve)
			}
		}
	],
	mode:"history"  //去掉路径的“#”
})
