<template>
    <div id="Home" style="">
        <div class="home-top">
            <van-row style=" display: flex; align-items: center;">
                <van-col style="text-align: center;" span="6"> <img style="width: 100%;" src="../assets/logo_3x.png"
                        alt="">
                </van-col>
                <van-col style="text-align: center;" span="12">
                    <van-search placeholder="想去哪里？"  shape="round"  show-action @search="onSearch('destList')" > 
                         <div slot="action" @click="onSearch('destList')">搜索</div>
                    </van-search>
                </van-col>
                <van-col style="text-align: center;" span="6">
                    <span style="color:red;" class="orther_reg" @click="goto('Login')">登录/注册</span>
                </van-col>
            </van-row>
        </div>
        <!-- 轮播 -->
        <div class="swiper-wrap">
            <van-swipe :autoplay="2000">
                <van-swipe-item v-for="item in recommend" :key="item._id">
                    <img :src="item.imgurl" style="width: 100%;height:12.5rem;" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="layout">
            <van-row type="flex" justify="space-around" style="text-align: center;font-size: 12px;">
                <van-col span="4" v-for='item in img' :key="item.text" class="icon">
                    <img :src="item.img" alt="" class="imgicon" style="text-align: center;">
                    <div class="texticon"> {{item.text}}</div>
                </van-col>
            </van-row>
        </div>
        <div class="title-box">
            <h2 class="title">优质达人</h2>
            <span @click="morelist(item)" class="more">更多></span>
        </div>

        <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
            <ul class="g-list">
                <li class="g-item" v-for='item in img' :key="item._id">
                    <div class="g-cover">
                        <img :src="item.src" alt="" class="v-img">
                        <span class="g-tag">{{item.tag}}</span>
                    </div>
                    <div class="g-content">
                        <h3 class="g-name">{{item.name}}</h3>
                        <p class="g-desc">{{item.desc }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="title-box">
            <h2 class="title">优质达人带你玩</h2>
        </div>

        <div>
            <van-tabs v-model="activeName" title-active-color="red">
                <van-tab title="跟P虫" name="内容1">

                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in list1' :key="item._id" :gid="item.guideId" style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.imgUrl" alt="" class="v-img">
                                    <span class="g-tag">{{item.countryName}} {{item.cityName}}</span>
                                </div>
                                <div class="g-content">
                                    <h3 class="g-name" style="font-size:16px;">{{item.journeyName}}</h3>
                                    <p class="g-desc" style="color:red;font-size:16px;">{{item.displayPrice}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>

                <van-tab title="美琪" name="内容2">
                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in list2' :key="item._id" :gid="item.guideId" style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.imgUrl" alt="" class="v-img">
                                    <span class="g-tag">{{item.countryName}} {{item.cityName}}</span>
                                </div>
                                <div class="g-content">
                                    <h3 class="g-name" style="font-size:16px;">{{item.journeyName}}</h3>
                                    <p class="g-desc" style="color:red;font-size:16px;">{{item.displayPrice}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>

                <van-tab title="Marc" name="内容3">
                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in list3' :key="item._id" :gid="item.guideId" style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.imgUrl" alt="" class="v-img">
                                    <span class="g-tag">{{item.countryName}} {{item.cityName}}</span>
                                </div>
                                <div class="g-content">
                                    <h3 class="g-name" style="font-size:16px;">{{item.journeyName}}</h3>
                                    <p class="g-desc" style="color:red;font-size:16px;">{{item.displayPrice}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>

                <van-tab title="毛驴哥" name="内容4">
                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in list4' :key="item._id"  :gid="item.guideId" style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.imgUrl" alt="" class="v-img">
                                    <span class="g-tag">{{item.countryName}} {{item.cityName}}</span>
                                </div>
                                <div class="g-content">
                                    <h3 class="g-name" style="font-size:16px;">{{item.journeyName}}</h3>
                                    <p class="g-desc" style="color:red;font-size:16px;">{{item.displayPrice}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>

                <van-tab title="小麦" name="内容">
                    <div class="g-list-wrap" style="width:100%; display: flex; justify-content: center;">
                        <ul class="g-list">
                            <li class="g-item" v-for='item in list5' :key="item._id" :gid="item.guideId" style="width: 20.625rem;">
                                <div class="g-cover">
                                    <img :src="item.imgUrl" alt="" class="v-img">
                                    <span class="g-tag">{{item.countryName}} {{item.cityName}}</span>
                                </div>
                                <div class="g-content">
                                    <h3 class="g-name" style="font-size:16px;">{{item.journeyName}}</h3>
                                    <p class="g-desc" style="color:red;font-size:16px;">{{item.displayPrice}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>

            </van-tabs>
        </div>
        <div>
          <h2 class="title">推荐专题 </h2>
        </div>
         <div class="g-list-wrap" style="width:100%;  display: flex; justify-content: center;">
            <ul class="g-list">
                <li class="g-item" v-for='item in img' :key="item._id" style="width: 20.625rem;">
                    <div class="g-cover">
                        <img :src="item.url" alt="" class="v-img">
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer" style=" margin-bottom: 5.125rem;">
   <van-row type="flex" justify="space-around">
   <van-col span="6">预订流程</van-col>
   <van-col span="6">旅行贴士</van-col>
   <van-col span="6">关于我们</van-col>
   </van-row>
   <p class="license" data-v-0865b2a2="">旅行社业务经营许可证：L-GD02482</p>
   <p class="copyright" data-v-0865b2a2="">Copyright © 2015-2018 8Pig. All Rights Reserved.</p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    // import axios from "axios";
    import Vant from 'vant';
    import 'vant/lib/index.css';
    import {
        Carousel,
        CarouselItem
    } from "element-ui";

    Vue.use(Vant);
    Vue.use(Carousel); //
    Vue.use(CarouselItem);
    export default {
        name: 'Home',
        async created() {
            let {
                data: {
                    data
                }
            } = await this.$axios.get("http://localhost:1906/ZPigGoods");
            this.recommend = data.slice(0, 3) // 轮播
            this.img = data.slice(0, 5) //图标
            this.list1 = data.slice(10,16);
            this.list2 = data.slice(5,10);
            this.list3 = data.slice(16,20);
            this.list4 = data.slice(20,23);
            this.list5 = data.slice(23,27);
        },
        data() {
            return {
                input: "",
                // value: "",
                recommend: [], //轮播图//把数据存放到这里面
                img: [], // 图标 和下面的图
                activeName: '内容',
                list1:[],
                list2:[],
                list3:[],
                list4:[],
                list5:[],

            }
        },
        methods: {
            goto(path) {
                this.$router.push({
                    path
                })
            },
            onSearch(path) {
               this.$router.push({
                    path
                })
            },
            morelist(type) {
                //  this.$router.push({path:`/bus`,query:{type}})
                // this.$router.push('/Reg')
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

    .imgicon {
        width: 2.1875rem;
        display: block;
       
 
    }

    .icon {
        display: flex;
        flex-direction: column;
    }

    .icon img {
        align-self: center;
    }

    .title-box {
        display: flex;
        justify-content: space-between;
        padding: 0 .48rem;
    }

    .title-box .title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
        color: #333;
    }

    .title-box .more {
        align-self: center;
        color: #888;
    }

    .g-list-wrap {
        margin: auto;
    }

    .g-list-wrap .g-list {
        white-space: nowrap;
        overflow-x: scroll;
        /* overflow-y: hidden; */
    }

    .g-list-wrap .g-item {
        padding-right: .64rem;
        display: inline-block;
        width: 10.625rem;
        height: 15.75rem;
        vertical-align: top;
        white-space: nowrap;

    }

    .g-item .g-cover {
        position: relative;
        width: 100%;
        height: 10.625rem;
    }
    
    .g-item .g-cover .v-img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .g-cover .g-tag {
        position: absolute;
        left: .24rem;
        bottom: .24rem;
        padding: .16rem .24rem;
        background-color: #fff;
        border-radius: .16rem;
        text-align: center;
        line-height: .95333rem;
        font-size: .32rem;
        color: #333;
    }

    .g-item .g-content {
        /* padding-top: .16rem; */
        font-size: .77333rem;
    }

    .g-item .g-content .g-name {
        white-space: nowrap;
        font-size: .77333rem;
        font-weight: 400;
        color: #000;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }

    .g-item .g-content .g-desc {
        color: #888;
        white-space: normal;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .footer {
    background-color: #333;
    padding: .26667rem 0 .4rem;
    color: #fff;
}
 .license{
    margin-top: .26667rem;
    font-size: .26667rem;
    text-align: center;
    color: #888;
  } 
  
  .copyright {
    margin-top: .34667rem;
    font-size: .32rem;
    text-align: center;
    color: #888;
}
</style>