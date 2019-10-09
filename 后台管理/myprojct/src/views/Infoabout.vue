
  <template>
  <!-- 备用代码 -->
    <div class="addgoods">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加商品</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品描述" prop="title" style="width:800px;">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="店铺" prop="subname" style="width:400px">
          <el-input v-model="ruleForm.subname"></el-input>
        </el-form-item>
         <el-form-item label="浏览" prop="surf" style="width:400px">
          <el-input v-model="ruleForm.surf"></el-input>
        </el-form-item>
        <el-form-item label="原价" prop="oldprice" style="width:400px">
          <el-input v-model="ruleForm.oldprice"></el-input>
        </el-form-item>
        <el-form-item label="现价" prop="price" style="width:400px">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
         <el-form-item label="库存" prop="qty" style="width:400px">
          <el-input v-model="ruleForm.qty"></el-input>
        </el-form-item>
        <el-form-item label="上架" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <div class="demo-image">
          <el-upload
            action="http://localhost:1906/upload/goods"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="successful"
            name="goods"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>

        <el-form-item style="margin-top:30px">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        ruleForm: {
          title: "",
          subname: "",
          surf:"",
          oldprice: "",
          price: "",
          delivery: false,
          qty:"",
          src: []
        },
        rules: {
          title: [
            { required: true, message: "请输入商品名称", trigger: "blur" },
            {
              min: 3,
              max: 500,
              message: "长度在 3 到 500 个字符",
              trigger: "blur"
            }
          ],
          subname: [{ required: true, message: "请输入店铺名", trigger: "blur" }],
           surf: [{ required: true, message: "请输入店铺名", trigger: "blur" }],
          oldprice: [
            { required: true, message: "请输入商品原价", trigger: "blur" }
          ],
          price: [{ required: true, message: "请输入商品现价", trigger: "blur" }],
          qty: [{ required: true, message: "请输入商品库存", trigger: "blur" }],
        },
        dialogImageUrl: "",
        dialogVisible: false,
      };
    },
    methods: {
      cancel() {
        this.$router.push("/foundlist");
      },

      submitForm(formName) {


        //  console.log( this.ruleForm);

        this.$refs[formName].validate(async valid => {
          if (valid) {
            console.log(this.ruleForm.delivery);

            let { data } = await this.$axios.post(`http://localhost:1906/goodsAdmin/reg`, {
              qty:this.ruleForm.qty,
              oldprice: this.ruleForm.oldprice,
              price: this.ruleForm.price,
              subname: this.ruleForm.subname,
                surf: this.ruleForm.surf,
              src: this.ruleForm.src,
              title: this.ruleForm.title,
              delivery: this.ruleForm.delivery
            });
            if (data.code === 1) {
              this.$message({
                message: "添加成功!",
                type: "success"
              });
              setTimeout(() => {
                this.$router.push("/foundlist");
              }, 500);
            }
          } else {
            
            return false;
          }
        });
      },

      handleRemove(file) {
        let { response } = file;
        this.ruleForm.src.forEach((ele, i) => {
          if (ele === response[0].filename) {
            this.ruleForm.src.splice(i, 1);
          }
        });
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      successful(response) {
        this.ruleForm.src.push(response[0].filename);
      }
    }
  };
  </script>
  <style scope>
  .classification {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    margin-left: 58px;
  }
  </style>
