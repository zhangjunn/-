<template>
    <div id="destList">
        <div class="header">

            <van-row type="flex" align="center">
                <van-col span="6" style=" margin-top: .8rem;"><img style="width: 100%;margin-top: .625rem;"
                        src="../assets/logo_3x.png" alt=""></van-col>
                <van-col span="17" offset="1">
                    <van-tabbar v-model="active" :fixed="false" active-color="red" :route="true">
                        <van-tabbar-item url="/Home" style="font-size: 1rem;">首页</van-tabbar-item>
                        <van-tabbar-item url="destList" style="font-size: 1rem;">目的地</van-tabbar-item>
                        <van-tabbar-item to="/Consult" style="font-size: 1rem;">咨询</van-tabbar-item>
                        <van-tabbar-item url="/About" style="font-size: 1rem;">关于我们</van-tabbar-item>
                    </van-tabbar>
                </van-col>
            </van-row>
        </div>
        <div class="d-mian">
            <form action="">
                <van-search v-model="value" placeholder="想去哪里？" show-action shape="round" @search="onSearch"
                    ref="input">
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </form>
        </div>
        <!-- 搜索后 -->
        <div class="dest-list">
            <div class="dests part">
                <div class="item" v-for="item in searchData" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <router-link style="color: #ff5f69;"  class="sub-item child" :to="{path:'/Country',query:{ id:item._id }}">
                                <div class="dest-name" >
                                    <!-- 点击这个页面后坐下路由跳转      -->
                                    <span class="chinese-name">{{item.nameCn}} </span>
                                    <span class="english-name">{{item.nameEn}}</span>
                                </div>

                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 搜索前 -->
        <div class="dest-list">
            <h3 class="world">亚洲</h3>
            <div class="dests part">
                <div class="item" v-for="item in Asia" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <!-- 循环用另外的ele 来 item下面的country 如果有数据嵌套的情况 v-for ="ele in item.country"-->
                            <!--@click="$router.push('/Country')"    -->
                            <li >
                                <router-link style="color: #ff5f69;"  class="sub-item child"  :to="{path:'/Country',query:{ id:item._id }}" >
                                    <div class="dest-name"  >
                                        <span class="chinese-name" >{{item.nameCn}} </span>
                                        <span class="english-name">{{item.nameEn}}</span>
                                    </div>
                                    <div style="color:#cccccc;font-size:22px;">></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="dest-list">
            <h3 class="world">欧洲</h3>
            <div class="dests part">
                <div class="item" v-for="item in Europe" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <!-- 循环用另外的ele 来 item下面的country -->
                            <li >
                                <router-link style="color: #ff5f69;"  class="sub-item child"  :to="{path:'/Country',query:{ id:item._id }}">
                                    <div class="dest-name">
                                        <span class="chinese-name">{{item.nameCn}} </span>
                                        <span class="english-name">{{item.nameEn}}</span>
                                    </div>
                                    <div style="color:#cccccc;font-size:22px;">></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="dest-list">
            <h3 class="world">大洋洲</h3>
            <div class="dests part">
                <div class="item" v-for="item in Oceania" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <!-- 循环用另外的ele 来 item下面的country -->
                            <li @click="$router.push('/Country')">
                                <router-link style="color: #ff5f69;"  class="sub-item child"  :to="{path:'/Country',query:{ id:item._id }}">
                                    <div class="dest-name">
                                        <span class="chinese-name">{{item.nameCn}} </span>
                                        <span class="english-name">{{item.nameEn}}</span>
                                    </div>
                                    <div style="color:#cccccc;font-size:22px;">></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="dest-list">
            <h3 class="world">大洋洲</h3>
            <div class="dests part">
                <div class="item" v-for="item in North" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <!-- 循环用另外的ele 来 item下面的country -->
                            <li @click="$router.push('/Country')">
                                <router-link style="color: #ff5f69;"  class="sub-item child"  :to="{path:'/Country',query:{ id:item._id }}">
                                    <div class="dest-name">
                                        <span class="chinese-name">{{item.nameCn}} </span>
                                        <span class="english-name">{{item.nameEn}}</span>
                                    </div>
                                    <div style="color:#cccccc;font-size:22px;">></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
                <div class="dest-list">
            <h3 class="world">非洲</h3>
            <div class="dests part">
                <div class="item" v-for="item in Africa" :key="item._id">
                    <div class="title">
                        <ul class="dest-items">
                            <!-- 循环用另外的ele 来 item下面的country -->
                            <li @click="$router.push('/Country')">
                                <router-link style="color: #ff5f69;" class="sub-item child"  :to="{path:'/Country',query:{ id:item._id }}">
                                    <div class="dest-name">
                                        <span class="chinese-name">{{item.nameCn}} </span>
                                        <span class="english-name">{{item.nameEn}}</span>
                                    </div>
                                    <div style="color:#cccccc;font-size:22px;">></div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    // import axios from "axios";
    import Vant from 'vant';
    import 'vant/lib/index.css';
    Vue.use(Vant);
    export default {
        async created() {
            let {
                data: {
                    data
                }
            } = await this.$axios.get("http://localhost:1906/ZPigSearch");
            this.Asia = data.slice(0, 34)
            this.Europe = data.slice(34, 74)
            this.Oceania = data.slice(74, 80)
            this.North = data.slice(84, 89);
            this.Africa = data.slice(95, 103)
            // console.log(this.Asia);
            this.products = data;
                // this.id = this.$route.query.id;
                // console.log(this.id);
        },
        data() {
            return {
                active: 1,
                Asia: [],
                Europe: [],
                Oceania: [],
                North: [],
                Africa: [],
                value: '',
                name: "",
                searchData: '',
                products: [],
            }
        },
        methods: {
            onSearch() {
                //这里value是v-modul的value
                var value = this.value;
                console.log(value);
                if (value) {
                    this.searchData = this.products.filter(function (product) {
                        return Object.keys(product).some(function (key) {
                            // console.log(key)
                            return (
                                String(product[key])
                                // toLowerCase() 方法用于把字符串转换为小写。
                                .toLowerCase()
                                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                                .indexOf(value) > -1
                            );
                        })
                    });
                }
            },
        },
    }
</script>
<style>
    .header {
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

    .dests {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .item {
        flex-basis: 49%;
    }

    .world {
        display: block;
        padding: 0 10px;
        background: #f2f2f2;
        line-height: 35px;
        font-size: 14px;
        color: #999;
        height: 35px;
    }


    .dest-items {
        padding: 5px;
        background-color: #fff;
    }

    .dest-items li .sub-item {
        border: 1px solid #ccc;
        padding: 5px;
        display: block;
        border-radius: 8px;
        box-shadow: 0 1px 1px #ccc;
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .dest-items li .dest-name {
        margin-right: 1.25rem;
    }

    .dest-items li .chinese-name {
        font-size: .875rem;
        line-height: 1.125rem;
        color: #ff5f69;
        display: block;
    }

    .dest-items li .english-name {
        font-size: .625rem;
        color: #999;
        display: block;
        line-height: .875rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>