const express = require('express');
const {PORT} = require('./config.json');
const router = require('./router');

const app = express();
// 短信部分~·······················  （api  postman测试） http://localhost:1906/sms_send 手机号可以改变
 //  [{"key":"phone","value":"18827501308",}] ,[{"key":"tpl_id","value":"172633","description":""}],[{"key":"key","value":"4e874ecc96c1b783c9886c4f0db5d4bf",}]
const bodyParser = require('body-parser') //短信
const request = require('request')//短信
const querystring = require('querystring')//短信
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())   
app.post("/sms_send",(req,res)=>{
    //  console.log(req.body.phone);  
     //node request模块安装命令：npm install request
   let code = ("000000" +Math.floor(Math.random()*999999)).slice(-6);//表示取六位数据
var queryData = querystring.stringify({
    mobile: req.body.phone,  // 接受短信的用户手机号码
    tpl_id: req.body.tpl_id,  // 您申请的短信模板ID，根据实际情况修改
    tpl_value: `#code#=${code}`,  // 您设置的模板变量，根据实际情况修改 
    key:req.body.key,  // 应用APPKEY(应用详细页查询)
});

var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;

request(queryUrl, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		// console.log(body) // 打印接口返回内容
		
		var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
        // console.log(jsonObj)    
        res.json(jsonObj);//这样postman就可以使用看到了
	} else {
		console.log('请求异常');
	}
}) 
})
 
// //解决跨域
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (req.method == 'OPTIONS') {
//     res.send(200);
//   }
//   else {
//     next();
//   }
// });
// 利用中间bodyParse格式化请求参数  跨域解决
// Router.use(express.json(),express.urlencoded({extended:false}))

router.use((req,res,next)=>{
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
// 短信部分~~························
app.use(express.static('./'));
// 路由接口
app.use(router);

app.listen(PORT,()=>{
    console.log('服务器启动成功');
})