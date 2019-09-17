<template>
	<div>
		导航
		<div :class="cla">666</div>
		<div v-bind:class="{on:bool}">{{msg}}</div>
		{{hello}}
		<button v-on:click="test">点击</button>
		
		{{hello}}
		
		{{hello}}
		
		<input type="text" v-model.lazy="hello">
		
		<input type="text" v-model="msg">
		<hr>
		<template v-if="!bool">文字</template>
		
		<div v-if="bool">1</div>
		<div v-else-if="bool2">2</div>
		<div v-else>3</div>
		
		<div @click="tk2">
			<button @click.stop="tk">点击测试</button>
		</div>
		<input type="text" @keyup.enter="up123">
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				nav:"这个数据我想要在首页显示",
				msg:"123456789",
				cla:{
					"on":true,
					"w20":true
				},
				bool:false,
				bool2:false
			}
		},
		methods:{
			test(){
				alert(this.msg);
				this.$emit("upup",this.nav)
				this.bool=true;
			},
			tk(){			
				alert(123);
			},
			tk2(){
				alert(456);
			},
			up123(){
				console.log(789)
			}
		},
		//计算属性会在渲染之前，先执行一遍，把结果记录在缓存中，当你渲染时，并不会再次运行这个函数，而是会直接把缓存中的结果拿出来运用
		computed:{
			hello:{
				get:function(){//获取
					return this.msg.split("").reverse().join('')
				},
				set:function(){//设置
					console.log(123)
				}
			}
		},
		watch:{//侦听器（观察者）：只能作为第三者，监听data数据变化
			msg:function(x,y){
				console.log("msg发生了变化,由"+y+"变化成了"+x)
			}
		}
	}
</script>

<style scoped>
	div{ color: blue;}
	.on{ background: green;}
</style>
