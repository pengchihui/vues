<template>
	<div>
		<router-link to="/">点击1</router-link>
		<router-link to="/123">点击2</router-link>
		<router-link to="/456">点击3</router-link>
		
		<div :[zxc]="ghi?'on':''">{{def}}</div>
		
		<br/>
	    <router-link to="/ming1">ming1</router-link>
	    <router-link to="/ming2">ming2</router-link>
		<router-link to="/ming3">ming3</router-link>
		
	</div>
</template>

<script>
	export default{
		props:["def","ghi"],
		data(){
			return {
				zxc:"class"
			}
		}
	}
</script>

<style>
</style>
