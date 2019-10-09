<template>
    <div id="destList">
        <div class="d-header">

            <van-row type="flex" align="center">
                <van-col span="6" style=" margin-top: .8rem;"><img style="width: 100%;margin-top: .625rem;"
                        src="../assets/logo_3x.png" alt=""></van-col>
                <van-col span="17" offset="1">
                    <van-tabbar v-model="active" :fixed="false" active-color="red" :route="true">
                        <van-tabbar-item url="/Home" style="font-size: 1rem;">首页</van-tabbar-item>
                        <van-tabbar-item to="destList" style="font-size: 1rem;">目的地</van-tabbar-item>
                        <van-tabbar-item url="/Consult" style="font-size: 1rem;">咨询</van-tabbar-item>
                        <van-tabbar-item url="/About" style="font-size: 1rem;">关于我们</van-tabbar-item>
                    </van-tabbar>
                </van-col>
            </van-row>
        </div>
        <div class="top">
            <img src="../assets/logo-consult.png" alt="">
            <p>不用做攻略，玩遍全世界</p>
        </div>
        <div class="items consult">
            <!-- <router-link >  @click="$router.push('/')"-->
            <div class="ask"  @click="$router.push('/Oder')">
                <span>
                    <van-icon name="user-circle-o" /></span>
                <p>
                    <span class="title">咨询达人</span>
                    <span class="small">20秒填写定制单，快速安排达人</span>
                    <i style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i>
                </p>
            </div>
        </div>
        <div class="items consult">
            <div class="ask">
                <span>
                    <van-icon name="service-o" /></span>
                <p>
                    <span class="title">在线沟通</span>
                    <span class="small">咨询专业客服，轻松预约达人</span>
                    <i style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i>
                </p>
            </div>
        </div>
        <div class="items consult">
            <div class="ask">

                <span>
                    <van-icon name="phone-o" /></span>
                <p>
                    <span class="title">电话咨询</span>
                    <span class="small">专线客服，沟通更畅快</span>
                    <i style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i>
                </p>
            </div>
        </div>
        <div class="items other" style="margin-top: 1.2rem;background-color:#ffffff;border-top: 1px solid #ccc;">
            <div class="ask">
                <span>
                    <van-icon name="setting-o" style="background-color: #ff5f69;" /> </span>
                <p>
                    <span class="title">下载APP</span>
                    <span class="small">体验完整功能，直接与当地达人对话</span>
                    <i style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i>
                </p>
            </div>
            <!-- style="background-color: #ff5f69;"  -->
            <div class="ask" id="copy" data-clipboard-text="8只小猪">
                <span>
                    <van-icon name="qr" style="background-color: #ff5f69;" /> </span>
                <p><span class="title">关注微信号</span> <span class="small" id="selection">复制“8只小猪”，到微信公众号粘贴</span>
                    <i style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i>
                </p>
            </div>
            <div class="ask" data-clipboard-text="8只小猪">
                <span>
                    <van-icon name="contact" style="background-color: #ff5f69;" /> </span>
                <p><span class="title">成为达人</span> <span class="small">我有精彩玩法，我要成为8只小猪达人</span> <i
                        style="color:#cccccc;font-size: 20px;  vertical-align: top;float:right">
                        <van-icon name="arrow" /></i></p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 2
            }
        }
    }
</script>
<style>
    body,
    html {
        width: 100%;
        height: 100%;
        overflow-x: auto;
        overflow-y: auto;


    }
    .d-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 3;
        transition: transform 0.1s;
        box-sizing: border-box;
        line-height: 3.125rem;
        border-bottom: 1px solid #cccccc;
        position: relative;

    }

    div.top {
        background-color: #ff5f69;
        display: block;
        text-align: center;
        padding: 27px 0 19px 0;
    }

    div.top img {
        display: inline-block;
        width: 60px;
    }

    div.top p {
        font-size: 12px;
        line-height: 24px;
        color: #fff;
    }

    .ask {
        position: relative;
        display: block;
    }

    .items>.ask>span {
        width: 58px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        display: inline-block;
    }

    .consult span i {
        background-color: #64c8bb;
    }

    .items span i {
        font-size: 20px;
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 35px;
        border-radius: 8px;
        vertical-align: middle;
        color: #fff;
    }

    .items p {
        position: absolute;
        top: 0;
        height: 2.5rem;
        left: 3.625rem;
        right: 0;
        padding: .625rem 0rem;
        margin: 0;
        border-bottom: 1px solid #ccc;
    }

    .items .title {
        font-size: 1rem;
        height: 1rem;
        color: #000;
        display: block;
    }

    .items .small {
        font-size: .75rem;
        line-height: 1.5em;
        color: #999;
    }
</style>