<template>
	<div>
		<ul>
			<li v-for="x in list">{{x.time}}</li>
		</ul>
		{{index}}{{zxc.name}}
		轮播图 <b v-once>{{msg}}</b>
		{{num>10?10:0}}
		<div v-bind:class="num>10?'on':''">123</div>
		{{ msg.split('').reverse().join('') }}
		<img src="../assets/logo.png">
		<!-- 使用data里面的图片路劲时，data里面需要加上require() -->
		<img v-bind:src="img1" alt="">
		<input type="text" v-model="msg">
		
		通过directives自定义v-xxx指令
		<div v-turn>{{msg}}</div>v-turn
		<span v-turn>你好，我是xxx</span>
		
		
		回顾：
		v-text
		v-html
		v-bind
		v-on
		v-once
		v-model
		v-if
		v-else
		v-show
		v-for
		
		
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				msg:"hello",
				num:-66,
				list:[],
				img1:require("../assets/logo.png")
			}
		},
		props:["index","zxc"],//接收到父级页面传过来的值（通过路由窗口传过来的）
		beforeCreate(){
			//alert(this.msg)
			//alert("vue创建，data还未绑定数据");
		},
		created(){
			//alert(this.msg)
			//alert("vue已经创建，data绑定数据");
			this.list=this.$store.state.time
		},
		beforeMount(){
			//alert("挂载渲染之前，data还未渲染到dom里面");//<b>{{msg}}</b>
		},
		mounted(){
			//alert("页面开始渲染，data已经渲染到dom里面");//<b>hello</b>
			
		},
		directives:{//自定义指令
			turn(el){
				el.style.background="red"
				el.style.height="20px"
				el.innerText=el.innerText.split('').reverse().join('')
			}
		}
	}
</script>

<style>
	.on{ background: #f00;}
</style>
