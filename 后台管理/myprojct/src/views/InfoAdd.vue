<template>
  <div class="InfoAdd">
    <div class="tianjia" style="margin :5px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加用户</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form class="registerForm" ref="registerForm" label-width="80px">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item> 
            <el-form-item label="年龄" prop="age">
            <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
          </el-form-item> 
            <el-form-item label="性别" prop="gender">
            <el-input type="text" v-model="ruleForm.gender" autocomplete="off"></el-input>
          </el-form-item> 
           <el-form-item label="城市" prop="city">
            <el-input type="text" v-model="ruleForm.city" autocomplete="off"></el-input>
          </el-form-item> 
            <el-form-item label="电话" prop="telephone">
            <el-input type="text" v-model="ruleForm.telephone" autocomplete="off"></el-input>
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="gotoreg">添加用户</el-button>
              <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-form>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: "InfoAdd",
    components: {},
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
          callback(new Error("请再次输入密码"));
        } else {
          //通过验证
          callback();
        }
      };
      var checkUsername = async (rule, value, callback) => {
        // 发起请求校验用户名是否已被注册
        let {
          data
        } = await this.$axios.get('http://localhost:1906/userAdmin/check', { //这个请求检查是否存在这个用户名
          params: {
            username: this.ruleForm.username
          }
        })
        if (data.code === 0) {
          callback(new Error("用户名已经添加,请勿重新注册"));
        } else {
          //通过验证
          callback();
        }
      };
      return {
        ruleForm: {
          username: "",
          pass: "",
          checkpass: "",
          age:"",
          gender:"",
          city:"",
          telephone:""
        },
        rules: {
          pass: [{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
            age: [{
                required: true,
                message: "请输入年龄",
                trigger: "blur"
              },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
            gender:[{
              required: true,
              message: "请输入性别",
              trigger: "blur"
            },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
           city:[{
              required: true,
              message: "请输入城市",
              trigger: "blur"
            },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
            telephone:[{
              required: true,
              message: "请输入电话号码",
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
              message: "请输入用户名",
              trigger: "blur"
            },
            {
              min: 2,
              max: 20,
              message: "长度在 2 到 20个字符",
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
    cancel() {
      this.$router.push("/InfoShow");
    },
      gotoreg() {
        this.$refs["regForm"].validate(async valid => {
          if (valid) {
            // alert('submit!');
            let {
              data
            } = await this.$axios.post(
              "http://localhost:1906/userAdmin/reg", {
                username: this.ruleForm.username,
                password: this.ruleForm.pass,
                age:this.ruleForm.age,
                gender:this.ruleForm.gender,
                city:this.ruleForm.city,
                telephone:this.ruleForm.telephone
                // methods:'post', //数据类型
              }
            );
            if (data.code === 1) {
              //后端返回到前端的状态码成功的  
              this.$router.push("./Infoshow"); //跳转 先跳转到登录页面然后在显示成功的注册
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
</script>
<style scoped>
  .InfoAdd {
    width: 100%;
    height: 100%;
    overflow: hidden;
  } 
  .registerForm {
    margin-top: 20px;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
  }

  .submit_btn {
    width: 100%;
  }
</style>