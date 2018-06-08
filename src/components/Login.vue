<template>
  <div class="login">
      <el-container class="login_container">
          <el-header class="login_header">
              <h3>BLOGS</h3>
          </el-header>

          <!-- 登录主体部分 -->
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
                  <el-button type="primary" @click="gocheck()" class="loginbtn" id="loginBtn" round>Login</el-button>
                  <p class="login_register">Don't have an account? <router-link to="/register">Register</router-link> now</p> 
			</form>
            <!-- <router-view></router-view> -->
            </div>
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
export default {
  name: 'login',
  data () {
    return {
      msg: 'App',
      user_name:'',
      user_psd:'',

    }
  },
  methods:{
      gocheck(){
          alert('123');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

.login{
    /* background-color:rgb(175, 53, 53); */
    background: url(../images/login.jpg);
    margin: 0 auto;
    padding: 0;
    /* height: 500px; */
}
.login_main{
    background:#fff;
    width: 28%;
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
    margin-top: 10px;
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
