const jwt = require('jsonwebtoken');

const secret = 'laoxie'; // 这里钥匙就是老谢

// 创建
function create(data,expiresIn=60*60*24){ //60*60*24 有效期限
    //生成 Token：根据传入用户名和key进行加密，并设置有效期
    let token = jwt.sign({data}, secret, {
        // data：加密的数据 
        // secret：密钥
        // expiresIn: 有效期（单位：s）
        expiresIn
    });
    return token;
}

// 校验 verify  可以理解为解密
function verify(token){
    let res = false;
    try{
        res = jwt.verify(token, secret);//得出解密后的结果Object:{data:xxx...}

    }catch(err){        
        res = false;
        // console.log('校验结果',false);  
    }

    return res;
}

module.exports = {create,verify}