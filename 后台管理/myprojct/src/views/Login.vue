<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">在线后台管理系统</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" label-width="100px"  class="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="gotoreg" class="submit_btn">登录 </el-button>
        </el-form-item>
        <div class="tiparea">
          <p>还没有账号？现在<router-link to='/register'>注册</router-link>
          </p>
        </div>
      </el-form>
    </section>
  </div>
</template>
<script>

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.loginForm.validateField("checkPass");
          }
          callback();
        }
      };

      return {
        ruleForm: {
          username: "",
          pass: "",
          checkpass: ""
        },
        rules: {
          pass: [{
              required: true,
              message: "必须添加密码",
              trigger: "blur"
            },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
          username: [{
            required: true,
            message: "必须填写用户名",
            trigger: "blur"
          }, ]
        }
      };
    },
    methods: {
      gotoreg() {
        this.$refs["loginForm"].validate(async valid => {
          if (valid) {
            // alert('submit!');
            let {
              data
            } = await this.$axios.post('http://localhost:1906/user/login', {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            });
            if (data.code === 1) {
              localStorage.setItem("username",this.ruleForm.username); 
              let targetUrl = this.$route.query.targetUrl || './Index' //代替if else 写法
              // if(this.$route.query.targetUrl){ //如果有目标地址就跳转到目标地址
              this.$router.push(targetUrl);
              //  }   
              // else{
              //   this.$router.push('/mine');  
              // }
              //保存token到本地 把token
              
              localStorage.setItem('Authorization', data, data.authorization)
            } else {
              alert('用户或密码错误');
            }
          } else {
            // console.log("error submit!!");
            return false;
          }
        });
      }
    }
  };
</script>
<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpg) no-repeat center center;
    background-size: 100% 100%;
  }

  .form_container {
    width: 370px;
    height: 210px;
    position: absolute;
    top: 20%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }

  .form_container .manage_tip .title {
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }

  .loginForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }

  .submit_btn {
    width: 100%;
  }

  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
  }

  .tiparea p a {
    color: #409eff;
  }
</style>