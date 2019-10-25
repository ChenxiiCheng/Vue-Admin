<template>
  <div class="left-all">
    <div class="logo-panel">
      <router-link to="/">
        <img src="@/assets/images/logo3.png" alt />
      </router-link>
      <span>后台管理系统</span>
    </div>
    <div class="sidebar-left">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#08ffc8"
        unique-opened
        router
      >
        <template v-for="(item, idx1) in menuList">
          <el-submenu :index="item.index" :key="idx1" v-if="item.children">
            <template slot="title">
              <!-- <i :class="item.icon"></i> -->
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="list.index"
                v-for="(list, idx2) in item.children"
                :key="idx2"
              >{{list.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item :index="item.index" :key="idx1" v-else>
            <template>
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import menuList from "../../utils/leftNavList";
export default {
  data() {
    return {
      menuList
    };
  }
};
</script>

<style lang="scss">
.left-all {
  height: 100%;
  .logo-panel {
    box-sizing: border-box;
    padding-left: 18px;
    line-height: 90px;
    background: #002140;
    span {
      margin-left: 15px;
      color: #f6f6f6;
      font-size: 17px;
    }
    img {
      width: 80px;
      height: 80px;
      vertical-align: middle;
    }
  }
  .sidebar-left {
    height: 100%;
    ul {
      height: 100%;
    }
    .el-menu {
      border-right-width: 0;
    }
  }
}
</style>