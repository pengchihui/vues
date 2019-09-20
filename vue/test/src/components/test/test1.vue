<template>
	<div>
		测试页一
		<h2>{{ tit }}</h2>
		<p>{{ num }}</p>
		<p>{{ bool }}</p>
		<p>{{ arr[2] }}</p>
		<p>{{ obj.name }}</p>
		v指令：
		<hr />
		<span v-bind:class="cla" :title="tit">123456789</span>
		<div v-if="bool">正确就能看到我</div>
		<div v-else-if="bool2">否则就会看到我</div>
		<div v-else>6666</div>
		<div v-show="bool">通过display隐藏</div>
		<ul>
			<li v-for="(x, m) in arr">{{ x }}---{{ m }}</li>
		</ul>
		<ul>
			<li v-for="a in arr_obj">{{ a.name }}</li>
		</ul>
		<button v-on:click="asd">点击</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tit: '标题',
			num: 66,
			bool: true,
			bool2: true,
			arr: ['a', 'b', 'c'],
			obj: { name: '张三', age: 18 },
			arr_obj: [{ name: '赵六', age: 18 }, { name: '李四', age: 18 }, { name: '王五', age: 18 }],
			cla: 'on'
		};
	},
	methods: {
		asd: function() {
			this.bool = !this.bool; //修改data数据
		}
	}
};
</script>

<style scoped>
div {
	color: red;
}
.on {
	color: green;
}
</style>
