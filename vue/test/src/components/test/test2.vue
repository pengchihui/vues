<template>
	<div>
		测试页二
		<input type="text" v-bind:value="meg">
		<!-- 双向数据绑定 -->
		<input type="text" v-model="meg" maxlength="20">
		<span v-once>{{meg}}</span>
		<div v-html="tit"></div>
		<!-- <div v-text="tit"></div>  ===  <div>{{tit}}</div> -->
		<template v-if="bool">123456</template><!-- template标记不会被渲染 -->
		<hr>
		<button @click="hide(123)">点击</button>
		{{result}} {{result}}
		<input type="text" v-model="num">
		<hr>
		<input type="text" v-model="firstname">
		<input type="text" v-model="lastname">
		<input type="text" v-model="fullname">
		<hr>
		{{meg|len}}
		{{meg|len|qwe}}
		<hr>
		<div v-on:click="hide(666)">
			<button @click.stop="change">点击传值到app.vue</button>
		</div>
		<form v-on:submit.prevent="asd">
			<input type="submit">
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				meg:"hello word!",
				tit:"<h2>标题</h2>",
				bool:true,
				num:6,
				firstname:null,
				lastname:null
			}
		},
		methods:{
			hide(val){
				console.log(val);
			},
			change(){
				this.$emit("suibian",this.meg)		
			},
			asd(){
				
			}
			
		},
		computed:{//计算属性(避免重复运行)
			result:function(){
				console.log(456)
				function asd(val){
					if(val==1){
						return 1
					}
					return val*asd(val-1)
				}
				return asd(this.num)				
			},
			fullname:{
				get(){
				    return this.firstname+" "+this.lastname
				},
				set(val){
					this.firstname=val.split(" ")[0];
					this.lastname=val.split(" ")[1];
				}
			}
		},
		watch:{//侦听器
			meg:function(a,b){
				console.log("meg发生了变化，由"+b+"变化成了"+a)
			}			
		},
		filters:{//过滤器
			len:function(val){
				var le=val.length
				return "您已输入"+le+"个字符"
			},
			qwe(val){
				var a=parseInt(val.slice(4));
				console.log(a)
			}
		}
	}
</script>

<style>
</style>
