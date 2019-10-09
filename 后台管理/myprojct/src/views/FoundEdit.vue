<template>
  <div class="FoundEdit">
    <div class="Edit" style="margin :5px;">
      <router-view></router-view>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品编辑</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" style="margin:10px;width:auto;">
          <el-form-item label="商品类型:">
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
          <el-form-item prop='surf' label="浏览人数:">
            <el-input type="surf" v-model="ruleForm.surf"></el-input>
          </el-form-item>
          <el-form-item label="原价" prop="oldprice">
            <el-input v-model="ruleForm.oldprice"></el-input>
          </el-form-item>
          <el-form-item prop='price' label="商品价格:">
            <el-input type="price" v-model="ruleForm.price"></el-input>
          </el-form-item>
          <el-form-item prop='qty' label="商品库存:">
            <el-input type="qty" v-model="ruleForm.qty"></el-input>
          </el-form-item>
          <el-form-item label="点击即可下架" prop="delivery">
            <el-switch v-model="ruleForm.delivery"  @change="getswitch"></el-switch>
          </el-form-item>
          <div class="demo-image">
            <el-upload action="http://localhost:1906/upload/goods" list-type="picture-card"
              :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="successful" name="goods">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
          <el-form-item class="text_right">
            <el-button @click="cancel">取 消</el-button>
            <!-- 这里“ruleForm”要写不写要validate defind-->
            <el-button type="primary" @click='onSubmit("ruleForm")'>提 交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {
    Upload
  } from 'element-ui'
  Vue.use(Upload.name, Upload)
  export default {
    name: "FoundEdit",
    components: {},
    data() {
      return {
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
        dialogVisible: false,
      };
    },
    methods: {
      cancel() {
        this.$router.push("/foundlist");
      },
      getswitch(val) {
        this.ruleForm.delivery = val;
      },
      onSubmit(formName) {
        console.log(this.ruleForm);
        this.$refs[formName].validate(async valid => {
          if (valid) {
            // let _src = this.img != 0 ? this.img : this.storagesrc;
            let _id = this._id;
            let {
              data
            } = await this.$axios.patch(
              `http://localhost:1906/goodsAdmin/${_id}`, {
               title:this.ruleForm.title,
                subname: this.ruleForm.subname,
                surf:this.ruleForm.surf,
                oldprice: this.ruleForm.oldprice,
                price:this.ruleForm.price,
                qty:this.ruleForm.qty,
                src:this.ruleForm.src,
                // src: _src,
                delivery:this.ruleForm.delivery
                // id:this.ruleForm.id,    
              }
            );
              if (data.code === 1) {
              this.$message({
                message: "成功！",
                type: "success"
              });
                 setTimeout(() => {
                this.$router.push("/foundlist");
              }, 500);
            }
            console.log(this.ruleForm.delivery);
          } else {
            console.log("error submit!!");
            ``
            return false;
          }
        });
      },
      handleRemove(file) {
        let {
          response
        } = file;
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
      },

    },
    async created() { //取_id 并赋值给id
      let {
        id
      } = this.$route.query;
      console.log(id);
      let {
        data: {
          data
        }
      } = await this.$axios.get(
        `http://localhost:1906/goodsAdmin/${id}`
      );
      this._id = id;
    },
  };
</script>
<style scoped>
  .FoundEdit {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>