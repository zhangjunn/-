<template>
  <div class="nofind">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <div class="rightContainer">
      Order订单
      <router-view></router-view>
    </div>
  </div>
  <!-- 如果什么都没有访问的到就会到404 路由在routerjs -->
</template>
<script>
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/LeftMenu";
export default {
  name: "nofind",
  components: {
    HeadNav,
    LeftMenu
  }
};
</script>
<style scoped>
.nofind {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>

