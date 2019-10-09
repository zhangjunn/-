<template>
    <div id="Country">
        <div class="item" v-for="item in searchData" :key="item._id">
            <div class="title">
                <div class="C_header">
                    <img :src="item.img" alt="">
                </div>
                <div class="shade" data-v-033319f8=""></div>
                <div class="C_header_bottom">
                    <div class="search-box">
                        <form action="">
                            <van-search v-model="value" placeholder="搜索 目的地/活动/关键词" :disabled="true" shape="round"
                                style="border-radius: 10px; font-size: 12px; height: 2.375rem;">
                            </van-search>
                        </form>
                    </div>
                    <div class="banner-title">
                        <p class="title" data-v-033319f8="">{{item.t1}}</p>
                        <span data-v-033319f8="">★ {{item.t2}}</span>
                        <span class="right-span" data-v-033319f8="">★ {{item.t3}}</span>
                    </div>
                </div>
                <div class="grd">
                    <ul class="grid">
                        <li class="items">                           
                        <img src="https://pic.8pig.com/img/h5/SEO/category-1.jpg@258w_300h__1e_1c.webp" alt=""></li>
                        <li><img src="https://pic.8pig.com/img/h5/SEO/category-2.jpg@192w_144h__1e_1c.webp" alt=""></li>
                        <li><img src="https://pic.8pig.com/img/h5/SEO/category-3.jpg@192w_144h__1e_1c.webp" alt=""></li>
                        <li><img src="https://pic.8pig.com/img/h5/SEO/category-4.jpg@192w_144h__1e_1c.webp" alt=""></li>
                        <li><img src="https://pic.8pig.com/img/h5/SEO/category-5.jpg@192w_144h__1e_1c.webp" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Country',
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
                `http://localhost:1906/ZPigSearch/${id}`
            );
            this._id = id;
            this.searchData = data

        },
        data() {
            return {
                value: '',
                searchData: []
            }
        },
        methods: {
            onSearch() {

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

    .C_header {
        width: 100%;
        margin: auto;
        text-align: center;
        position: relative;
    }

    .C_header img {
        width: 100%;
        text-align: center;
        height: 14.125rem;

    }

    .C_header_bottom .search-box {
        position: absolute;
        top: 2.25rem;
        left: 20%;
        z-index: 99;
    }

    .banner-title {
        position: absolute;
        top: 6.37333rem;
        left: 16%;
        text-align: center;
        color: #fff;
        z-index: 99;
        text-shadow: 0.01333rem 0.01333rem 0.01333rem #555;
        font-size: 1.077333rem;
    }

    .banner-title .title {
        color: #fff;
        font-size: 1.094rem;
        margin-bottom: .49333rem;
        overflow: hidden;
        white-space: nowrap;
    }

    .banner-title .right-span {
        margin-left: .98667rem;
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 34% 30% 30%;
        grid-template-rows: 6.25rem 6.25rem 6.25rem;
        grid-gap: .15rem;
        margin-left: .25rem;
        margin-top: 1.25rem;

    }

    .grid li {
        width: 100%;
        height: 100%;
    }

    .grid li img {
        width: 100%;
        height: 100%;
    }

    .grid .items {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>