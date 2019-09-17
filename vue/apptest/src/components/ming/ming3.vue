<template>
	<div>
		<h3>传值过程</h3>
		
		
		<h3>我小 你大  向大传值</h3>
		<br/>
		  <p> {{zou}}</p>
		<br/>
		
		<button @click="beijin">传值</button>
                             
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:100
			}
		},
		props:["zou"],
		methods:{
			beijin(){this.$emit("jieshou",this.num);}
		},
		
	}
	
</script>
<style>
	
	
</style>
