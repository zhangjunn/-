<template>
    <div id="Discover">
        <header class="Tourist">
            <van-tabs v-model="active">
                <van-tab title="旅行精彩">
                    <div class="D_Tourist">
                        <h1>达人视频</h1>
                        <span class="moreVideo" @click="$router.push('/Video')">更多></span>
                    </div>
                    <main>
                        <div class="Video">
                            <video style="width:100%; display: inline-block;"
                                src="http://pic.8pig.com/video/u_11/121811/xiaomai121811.mp4" controls="controls"
                                poster="http://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webdiscovery/xiaomaishiping.jpg"
                                preload="none" data-v-1cfcd6a0="" data-v-b305c876=""></video>
                        </div>
                    </main>
                    <footer class="D_footer">
                        <div class="img">
                            <van-image round width="3.28rem" height="3.28rem" style="margin: auto 0;"
                                src="https://pic.8pig.com/avatar/u_11/121811/b803e5ab4da349c69ff50f410f3d076b2.jpg@1e_1c_750w_750h" />
                        </div>
                        <span class="p">美国户外极限玩家带你赴一场粉雪之约 </span>
                    </footer>
                    <div class="title-box">
                        <h2 class="title">
                            游客故事
                        </h2>
                        <span @click="$router.push('/Oder')" class="more">更多></span>
                    </div>

                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in img' :key="item._id">
                                <div class="g-cover">
                                    <img :src="item.img" alt="" class="v-img">
                                </div>
                                <div class="g-content">
                                    <p class="g-desc">{{item.desc }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="title-box">
                        <h2 class="title">
                            达人故事
                        </h2>
                        <span @click="$router.push('/Oder')" class="more">更多></span>
                    </div>

                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in src' :key="item._id">
                                <div class="g-cover">
                                    <img :src="item.src" alt="" class="v-img">
                                </div>
                                <div class="g-content">
                                    <p class="g-desc">{{item.desc }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="title-box">
                        <h2 class="title">

                            新鲜事

                        </h2>
                        <span @click="$router.push('/Oder')" class="more">更多></span>
                    </div>

                    <div class="g-list-wrap"
                        style="width:100%; display: flex; justify-content: center;   margin-bottom: 2.25rem;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in url' :key="item._id" :gid="item.guideId"
                                style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.url" alt="" class="v-img">
                                </div>
                                <div class="g-content">
                                    <p class="g-desc" style="font-size: 1rem;color:#000;">{{item.desc }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>
                <van-tab title="全球动态">

                    <div class="title-box">
                        <h2 class="title">
                            直播
                        </h2>
                        <span @click="$router.push('/Oder')" class="more">更多></span>
                    </div>
                    <main>
                        <div class="Video">
                            <video style="width:100%; display: inline-block;"
                                src="https://pic.8pig.com/operation/liveVideo/180202100735752fa038ad049c2e7e88.jpg@678w_382h__1e_1c.webp"
                                controls="controls"
                                poster="https://pic.8pig.com/operation/liveVideo/180202100735752fa038ad049c2e7e88.jpg@678w_382h__1e_1c.webp"
                                preload="none" data-v-1cfcd6a0="" data-v-b305c876=""></video>
                        </div>
                    </main>
                    <footer class="D_footer">
                        <div class="img">
                            <van-image round width="3.28rem" height="3.28rem" style="margin: auto 0;"
                                src="https://pic.8pig.com/avatar/u_33/1633/23299FDD088502C9EF2609DC4CA024F0.jpg@96w_96h__1e_1c.webp" />
                        </div>
                        <span class="p">意大利 .【小猪带你玩】这事在威尼斯“见不得人”？
                            <span style=" font-size: .75rem;color:#ccc;">直播时间2018-02-03 19:00:00</span>
                        </span>
                    </footer>
                    <main>
                        <div class="Video">
                            <video style="width:100%; display: inline-block;"
                                src="https://pic.8pig.com/operation/liveVideo/171221163332383b82620af06d7aa127.jpg@678w_382h__1e_1c.webp"
                                controls="controls"
                                poster="http://pic.8pig.com/operation/liveVideo/171221163332383b82620af06d7aa127.jpg@1e_1c_750w_420h"
                                preload="none" data-v-1cfcd6a0="" data-v-b305c876=""></video>
                        </div>
                    </main>
                    <footer class="D_footer">
                        <div class="img">
                            <van-image round width="3.28rem" height="3.28rem" style="margin: auto 0;"
                                src="https://pic.8pig.com/operation/liveVideo/171221163332383b82620af06d7aa127.jpg@678w_382h__1e_1c.webp" />
                        </div>
                        <span class="p">【小猪带你玩】小姐姐带你玩转圣诞集市
                            <span style=" font-size: .75rem;color:#ccc;">2017-12-22 19:30:00</span>
                        </span>
                    </footer>
                </van-tab>
            </van-tabs>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'Discover',
        async created() {
            let {
                data: {
                    data
                }
            } = await this.$axios.get("http://localhost:1906/ZPigGoods");
            this.img = data.slice(30, 36) //图标
            this.src = data.slice(36, 42) //图标
            this.url = data.slice(42, 50) //图标
        },
        data() {
            return {
                active: 0,
                img: [], // 图标 和下面的图
                src: [],
                url: []
            }
        }
    }
</script>
<style>
    body,
    html {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;


    }

    .D_Tourist {
        display: flex;
        justify-content: space-between;
    }

    .moreVideo {
        margin-right: 1.16rem;
        align-self: center;
        color: #ccc;

    }

    .Tourist h1 {
        font-size: 1.1rem;
        margin-left: 1.16rem;
        align-self: center;

        line-height: 1;
    }

    .Video {
        height: 5.09333rem;
        padding-left: 1.025rem;
        padding-right: 1.025rem;
    }

    .D_footer {
        width: 100%;
        margin-top: 7.625rem;
        padding: .29333rem .48rem .48rem;
        display: flex;

    }

    .D_footer .p {
        align-self: center;
        margin-left: 1.16rem;
    }
</style>