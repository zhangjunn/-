<template>
    <div id="Reg">
        <div class="R_header">
            <span @click="$router.push('/Login')" class="back"><i>
                    <van-icon name="arrow-left" /></i></span>
            <span>注册账号</span>
        </div>
        <main class="R_mian">
            <van-cell-group>
                <van-field class="R_user" type="number" v-model="phone" label="+86" placeholder="请输入手机号" />
                <van-field class="R_pass" center clearable label="验证码" placeholder="请输入验证码" v-model="verifyCode">
                    <van-button slot="button" size="small" @click="getVerifyCode" v-if="btnTitle"
                        style="background-color: #ff5e69;color: #fff;">{{btnTitle}}
                    </van-button>
                </van-field>
                <van-field class="pass" type="password" label="密码" placeholder="请设置6-16位登录密码" required />
            </van-cell-group>
        </main>
        <div class="help-link"> 密码长度6～16位，由英文字母a～z (区分大小写)、数字0～9、至少两种特殊字符组成</div>

        <van-button style="width:90%;border-radius:.625rem;
      border: 1px solid #ddd;background-color: #ddd; margin-left: 1.25rem;
       margin-top: .9375rem; color: #ff5e69;" @click="handleLogin" :disabled="isClick">完成
        </van-button>
    </div>

</template>
<script>
    export default {
        name: "Reg",
        data() {
            return {
                phone: "",
                verifyCode: "", //验证码
                btnTitle: "获取验证码",
                disabled: false, //是否可点击
                errors:{}, //验证提示信息
            }

        },
        methods: {
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
                    this.$router.push('/Login')
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
    .R_header {
        display: flex;
        justify-content: flex-start;
        height: 2.5rem;
        align-items: center;
    }

    .R_header .back {
        flex-basis: 35%;
        margin-left: 1.25rem;
        color: #ff5e69;
        font-size: 1.4rem;
    }

    .R_user ::-webkit-input-placeholder {
        text-align: left;
    }

    .R_pass ::-webkit-input-placeholder {
        text-align: left;
    }

    .help-link {
        float: left;
        color: #888;
        font-size: .72rem;
        margin: 0rem 1.25rem 0rem 1.25rem;
        margin-top: .625rem;
        margin-bottom: .625rem;
    }
</style>