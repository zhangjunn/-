import Vue from 'vue'
import axios from 'axios';
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue' 
import Nofind from './views/404'
import Login from './views/Login'
import InfoShow from './views/InfoShow'
import InfoAdd from './views/InfoAdd'
import InfoEdit from './views/InfoEdit'
import FoundAdd from './views/FoundAdd'
import FoundEdit from './views/FoundEdit'
import Infoabout from './views/Infoabout'
import FoundList from './views/Foundlist.vue'
import Order from './views/Order.vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
Vue.use(VueRouter);
Vue.use(Router);

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        { path: '*', name: '/404', component: Nofind },// 如果什么都没有就访问到404
        // { path: '/', redirect: '/Index'},
         //
        { path: '/Index', name: 'Index',component:Index,meta:{requiresAuth:true},
        children: [
          { path: '', component: Home },
          { path: '/Home', name: 'Home', component: Home },
          { path: '/infoAdd', name: 'infoAdd', component: InfoAdd },   // 添加个人信息
          { path: '/InfoEdit', name: 'InfoEdit', component: InfoEdit },   // 添加个人信息
          { path: '/foundAdd', name: 'foundAdd', component: FoundAdd }, //添加商品
          { path: '/foundEdit', name: 'foundEdit', component: FoundEdit }//编辑商品
        ] 
        }, 

        { path: '/Order', name: 'Order', component: Order },
        { path: '/foundlist', name: 'foundlist', component: FoundList },
        { path: 'InfoShow', name: 'Infoshow', component: InfoShow }, 
        { path: 'InfoAdd', name: 'InfoAdd', component: InfoAdd }, 
        { path: '/Infoabout', name: 'Infoabout', component:Infoabout},
        { path: '/register', name: 'register', component: Register},
        { path: '/login', name: 'login', component: Login }, //引入登录路由 这样才可以跳转
        {path:'/',redirect:'/Login'},//重定向 输入网址后直接跳转到这里
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
      ]
})

// 添加路由守卫  拦截路由跳转 拦截到了就不会任意跳转到任意界面
  // 路由拦截
  router.beforeEach(function(to,from,next){
      if(to.matched.some(item=>item.meta.requiresAuth)){ //判断目标路由是否有登录权限
    let authorization = localStorage.getItem('Authorization'); //token已经执行要保存到本地存储
    if(authorization){ //如过已经登录就不用跳转到登录页面 如有tekenname那么就通过
      // next() ;//   如果登录了进行token校验 
      // axios.get()
      axios.get('http://localhost:1906/verify',{
        headers:{
            Authorization:authorization
        }
      }).then(res=>{
        window.console.log('then',res) 
      })
      next();
      // token的校验

    }else{
        next({ // 没有登录的 话就跳转到登录页面进行登录 否者返回到login里面
        path:'/Login',
        query:{targetUrl:to.fullPath} //去到目标地址
    })   
    }

  }else{ // 如果有权限则执行下一个
    next();
  }
  })

  export default router;  //  这里导出来  在main里面引入
