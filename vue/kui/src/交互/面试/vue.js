在声明周期里完成数据 及其 事件操作

:src =>v-bind:src

router-link to="" tag="li"  tag能赋值  也能赋值想要的所有标签 ul a span p

v-if v-show

1.  总结就是v-if 是通过条件判断来添加和删除DOM元素。
    v-show是通过display：block和display:none来控制元素的显示隐藏。,
2.  v-if 是有惰性的，如果初始条件为假值，则直接什么也不做，
    只有在条件变为真时才开始局部编译；v-show是在任何条件都被编译，
    然后被缓存，而且DOM元素保留，即使为假值时，
    在后台仍然可以看到DOM元素已经被渲染出来。
3.  v-if适合在条件不太可能变化时使用，v-show适合频繁切换。
4.  v-if后面可以跟v-else,或v-else-if,但v-show 不可以


页面路由跳转
{{this.$router.push('/')}}

$route为当前router跳转对象里面可以获取name、path、query、params等

router为VueRouter实例，想要导航到不同URL，则使用router.push方法

返回上一个history也是使用$router.go方法
