<template>
	<div id="app">
		
		
		
		<template v-for="x in news">{{x.tit}}</template>
		<!-- vue组件：类似框架（页面里面嵌套页面）<button v-on:click="tab">点击切换页面</button> -->
		<!-- <asd v-if="bool">2、使用组件（通过标签使用）</asd> -->
		<!-- <load></load> -->
		<img :src="url"> 
		<img src="./assets/logo.png" alt="">
		
		  {{ku}}
		<daohang v-bind:def="meg" :ghi="bool" ></daohang>
<div class="box">		
	<transition name="dh">	
		<keep-alive>
			<router-view :opm="meg" v-on:suibian="message" :zou="song" @jieshou="jie"></router-view>
        </keep-alive>
	</transition>
</div>	
	
	<router-view name="luyou"></router-view>

	
	</div>
</template>

<script>
 // import qwe from "./components/test1.vue";
 // import test from "./components/test2.vue";

import daohang from "./components/test/nav.vue";	

export default {
	name: 'app',
	data(){
		return {
			bool:true,
			meg:"这是app.vue的数据",
			tit:null,
			ku:null,
			song:20000,
			url:require("./assets/logo.png"),
			news:null,
			
		}
	},
	methods:{
		tab:function(){
			this.bool=!this.bool
		},
		message(val){
			this.meg=val
		},
		jie(val){	this.ku=val;  }
	},
	components:{//1、组件注册
		 // asd:qwe,
		 // test,
		 daohang
		//ming:ming1
	},
	created(){
		console.log(this.$store)
		this.news=this.$store.state.news
		//this.news=this.$state.store.news
		
		//注意this指向问题
		// var _that=this;
		// var xhr=new XMLHttpRequest();
		// xhr.open("get","http://localhost:8081/search?age=423",false);
		// xhr.onload=function(){
		// 	_that.url=JSON.parse(this.responseText)[0].picture
		// }
		// xhr.send()
		
		//axios
		var _that=this
		this.http.get("http://localhost:8081/search?age=423").then(function(val){
			_that.url='http://localhost:8081'+val.data[0].picture
		})
	}	
};
</script>

<style>
.box{ position: relative;}
.box>div{ position: absolute; top: 0; transition: 1s; background: url(assets/logo.png);}

.dh-leave,.dh-enter-to{ left: 0; opacity: 1;}
.dh-leave-to{ left: 100%; opacity: 0;}
.dh-enter{ left: -100%; opacity: 0;}


	
</style>
