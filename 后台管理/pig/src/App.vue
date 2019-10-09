<template>
  <div id="app">
    <router-view></router-view>
    <div class="footbox">
      <!--  v-model="active" active-color="#07c160" inactive-color="#000"-->
    <van-tabbar route :fixed='true'>
      <van-tabbar-item replace :to="item.path" :icon="item.icon" v-for='item in menu' :key='item.name'
         class="routeritem">
        {{item.title}}
      </van-tabbar-item>
      <!-- <van-tabbar-item replace icon="upgrade" class="routeritem" @click="handleItemClick()">
        返回顶端
      </van-tabbar-item> -->
    </van-tabbar>
  </div>
      </div>
</template>

<script>
  import Vue from "vue";
  import Vant from "vant";
  import "vant/lib/index.css";
  Vue.use(Vant);
  export default {
    name: "app",
    active:'0', 
    data() {
      return {
        active: 0,
        menu: [{
            name: "Home",
            title: "首页",
            path: "/Home",
            icon: "wap-home"
          },
          {
            name: "Discover",
            title: "发现",
            path: "/Discover",
            icon: "question-o"
          },
          {
            name: "News",
            title: "消息",
            path: "/News",
            icon: "comment-o"
          },
          {
            name: "Mine",
            title: "我",
            path: "/Mine",
            icon: "friends-o"
          }
        ]
      };
    },
    
    methods: {
      // handleItemClick() {
      //   window.scrollTo(0, 0);
      // },
    },
    created() {
      this.active = this.$route.path;
    }
  };
</script>

<style>
  .routeritem {
  height: 0px;
  font-size: 16px;
}
.van-icon-wap-home::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-question-o::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-comment-o::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-friends-o::before {
  display: inline-block;
  font-size: 30px;
} 

</style>