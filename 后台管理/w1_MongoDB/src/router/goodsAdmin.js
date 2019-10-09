const express = require('express');

const Router = express.Router();

const {insert,remove,find,update} = require('../db/mongo');//这里才是其作用的代码连接封装好的mongodb
const {formatData,token} = require('../utils') // 引入token
// token放到了 indexjs 里面 index.js时候utils里面的

// 增：注册用户
Router.post('/reg',async (req,res)=>{
    // let Date = Date.now 
    let {type,title,subname,src,surf,oldprice,price,qty,delivery} = req.body;
    let data
    try{
        insert('goodsAdmin',{type,title,subname,src,surf,oldprice,price,qty,delivery});//{username,password,age,gender}
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 验证用户名是否存在 这里不用验证
// Router.get('/check',async (req,res)=>{
//     let {username} = req.query;
//     let data
//     try{
//         data = await find('goodsAdmin',{username});//{username,password,age,gender}
//         data = data[0];
//         if(data){
//             res.send(formatData({code:0}))
//         }else{
//             res.send(formatData())
//         }
//     }catch(err){
//         res.send(formatData({code:0})) //失败状态码 
//     }
// })
// 登录  
Router.post('/login',async (req,res)=>{
    let {username,password} = req.body;
    let data
    try{      //这里user数据库名字  用户名和密码 
        data = await find('goodsAdmin',{username,password});//{username,password,age,gender}
        
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
        remove('goodsAdmin', {
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
    // let data = await find('goodsAdmin',{},{skip:1,limit:2,sort:"age",asc:true});  //asc:true 升序  （false）降序
    let data = await find('goodsAdmin',{},{skip,limit,sort}); 
    res.send(formatData({data}))
})
// 这个是查询数据上面是带有功能的
Router.get('/:id',async (req,res)=>{ 
    let {id} = req.params;
    let data = await find('goodsAdmin',{_id:id});
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
 
//     let data = await update('goodsAdmin', {
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
        type,
        title,
        subname,
        src,
        surf,
        oldprice,
        price,
        qty,
        delivery
    } = req.body;
    try {
        if (type) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    type:type
                }
            })
        }
        if (title) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    title:title
                }
            })
        }
        if (subname) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    subname:subname
                }
            })
        }

        if (src) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    src: src    
                }
            })
        }
        if (surf) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    surf: surf
                }
            })
        }
        if (price) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    price: price
                }
            })
        }
        if (oldprice) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    oldprice: oldprice
                }
            })
        }
        if (qty) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    qty: qty
                }
            })
        }
        if (delivery) {
            update('goodsAdmin', {
                _id: id
            }, {
                $set: {
                    delivery: delivery
                }
            })
        }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
    console.log(title,subname,src,surf,oldprice,price,qty,delivery,type);
})

module.exports = Router;