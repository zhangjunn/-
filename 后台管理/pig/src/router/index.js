import Vue from 'vue'
import Discover from '../components/Discover.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Mine from '../components/Mine.vue'
import News from '../components/News.vue'
import Reg from '../components/Reg.vue'
import destList from '../components/destList.vue'
import About from '../components/About.vue'
import Consult from '../components/Consult.vue'
import Country from '../components/Country.vue'
import Oder from '../components/Oder.vue'
import VueRouter from 'vue-router';
import InputGroup from "../components/InputGroup"
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { name: '', path: '/', redirect: '/Home' },
        { name: 'Home', path: '/Home', component: Home},
        { name: 'News', path: '/News', component: News },
        { name: 'Login', path: '/Login', component: Login },
        { name: 'reg', path: '/reg', component: Reg },
        { name: 'destList', path: '/destList', component: destList },
        { name: 'Mine', path: '/Mine', component: Mine },
        { name: 'discover', path: '/discover', component: Discover },
        { name: 'About', path: '/About', component: About },
        { name: 'Consult', path: '/Consult', component: Consult },
        { name: 'Country', path: '/Country', component: Country },
        { name: 'Oder', path: '/Oder', component: Oder },
        { name: 'InputGroup', path: '/InputGroup', component: InputGroup },
        // { name: 'detail', path: '/detail/:id', component: Detail},
    ]
})
// router.beforeEach((to, from, next) => {  
//     // console.log('invisible',to);
//     //1、判断是否需要登录权限
//     // if (to.meta.invisible) {
//         if(to.matched.some(item=>item.meta.invisible)){
//         //2、判断是否已登录
//         let authorization = localStorage.getItem('authorization');
//         if (authorization) {
//             next()
//             // console.log('ok1')
//         } else {
//             next({
                
//                 query: { targetUrl: to.fullPath },
//                 path: '/Login',
//             })
//             // console.log('ok2')
//         }
//     } else {
//         next()
//         // console.log('ok3')
//     }
    

// })
export default router;

