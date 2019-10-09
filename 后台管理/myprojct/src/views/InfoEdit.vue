<template>
  <div class="Edit">
    <div class="bianji">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model="ruleForm.age" autocomplete="off" ></el-input>
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
          <el-button type="primary" @click="submitForm('ruleForm')">编辑用户</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Edit",
    data() {
      return {
        ruleForm: {
          username:"",
          password: "",
          checkpass: "",
          age:"",
          gender:"",
          city:"",
          telephone:""
        },
        rules: {
          username: [{
              required: true,
              message: "请输入用户名字",
              trigger: "blur"
            },
            {
              min: 3,
              max: 500,
              message: "长度在 3 到 500 个字符",
              trigger: "blur"
            }
          ],
           password:[{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ],
         age: [{
              required: true,
              message: "请输入年龄",
              trigger: "blur"
            }],
          gender:[{
              required: true,
              message: "请输入性别",
              trigger: "blur"
            }
          ],
           city:[{
              required: true,
              message: "请输入城市",
              trigger: "blur"
            }],
           telephone:[{
              required: true,
              message: "请输入电话号码",
              trigger: "blur"
            }],

        },
        _id: "",
      }
    },
    methods: {
     cancel() {
      this.$router.push("/InfoShow");
    },
    submitForm(formName) {
         console.log(this.ruleForm);
        this.$refs[formName].validate(async valid => {
         if(valid){
              let _id = this._id;
              // console.log(this.ruleForm.delivery);
              let{data} = await this.$axios.patch(
                `http://localhost:1906/userAdmin/${_id}`,{
                  username: this.ruleForm.username,
                  password:this.ruleForm.password,
                  age:this.ruleForm.age,
                  gender:this.ruleForm.gender,  
                  city:this.ruleForm.city,
                  telephone:this.ruleForm.telephone,    
                  // id:this.ruleForm.id,    
                }
              );
              if(data.code === 1){
               this.$message({
                message: "编辑成功!",
                type: "success"
              });
                setTimeout(() => {
                this.$router.push("/InfoShow");
              }, 500);
              }
         }else{
           console.log("error submit!!");
           return false;
         }
        });
     },
    },
   async created() {
      let {
        id
      } = this.$route.query;
        console.log(id);
      let {
        data: {
          data
        }
      } = await this.$axios.get(
        `http://localhost:1906/userAdmin/${id}`
      );
      this._id = id;
    },
    
  };
</script>
<style scoped>
  .Edit {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>