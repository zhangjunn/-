    const express = require('express');

const Router = express.Router();

const {insert,remove,find,update} = require('../db/mongo');//这里才是其作用的代码连接封装好的mongodb
const {formatData,token} = require('../utils') // 引入token
// token放到了 indexjs 里面 index.js时候utils里面的

// 增：注册用户
Router.post('/reg',async (req,res)=>{
    let {username,password,age,gender,city,email,telephone} = req.body;
    let data
    try{
        insert('user',{username,password,age,gender,city,email,telephone});//{username,password,age,gender}
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 验证用户名是否存在 注册
Router.get('/check',async (req,res)=>{
    let {username} = req.query;
    let data
    try{
        data = await find('user',{username});//{username,password,age,gender}
        data = data[0];
        if(data){
            res.send(formatData({code:0}))
        }else{
            res.send(formatData())
        }
    }catch(err){
        res.send(formatData({code:0})) //失败状态码 
    }
})
// 登录  
Router.post('/login',async (req,res)=>{
    let {username,password,phone,code} = req.body;
    let data
    try{      //这里user数据库名字  用户名和密码 
        data = await find('user',{username,password,phone,code});//{username,password,age,gender}
        
        data = data[0] //判断是否有数据

        // 生成token，并返回前端  authorization 其实就是token的另外个名字  
        let authorization = token.create(username);
        if(data){                       // 具体请看postman一个data 里面包裹着其他
            res.send(formatData({data:{_id:data._id,username:data.username,authorization}}))
    //返回前端
        }else{
            res.send(formatData({code:0}))
        }
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 删 http://localhost:1906/user/delete
// Router.post('/delete',(req,res)=>{
//     let {username} = req.body;
//     // let data
//     console.log(username);
    
//     try{
//         remove('user',{username:username})
//         res.send(formatData())
//     }catch(err){
//         res.send(formatData({code:0}))
//     }
// })
Router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;
    let data
    try {
        remove('user', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})
// 查（获取所有用户）：get /user
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('user',{},{skip,limit,sort});
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let data = await find('user',{_id:id});
    res.send(formatData({data}))
})
//改  添加用户 update 是接口名字  user是 数据库名字 http://localhost:1906/user/update

Router.post('/update', async(req, res) => {
    let {
        username,
        id
    
    } = req.body;
    let data = await update('user', {
        id:id*1
        
    }, {
        $set: {
            username:username
        }
    });
    res.send(formatData({
        data
    }))
})

module.exports = Router;