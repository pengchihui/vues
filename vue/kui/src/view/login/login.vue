<style lang="less">
.login{
  min-width:1200px;
    width:100%;
    height:47.1875rem;
    background-image: url(../../assets/login/ling.jpg);
    background-size: contain;
    background-position: center;
    position: relative;
       &-con{
              position: absolute;
              right: 160px;
              top: 350px;
              transform: translateY(-60%);
              width: 250px;
              .form-con{
                  padding: 10px 0 0;
              }
              .login-tip{
                  font-size: 10px;
                  text-align: center;
                  color: #c3c3c3;
              }
          }

}


</style>
<template>
    <div class="login">
       <div class="login-con" style="background:rgba(28,25,93,0.13);border:1px solid rgba(184,181,247,1);border-radius:9px;padding: 20px;">
           <div style="width: 100%;text-align: center;color: #fff;font-size: 1.25rem;">登录</div>
           <div class="form-con">
               <login-form @on-success="handleSubmit"></login-form>
               <p class="login-tip">输入任意用户名和密码即可</p>
           </div>
       </div>
    </div>
</template>

<script>
import LoginForm from '@/components/login-form/login-form.vue';
export default{
  components: {
         LoginForm,
  },
  methods: {
    /* 子向父传值*/
    handleSubmit({userName, password}){
       /* this.$store.commit('setToken', '123')
       this.$store.commit('setUserId', 'qwe')
       this.$router.push({
          name: this.$config.homeName
        }) */
//        this.$http.post('index.php/gmlogin', { user: userName, pwd: password }).then(e => {
//          this.$Message.success('登录成功');
//          setToken(e.token);
//          this.$store.commit('setToken', e.token);
//          this.$store.commit('setUserId', e.userId);
//          this.$router.push({
//            name: this.$config.homeName
//          });
//        });

       /*   this.handleLogin({
         userName,
         password
       }).then(res => {
         this.getUserInfo().then(res => {
           this.$router.push({
             name: this.$config.homeName
           })
         })
       }) */

    }
  },

}

</script>

<style>



</style>
