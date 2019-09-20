<template>
	<div>
		{{meg}}
		<input type="text" v-model="meg" v-on:keydown.37="test">
		{{opm}}
		<div :class="{box:bool}"></div>
		<div v-trun>{{str}}</div>
		{{str}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				meg:"asd",
				name:"box",
				bool:true,
				str:"asdsgdfyrtjf"
			}
		},
		directives:{
			trun(el){
				var str=el.innerHTML;
				el.innerHTML=str.split("").reverse().join("")
			}
		},
		props:["opm"],
		methods:{
			test(){
				console.log(789)
			}
		},
		beforeCreate(){
			console.log(this.meg);
			//alert(123);
		},
		created(){
			console.log(this.meg="666");
			//console.log(document.documentElement.style.background="red")
			//alert(456)
		},
		beforeMount(){
			//alert(789);//<div>{{meg}}</div>
		},
		mounted(){
			this.meg="666";			
			console.log(document.documentElement)
			//alert("000");//<div>asd</div>
		}
		// beforeUpdate(){
		// 	console.log(123)
		// },
		// updated(){
		// 	console.log(456)
		// }
		
	}
</script>

<style>
</style>
