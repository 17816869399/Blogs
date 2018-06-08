
import VueResource from 'vue-resource'
import Vue from 'vue';

Vue.use(VueResource)

async function LoginCheck(username,userpwd){

    //请求数据
    let api='http://47.95.205.248:8080/user/login';
    const result = await this.$http.jsonp(api,{
        'username':username,
        'password':password
    })
    return result;
    console.log(result);
}

export default LoginCheck;