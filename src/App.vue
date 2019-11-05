<template>
  <div id="app">
    <router-link class="p-3" to="/">首頁</router-link>
    <router-link class="p-3" to="/test">測試頁</router-link>
    <transition name="slide" mode="out-in">
      <router-view class="mt-4"></router-view>
    </transition>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "app",
  router
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: Microsoft JhengHei;
}

.p-3 {
  padding: 1rem;
}
.mt-4 {
  margin-top: 1.5rem;
}

.slide-enter{
  opacity:0;
  transform:translateX(20px);
}
.slide-leave-active,
.slide-enter-active{
  transition:all 0.3s ease-out;
}
.slide-leave-to{
  opacity:0;
  transform:translateX(-20px);
}

// 關於 transform 的用法，可以用 transform:translateX
// 了解一下計算 css margin padding 的距離的部分。
</style>
