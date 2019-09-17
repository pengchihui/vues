<template>
	<div>
		{{num|add}}
		<ul>
			<li v-for="x in product">{{x.name}}<img :src="'http://localhost:8090/'+x.img1"></li>
		</ul>
		<button type="button" class="mui-btn mui-btn-success">绿色</button>
<div class="mui-slider">
  <div class="mui-slider-group mui-slider-loop">
    <!--支持循环，需要重复图片节点-->
    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="4.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="1.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="2.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="3.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="4.jpg" /></a></div>
    <!--支持循环，需要重复图片节点-->
    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="1.jpg" /></a></div>
  </div>
</div>
		
		<router-link to="/123">问候页</router-link>
		<router-link to="/">banner页</router-link>
		<router-link to="/nav">导航页</router-link>
		<div class="box">
			<transition name="dh">
				<keep-alive>
<router-view name="id123" v-bind:index="test" :zxc="obj" @upup="order">						
</router-view>
				</keep-alive>
			</transition>
		</div>

		<hr />
		{{ test }}

		{{ msg }} {{ num * 3 }} {{ bool }} {{ arr[1] }} {{ obj.name }} 通过V指令来使用数据
		<span v-text="msg"></span>
		==
		<span>{{ msg }}</span>
		<div v-html="html"></div>
		!=
		<div>{{ html }}</div>
		属性通过v-bind来绑定数据，可以简写成":"
		<input type="text" v-bind:value="msg" />
		<div :class="msg" :style="css">123456789</div>
		<img :src="img" />
		v-if条件渲染：（这个dom节点直接不见了）
		<div v-if="bool">8888</div>
		<div v-else>9999</div>
		<div v-show="bool">通过display隐藏</div>
		v-for循环渲染
		<ul>
			<li v-for="(i, m) in arr_obj">{{ i.tit }}---{{ i.time }}---{{ m }}</li>
		</ul>
		通过v-on绑定事件，可简写"@",可不带括号，有参数时带括号
		<button v-on:click="asd">点击</button>
		<button @dblclick="qwe(456)">双击</button>
		通过v-model双向数据绑定,修改data数据，那么那些使用data数据的项目也会同步变化
		
		
		<input type="text" v-model="msg" />
		你已经输入了{{msg|len}}个字
		

		vue组件
		<iframe src="">页面嵌套页面</iframe>
		页面切换
		<a href="#" @click="bool = true">跳转1</a>
		<a href="#" @click="bool = false">跳转2</a>
		组件第三步：使用
		<banner v-if="bool"></banner>
		<nav123 v-else></nav123>
	</div>
</template>

<script>
	

	
	
//组件第二步：声明路径
import banner from './components/banner.vue';
import nav123 from './components/nav.vue';
export default {
	//name: 'app',
	data() {
		//数据的集合
		return {
			product:null,
			test: '这个数据我想在子页面使用',
			html: '<h1>标题</h1>',
			msg: 'hello',
			num: 66,
			bool: false,
			arr: ['a', 'b', 'c'],
			obj: { name: '张三' },
			img: 'xxx.jpg',
			css: 'color:red',
			arr_obj: [{ time: 7.9, tit: 'asdas' }, { time: 7.1, tit: 'xgfdgd' }, { time: 7.11, tit: 'ewrrwe' }]
		};
	},
	//过滤器：对data数据进行一个函数上的运行
	filters:{
		add(val){
			return val*3
		},
		len(val){
			return val.split("").length
		}
	},
	methods: {
		//函数方法的集合
		asd: function() {
			console.log(123);
		},
		qwe(val) {
			console.log(val);
			//修改data里面的数据
			this.bool = !this.bool;
			this.msg = '你好';
		},
		order(val) {
			this.html = '<h1>' + val + '</h1>';
		}
	},
	//组件使用第一步，注册组件
	components: {
		banner,
		nav123
	},
	created(){
		//修改一下this的指向问题
		 var that=this		
		//用AJAX拿取接口数据
		// var xhr=new XMLHttpRequest()
		// xhr.open("get","http://localhost:8090/shop/",true)
		// xhr.onload=function(){
		// 	var arr=JSON.parse(this.responseText)
		// 	console.log(arr)
		// 	that.product=arr
		// }
		// xhr.send()
		
		
		// 利用第三方模块axios来请求数据  
		// 1、npm install axios
		// 2、修改main.js
		// 3、通过this.$axios.get()去获取数据
		this.$axios.get("http://localhost:8090/shop/").then(function(res){
			console.log(res)
			that.product=res.data//把数据传给data中的product
		})
		
		
	},
	beforeUpdate() {
		//alert("页面被修改时")
	},
	updated() {
		//alert("页面被修改后")
	},
	mounted(){			
		//获得slider插件对象
		var gallery = mui('.mui-slider');
		gallery.slider({
		  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
		});	
	}
};
</script>

<style>
.box {
	position: relative;
}

.box>div {
	position: absolute;
	transition: 1s;
	top: 0;
}
.dh-leave-to {
	left: -100%;
	opacity: 0;
}
.dh-enter {
	left: 100%;
	opacity: 0;
}
.dh-enter-to,
.dh-leave {
	left: 0;
	opacity: 1;
}
</style>
