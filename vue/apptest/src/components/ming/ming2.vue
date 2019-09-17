<template>
	<div>
		<p>ming2测试单元</p>
		<br/>
		<strong>双向数据与单向数据</strong>
		<br/><!-- placeholder="20个字符以内" -->
		<input type="text"  v-model="num1"  maxlength="20"/>
		<input type="text"  v-bind:value="num2"/>
		<input type="text"  v-bind:value="num2"/>
		<p>{{num1}}</p>
		<p></p>
		<br/>
		<strong>html与text</strong>
		     <p v-html="bs"></p>
			 <p v-text="bs"></p>
		<br/>
		<strong>计算</strong>
		     <p>{{nums}}</p>
		<br/>
		<strong>侦听器</strong>
		
		<br/>
		<strong>过滤器</strong>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				num1:123,
				num2:456,
				bs:"<h3>789</h3>",
				firstName:12,
				lastName:20,
				num3:10
			}
		},
		methods:{
			
		},
		components:{
			
		},
		computed:{
			nums:function(){
			     function sum(val){
					if(val==1){
						return 1;
					}else{
						return val*(sum(val-1));
					}
				}
			   return sum(this.num3);	
			}
		},
		filters:{
			
		},
		watch:{
			firstName:function(val){
				this.fullName=val+""+this.lastName;
			},
			lastName:function(val){
				this.fullName=this.firstName+""+val;
			}
		}
	}
	
</script>

<style>
</style>
