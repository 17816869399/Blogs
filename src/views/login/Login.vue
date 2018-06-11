<template>
  <div class="login">
      <el-container class="login_container">
          <el-header class="login_header">
              <h3>BLOGS</h3>
          </el-header>

          <!-- 登录、注册主体部分 -->
          <el-main class="login_main">
            <div class="login_main_form">
            <h1>Login</h1>
            <form id="userLogin" method="post" autocomplete="off">
                  <div class="username">
                    <el-input    v-model="user_name" class="username_input"  placeholder="Emial or Phone" clearable></el-input>
                  </div>
                  <div class="password">
                    <el-input  v-model="user_psd" class="password_input" type="password" placeholder="password" clearable></el-input>        
                  </div>
                  <el-button type="primary" @click="Gocheck()" class="loginbtn" id="loginBtn" round>Login</el-button>
                  <p class="login_register">Don't have an account? <span @click="ToRegister()">Register</span> now</p> 
			</form>

            </div>
            <!-- 注册 -->
            <!-- <div class="register_main_form" v-show="showRegister">
            <h1>Register</h1>
            <form id="userLogin" method="post" autocomplete="off">
                  <div class="newsusername">
                    <el-input  v-model="newuser_name" class="username_input"  placeholder="Emial or Phone" clearable></el-input>
                  </div>
                  <div class="newspassword">
                    <el-input  v-model="newuser_psd" class="password_input" type="password" placeholder="password" clearable></el-input>        
                  </div>
                  <el-button type="primary" @click="Gocheck()" class="loginbtn" id="loginBtn" round>Register</el-button>
                  <!<p class="login_register">Already have an account? <router-link to="/register">Login</router-link> now</p>  -->
                  <!-- <p class="login_register">Already have an account? <span :click="ToLogin()">Login</span> now</p>                   
			</form>

            </div> --> 
            
          </el-main>
          <!-- 登录底栏 -->
          <el-footer class="login_footer">
              <p>Copyright &copy; Blog.</p>
          </el-footer>
      </el-container>
   <!-- <h2>woshilogin</h2>
            <el-button type="info">信息按钮</el-button> -->
  </div>
</template>

<script>

import LoginCheck from '../../logic/login.js'

export default {
  name: 'login',
  data () {
    return {
      msg: 'App',
      user_name:'',
      user_psd:'',
    //   newuser_name:'',
    //   newuser_psd:'',
    //   showLogin: true,
    //   showRegister: false,
    //   showTishi: false,
    }
  },
  methods:{
      Gocheck(){
          if(this.user_name == ""||this.user_psd == ""){
              alert("用户名或者密码不能为空");
              }else{

                let data = {'user-name':this.user_name,'password':this.user_psd}
                // LoginCheck(this.user_name,this.user_psd);
                var api = 'http://47.95.205.248:8080/user/login';
                this.$http.post(api,data).then((response)=>{
                    console.log(response);
                
                //    setTimeout(function(){
                //       this.$router.push('/home')
                //   }.bind(this),1000)
                },function(err){
                    console.log(err);
                })
              }
      },
      ToRegister(){
          alert('123');          
      },
      ToLogin(){

      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

.login{
    /* background-color:rgb(175, 53, 53); */
    background: url(../../images/login.jpg);
    margin: 0 auto;
    padding: 0;
    /* height: 500px; */
}
.login_main{
    background:#fff;
    width: 500px;
    /* height: 400px; */
    margin: auto;
    border-radius: 15px;

}
.login_main_form{
    padding: 0 10px;
    /* background-color: red; */
    /* border: 1px solid red; */
}
.password_input{
    margin-top:15px;
}

.login_footer{
    /* background-color: #000; */
    margin-top:100px;
    /* opacity:0.3; */
    color: #000;
}
.login_header{
    background: rgb(0, 0, 0);
    margin-bottom:100px;
    color: #fff;
    /* opacity:0.3; */
}
.loginbtn{
    width: 300px;
    margin-top: 25px;
}
.login_register{
    padding-top: 10px 0 0 0 ;
}

h1, h2 {
  font-weight: normal;
  font-size:30px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
