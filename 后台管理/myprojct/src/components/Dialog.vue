  <template>
  <div class="dialog">
    <!--title是对话框标题   -->
    <!--  sync 关闭 visible="dialog.show可以设置调用foundlist 设置对话框的隐藏和显示 -->
    <el-dialog title="添加商品信息" :visible.sync="dialog.show" :close-on-click-modala="false" :close-on-press-escape="false"
      :modal-append-to-body="false">
      <div class="form">
        <!-- ref=“ruleForm” 获取节点 el-orm 打印的结果又以下所有节点 -->
        <!-- element-ui验证规则，需要表单标签el-form上加上:rules="rules"，然后与表单内输入框input上绑定prop对应的验证 -->
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" style="margin:10px;width:auto;">
          <el-form-item label="商品类型:" prop='type'>
            <el-select v-model="ruleForm.type" placeholder="商品类型">
              <el-option v-for="(formtype, index) in format_type_list" :key="index" :label="formtype" :value="formtype">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop='title' label="商品名称:">
            <el-input type="title" v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item prop='subname' label="店铺名称:">
            <el-input type="subname" v-model="ruleForm.subname"></el-input>
          </el-form-item>
          <el-form-item prop='surf' label="浏览人数:" style="width:350px">
            <el-input type="surf" v-model="ruleForm.surf"></el-input>
          </el-form-item>
         <el-form-item label="原价" prop="oldprice" style="width:350px">
          <el-input v-model="ruleForm.oldprice"></el-input>
        </el-form-item>
          <el-form-item prop='price' label="商品价格:" style="width:350px">
            <el-input type="price" v-model="ruleForm.price"></el-input>
          </el-form-item>
          <el-form-item prop='qty' label="商品库存:" style="width:350px">
            <el-input type="qty" v-model="ruleForm.qty"></el-input>
          </el-form-item>
          <el-form-item label="点击即可上架" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <div class="demo-image">
          <!-- 固定样式 action当提交表单时候表单数据会被发送  
          头像上传结合数据库使用-->
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
            <!-- 图片 -->
          </el-dialog>
        </div>  

          <el-form-item class="text_right">
            <el-button @click="dialog.show = false">取 消</el-button> 
            <!-- false为隐藏 true为显示 -->
            <el-button  @click='onSubmit("ruleForm")'>提 交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Upload
  } from 'element-ui'
  Vue.use(Upload.name, Upload) //按需加载
  export default {
    name: "dialog",
    // name: "logfound",
    // created() {
    //   this.$route.params.id
    // },
    data() {
      return {  //已开始为空
        ruleForm: {
          type: "",
          title: "",
          subname: "",
          surf: "",
          oldprice: "",
          price: "",
          delivery: false,
          qty: "",
          id: "",
          src: []
        },
        format_type_list: [
          "上衣",
          "帽子",
          "裤子",
          "鞋子",
          "童装",
          "睡衣"
        ],
        rules: {
          title: [{
            required: true,
            message: "商品描述不能为空！",
            trigger: "blur"
          }],
          subname: [{
            required: true,
            message: "店铺不能为空！",
            trigger: "blur"
          }],
          qty: [{
            required: true,
            message: "库存不能为空！",
            trigger: "blur"
          }],
          price: [{
            required: true,
            message: "商品价格不能为空！",
            trigger: "blur"
          }],
           oldprice: [{
            required: true,
            message: "商品价格不能为空！",
            trigger: "blur"
          }]
        },
        dialogImageUrl: "",
        dialogVisible: false, // 
      };
    },
    methods: {
      async upload() {
        let mydata = new ruleForm();
        for (let i = 0; i < this.$refs.file.files.length; i++) {
          mydata.append('goods', this.$refs.file.files[i])
        }
        let {
          data
        } = await this.$axios.post('http://localhost:1906/upload/goods', mydata);
        // console.log(data)
      },
      onSubmit(formName) {
        this.$refs[formName ].validate(async valid => {
          if (valid) {
            let {
              data
            } = await this.$axios.post(
              "http://localhost:1906/goodsAdmin/reg", {
                // title ：this.ruleForm.subname 意思请求到数据传给这个this.ruleForm.title  返回给后端接受前端传后端的数据
               title:this.ruleForm.title,
                subname: this.ruleForm.subname,
                surf:this.ruleForm.surf,
                oldprice: this.ruleForm.oldprice,
                price:this.ruleForm.price,
                qty:this.ruleForm.qty,
                src:this.ruleForm.src,
                delivery: this.ruleForm.delivery
              }
            );
            if (data.code === 1) {
              //后端返回到前端的状态码成功的  
              // this.$router.push("./Infoshow"); //跳转 先跳转到登录页面然后在显示成功的注册
              // 请求成功的显示提示 注册成功
              this.$message({
                message: "成功！",
                type: "success"
              });
              // 当成功时隐藏对话框dialog
              // this.dialog.show = false;  
              // this.$router.push("/foundlist"); 错误不可以这样续写
              setTimeout(()=>{  //一秒后父页刷新  对话框隐藏
             parent.location.reload(); // 父页面刷新
             var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
              parent.layer.close(index);  
              this.dialog.show = false;   // 当成功时隐藏对话框dialog 
              },1000)

            }
          } else {
            console.log("error submit!!");``
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
    },
    props: {
      dialog: Object,
    }
  };
</script>
<style scoped>
</style>