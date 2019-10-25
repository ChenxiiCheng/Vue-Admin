<template>
  <div>
    <div class="icon-section">
      <div class="item-name">Icon 图标用法</div>
      <div class="basic-use">
        <el-row>
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-grape"></i>
          <i class="el-icon-cherry"></i>
          <i class="el-icon-apple"></i>
          <i class="el-icon-sunrise"></i>
          <i class="el-icon-trophy-1"></i>
          <i class="el-icon-location-outline"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-loading"></i>
          <i class="el-icon-headset"></i>
          <i class="el-icon-shopping-cart-full"></i>
          <i class="el-icon-table-lamp"></i>
          <i class="el-icon-chat-round"></i>
          <i class="el-icon-chat-dot-round"></i>
          <i class="el-icon-microphone"></i>
          <i class="el-icon-turn-off-microphone"></i>
          <i class="el-icon-truck"></i>
          <i class="el-icon-ship"></i>
          <i class="el-icon-football"></i>
          <i class="el-icon-baseball"></i>
        </el-row>
      </div>
    </div>
    <div class="icon-section">
      <div class="item-name">Icon 图标用法</div>
      <div class="basic-use">
        <el-row>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="success" icon="el-icon-edit">搜索</el-button>
          <el-button type="danger" icon="el-icon-delete">搜索</el-button>
          <el-button type="info" icon="el-icon-scissors">搜索</el-button>
          <el-button type="warning" icon="el-icon-loading">搜索</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  .item-name {
    font-size: 16px;
  }
  .el-row {
    margin-top: 18px;
  }
  i {
    margin: 15px 15px;
  }
  .el-button {
    margin: 0 15px;
  }
}
</style>