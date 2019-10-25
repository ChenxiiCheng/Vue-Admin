<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <router-link to="/">基本组件</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  methods: {
    fetchDate(data) {
      console.log("data", data);
      this.routerData = data.meta ? data.meta : "";
    }
  },
  watch: {
    $route: "fetchDate"
  },
  mounted() {
    this.routerData = this.$route.meta.breadcrumb
      ? this.$route.meta.breadcrumb
      : "";
  }
};
</script>

<style lang="scss" scoped>
</style>