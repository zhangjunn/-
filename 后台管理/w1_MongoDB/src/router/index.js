const express = require('express');

const Router = express.Router();

const {token,formatData} = require('../utils');

// 引入路由文件
const goodsRouter = require('./goods');
const userRouter = require('./user');
const uploadRouter = require('./upload');
const userAdminRouter = require('./userAdmin');
const goodsAdminRouter = require('./goodsAdmin');
const addAdminRouter = require('./addAdmin');

const ZPigGoodsRouter = require('./ZPigGoods');
const ZPigCountryRouter = require('./ZPigCountry');
const ZPigSearchRouter = require('./ZPigSearch');
// 利用中间bodyParse格式化请求参数  跨域解决
Router.use(express.json(),express.urlencoded({extended:false}))

Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH,OPTIONS");
    if(req.method=="OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    }else{
        next();
    }
})

// 商品
Router.use('/goods',goodsRouter);
Router.use('/user',userRouter);
Router.use('/userAdmin',userAdminRouter);
Router.use('/goodsAdmin',goodsAdminRouter);
Router.use('/addAdmin',addAdminRouter);

Router.use('/ZPigGoods',ZPigGoodsRouter);
Router.use('/ZPigCountry',ZPigCountryRouter);
Router.use('/ZPigSearch',ZPigSearchRouter);
Router.get('/verify',(req,res)=>{
    // 获取前端传入的token
    // 对token进行校验
    let authorization = req.header('Authorization');

    let result = token.verify(authorization);
    if(result){
        res.send(formatData({data:{authorization:true}}))
    }else{
        res.send(formatData({code:0,data:{authorization:false}}))
    }
    
});

// 上传文件接口
Router.use('/upload',uploadRouter)


module.exports = Router;