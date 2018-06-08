import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)


//1、创建组件
import Login from '../views/login/Login.vue';
import Register from '../views/register/Register.vue';
import Home from '../views/home/Home.vue';




//2、配置路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  
  
  // { path: '/news', component: News ,name:'news'},
  // { path: '/user', component: User },

  { path: '*', redirect: '/login' }   /*默认跳转路由*/
]

//3、实例化VueRouter
const router = new VueRouter({
  // 将hash模式改为history模式
  // model:'history',
	routes // （缩写）相当于 routes: routes
			})




export default router;


