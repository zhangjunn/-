  <template>
      <div class="register">
          <section class="form_container">
              <div class="manage_tip">
                  <span class="title">在线后台管理系统</span>
              </div>
              <el-form class="registerForm" ref="registerForm" label-width="80px">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" label-width="100px"
                      class="demo-ruleForm">
                      <el-form-item label="用户名" prop="username">
                          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="pass">
                          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="确认密码" prop="checkPass">
                          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item>
                          <el-button type="primary" @click="gotoreg">注册</el-button>
                      </el-form-item>
                  </el-form>
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
                          this.$refs.regForm.validateField("checkPass");
                      }
                      callback();
                  }
              };
              var checkPass = (rule, value, callback) => {
                  if (value === "") {
                      //校验不通过 需要向给回调函数掺入一个错误对象
                      callback(new Error("请再次输入密码"));
                  } else if (value !== this.ruleForm.pass) {
                      callback(new Error("两次输入密码不一致!"));
                  } else {
                      //通过验证
                      callback();
                  }
              };
              var checkUsername = async (rule, value, callback) => {
                  // 发起请求校验用户名是否已被注册
                  let {
                      data
                  } = await this.$axios.get('http://localhost:1906/user/check', { //这个请求检查是否存在这个用户名
                      params: {
                          username: this.ruleForm.username
                      }
                  })
                  if (data.code === 0) {
                      callback(new Error("用户名已存在"));
                  } else {
                      //通过验证
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
                      checkPass: [{
                          validator: checkPass,
                          trigger: "blur"
                      }],
                      username: [{
                              required: true,
                              message: "用户名必填",
                              trigger: "blur"
                          },
                          {
                              min: 3,
                              max: 20,
                              message: "长度在 3 到 20个字符",
                              trigger: "blur"
                          },
                          {
                              validator: checkUsername,
                              trigger: "blur"
                          }
                      ]
                  }
              };
          },
          methods: {
              gotoreg() {
                  this.$refs["regForm"].validate(async valid => {
                      if (valid) {
                          // alert('submit!');
                          let {
                              data
                          } = await this.$axios.post(
                              "http://localhost:1906/user/reg", {
                                  username: this.ruleForm.username,
                                  password: this.ruleForm.pass
                                  // methods:'post', //数据类型
                              }
                          );
                          if (data.code === 1) {
                              //后端返回到前端的状态码成功的  
                              this.$router.push("./Login"); //跳转 先跳转到登录页面然后在显示成功的注册
                              // 请求成功的显示提示 注册成功 
                              this.$message({  
                                  message: "注册成功！",
                                  type: "success"
                              });
                          }
                      } else {
                          // console.log("error submit!!");
                          return false;
                      }
                  });
              }
          }
      };
  </script>>
  <style scoped>
      .register {
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
          top: 10%;
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

      .registerForm {
          margin-top: 20px;
          background-color: #fff;
          padding: 20px 40px 20px 20px;
          border-radius: 5px;
          box-shadow: 0px 5px 10px #cccc;
      }

      .submit_btn {
          width: 100%;
      }
  </style>