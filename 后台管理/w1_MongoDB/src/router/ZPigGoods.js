const express = require('express');

const Router = express.Router();

const {insert,remove,find,update} = require('../db/mongo');//这里才是其作用的代码连接封装好的mongodb
const {formatData,token} = require('../utils') // 引入token
// token放到了 indexjs 里面 index.js时候utils里面的

// 增：注册用户
Router.post('/reg',async (req,res)=>{
    let {username,password,age,gender,city,telephone} = req.body;
    let data
    try{
        insert('ZPigGoods',{username,password,age,gender,city,telephone});//{username,password,age,gender}
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
        data = await find('ZPigGoods',{username});//{username,password,age,gender}
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
    let {username,password} = req.body;
    let data
    try{      //这里user数据库名字  用户名和密码 
        data = await find('ZPigGoods',{username,password});//{username,password,age,gender}
        
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
        remove('ZPigGoods', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})
// api   CRUD代表增加
// 查（获取所有用户）：get /user  limt数量--限制数量 skip(数量)跳过限制数量 （limt和skip可以写分页） sort是排序
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query; //这句话代表接受前端接受的东西  //skip:1 代表一页limit代表这个一页有两条数据
    // let data = await find('ZPigGoods',{},{skip:1,limit:2,sort:"age",asc:true});  //asc:true 升序  （false）降序
    let data = await find('ZPigGoods',{},{skip,limit,sort}); 
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{ 
    let {id} = req.params;
    let data = await find('ZPigGoods',{_id:id});
    res.send(formatData({data}))
})
//改  添加用户 update 是接口名字  user是 数据库名字 http://localhost:1906/user/update

// Router.post('/update', async(req, res) => {
//     let {
//         username,
//         pass,
//         age,
//         gender,
//         city,
//         telephone,
//         id
//     } = req.body;
 
//     let data = await update('ZPigGoods', {
//         id:id
        
//     }, {
//         $set: {
//             username:username,
//             pass:pass,
//             age:age,
//            gender:gender,
//            city:city,
//            telephone:telephone
//         }
//     });
//     console.log(id);
//     console.log(username,pass,age,gender,city,telephone,);
    
//     res.send(formatData({
//         data
//     }))
//     console.log(data);
// })

Router.patch('/:id', (req, res) => {
    let {
        id,
    } = req.params;
    let {       
        username,
        password,
        age,
        gender,
        city,
        telephone,
    } = req.body;
    try {
        if (username) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    username:username
                }
            })
        }
        if (password) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    password:password
                }
            })
        }

        if (age) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    age: age
                }
            })
        }
        if (gender) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    gender: gender
                }
            })
        }
        if (city) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    city: city
                }
            })
        }
        if (telephone) {
            update('ZPigGoods', {
                _id: id
            }, {
                $set: {
                    telephone: telephone
                }
            })
        }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
    // console.log(username,password,age,gender,city,telephone);
})

module.exports = Router;