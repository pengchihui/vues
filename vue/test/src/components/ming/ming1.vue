<template>
	<div>
		<p>普通数据</p>
		<p>
			<span>{{num}}</span><br/>
			<span>{{obj.name}}</span><br/>
			<span>{{bool}}</span><br/>
		</p>
		<p>v指令 v-bind v-if v-else-if v-else v-show v-on:click=@</p>
        <span v-bind:class="cla" :title="tit">123456789</span>
		<ul>
			<li v-for="va in arr"> {{va}} </li>
		</ul>
		<p v-if="bool">选择的为true</p>
		<p v-else="bool">选择的为false</p>
		<button v-on:click="asw">切换</button>
		<ul>
			<li v-for="obj in arr_obj">{{obj.name}}--{{obj.age}}</li>
		</ul>
		<button v-on:click="bk">节点	<a href="javascript:;">12345</a></button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tit:"标题",
				num:343,
				obj:{name:"lijie",age:32},
				arr:[15,35,455,63,25],
				arr_obj:[{name:"lijie",age:22},{name:"xingjie",age:32},{name:"guijie",age:42}],
				cla:"on",
				bool:false
			}
		},
        methods:{
			slecte:function(){ return 145},
			sth:function(){return this.obj},
			asw:function(){
				this.bool=!this.bool;
				console.log(this)
			},
			      ck:function(e){
			},
			bk(e){
				/* 当前节点 */
				let curentarge=e.currentTarget;
				/* 最终作用的节点 */
				let tar=e.target;
				let hi=tar.hide();
				
				console.log(curentarge);
				console.log(tar);
				// console.log(hi);
				
			}
		}		
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	ul,ol li{list-style: none;}
	span{color: Orchid; font-size: 15px;}
	.on{color: #42B983;}


</style>
