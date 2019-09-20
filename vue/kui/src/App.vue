<template>
    <div id="app">
      <!-- <headerly></headerly>
       <router-view />
       <footerly></footerly> -->


       <router-view />

     </div>
</template>

<script>
  /* 公共的头部与底部 */
import headerly from './components/commen/header.vue';
import footerly from './components/commen/footer.vue';

export default {
  name: 'App',
  components: {
    headerly,
    footerly
  },
		data(){
			return{

			}
		},
		created(){
			if(this.$router.path !== "/"){
				 this.$router.replace('/')
			}
		},
    mounted(){

    },
    watch:{
        '$route'(){
          var path=this.$route.path;
          if(path == "/market" || path== "/down"){
               $(".footer").css({"margin-top":"0"})
          }else{
               $(".footer").css({"margin-top":"90px"})
          }
        }
    }
};

 /* 响应式布局 */





</script>

<style lang="less">

*{padding: 0;margin: 0;}

a {text-decoration: none; outline: none}
ul{
  list-style: none;
}
.size {
  width: 100%;
  height: 100%;
}

#app {
  .size;
}

</style>
