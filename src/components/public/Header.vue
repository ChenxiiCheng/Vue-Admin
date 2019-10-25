<template>
  <div class="m-header">
    <div class="header-top">
      <router-link to="/">
        <img src="@/assets/images/logo3.png" alt="logo" />
      </router-link>
      <div class="info-panel">
        <span class="user">欢迎，Chenxi</span>
        <router-link to="/">退出</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m-header {
  overflow: hidden;
  padding: 0 26px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .header-top {
    img {
      float: left;
      height: 52px;
      width: 52px;
      cursor: pointer;
    }
    .info-panel {
      float: right;
      height: 52px;
      line-height: 52px;
      .user {
        margin-right: 20px;
      }
    }
  }
}
</style>