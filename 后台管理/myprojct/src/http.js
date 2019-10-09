
import axios from 'axios';

//1  映入加载 loading 
import { Message, Loading } from 'element-ui';

import router from './router'
let loading;      //定义loading变量

//2 在需要调用时： Loading.service(options);
function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '拼命加载中...', //加载显示内容
        background: 'rgba(0, 0, 0, 0.7)'    
    })
}
// 3结束动画
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
// 4 动画loading 的开始和结束和请求拦截有关联系

//5 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载  Authorization token 的另外名字 
    startLoading()
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
})

// 6响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    if(response.data.data.Authorization === false){
        router.push('/Login') 
    }
    endLoading()
    return response

}, error => { // element  loading 的message 见1下面message
    // 错误提醒
    endLoading()
    Message.error(error.response.data) 

    // const { status } = error.response
    // if (status == 401) {
    //     Message.error('token值无效，请重新登录')
    //     // 清除token
    //     localStorage.removeItem('eleToken') //清除token

    //     // 页面跳转 
    //     router.push('/login')
    // }

    // return Promise.reject(error) // error 返回过去
})


export default axios