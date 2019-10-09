<template>
  <div id="Login">
    <div class="L_header">
      <span @click="$router.push('/Home')" class="back"><i>
          <van-icon name="arrow-left" /></i></span>
      <span>登录8只小猪</span>
    </div>
    <main class="L_mian">
      <!-- v-model="username"  v-model="password"  v-model="sms"-->
      <van-cell-group>
        <van-field class="user" required clearable label="账号" placeholder="请输入邮箱/手机号" v-show="open" />
        <van-field class="pass" type="password" label="密码" placeholder="请输入密码" required v-show="open" />
      </van-cell-group>
      <van-cell-group>
        <van-field class="user" label="+86" placeholder="请输入手机号" v-show="close" type="number" v-model="phone" />
        <van-field class="pass" center clearable label="验证码" placeholder="请输入验证码" v-show="close" v-model="verifyCode">
          <van-button slot="button" size="small" type="danger" @click="getVerifyCode" v-if="btnTitle">{{btnTitle}}
          </van-button>
        </van-field>
      </van-cell-group>
    </main>
    <div class="tishi">
      <span style=" margin-right: .625rem;font-size:.75rem;" @click="toggle()" v-show="open"> 短信验证码登录 </span>
      <span style=" margin-right: .625rem;font-size:.75rem;" @click="toggle()" v-show="close"> 账号密码登录</span>
    </div>

    <van-button type="primary" style="width:90%;border-radius:.625rem;
      border: 1px solid #ddd;background-color: #ddd; 
      margin-left: 1.25rem;"  @click="handleLogin" :disabled="isClick">登录
    </van-button>
    <van-button @click="$router.push('/Reg')" style="width:90%;border-radius:.625rem;
      border: 1px solid #ff5e69;background-color: #fff; margin-left: 1.25rem;
       margin-top: .9375rem; color: #ff5e69;">注册
    </van-button>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        open: true,
        close: false,
        phone: "",
        verifyCode: "", //验证码
        btnTitle: "获取验证码",
        disabled: false, //是否可点击
        errors: {}, //验证提示信息2
      }
    },
    methods: {
      toggle: function () {
        // 开关
        this.open = !this.open
        this.close = !this.close
      },
      getVerifyCode() {
        if (this.validatePhone()) {
          this.validateBtn()
          this.$axios.post('http://localhost:1906/sms_send', {
            tpl_id: "172633", //聚合数据申请接口 我个人模板id下面是key值
            key: "4e874ecc96c1b783c9886c4f0db5d4bf",
            phone: this.phone

          }).then(res => {
            console.log(res)
          })
        }
      },
      validatePhone() {
        //判断输入的手机号是否合法
        if (!this.phone) {
          this.errors = {
            phone: "手机号码不能为空"
          }
          // return false
        } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
          this.errors = {
            phone: "请输入正确是手机号"
          }
          // return false
        } else {
          this.errors = {}
          return true
        }
      },
      validateBtn() {
        //倒计时
        let time = 60;
        let timer = setInterval(() => {
          if (time == 0) {
            clearInterval(timer);
            this.disabled = false;
            this.btnTitle = "获取验证码";
          } else {
            this.btnTitle = time + '秒后重试';
            this.disabled = true;
            time--
          }
        }, 1000)
      },
      handleLogin() {
        //点击发送
        this.errors = {};
        this.$axios.post('http://localhost:1906/user/login', {
          phone: this.phone,
          code: this.verifyCode
        }).then(res => {
          console.log(res);
          localStorage.setItem('ele_login', true)
          this.$router.push('/Mine')
        }).catch(error => {
          //返回错误信息
          this.errors = {
            code: error.response.data.msg
          }
        })
      }
    },
    computed: {
      //手机号和验证码都不能为空
      isClick() {
        if (!this.phone || !this.verifyCode) {
          return true
        } else {
          return false
        }

      }
    },
  }
</script>
<style>
  .L_header {
    display: flex;
    justify-content: flex-start;
    height: 2.5rem;
    align-items: center;



  }

  .L_header .back {
    flex-basis: 35%;
    margin-left: 1.25rem;
    color: #ff5e69;
    font-size: 1.4rem;
  }

  .user ::-webkit-input-placeholder {
    text-align: left;
  }

  .pass ::-webkit-input-placeholder {
    text-align: left;
  }

  .tishi {
    display: flex;
    width: 100%;
    height: 1.625rem;
    margin-top: .625rem;
    justify-content: flex-end;
    font-size: .75rem;
    color: #ff5e69;

  }
</style>