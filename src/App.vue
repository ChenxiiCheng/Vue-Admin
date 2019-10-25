<template>
  <div id="app">
    <div class="main-body">
      <div class="left-section">
        <NavLeft />
      </div>
      <div class="right-section">
        <div class="header">
          <Header />
        </div>
        <div class="breadcrumb">
          <Breadcrumb />
        </div>
        <div class="content-panel">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from "@/components/public/NavLeft";
import Header from "@/components/public/Header.vue";
import Breadcrumb from "@/components/public/Breadcrumb.vue";
export default {
  name: "app",
  components: {
    NavLeft,
    Header,
    Breadcrumb
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.main-body {
  .left-section {
    float: left;
    width: 19%;
    height: calc(100vh);
    background: #f6f6f6;
  }
  .right-section {
    float: right;
    width: 81%;
    height: calc(100vh);
    .header {
      background: #fff;
      height: 52px;
    }
    .breadcrumb {
      margin: 18px 0 0 13px;
      cursor: pointer;
    }
    .content-panel {
      margin: 18px 30px;
      height: 80%;
      background: #fff;
    }
  }
}
</style>
