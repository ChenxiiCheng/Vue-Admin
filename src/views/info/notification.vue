<template>
  <div>
    <div class="notification-section">
      <div class="item-name">基本用法</div>
      <p>适用性广泛的通知栏</p>
      <div class="basic-use">
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>
      </div>
    </div>

    <div class="notification-section">
      <div class="item-name">带有倾向性</div>
      <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
      <div class="basic-use">
        <el-row>
          <el-button plain @click="open1">成功</el-button>
          <el-button plain @click="open2">警告</el-button>
          <el-button plain @click="open3">消息</el-button>
          <el-button plain @click="open4">错误</el-button>
        </el-row>
      </div>
    </div>

    <div class="notification-section">
      <div class="item-name">自定义弹出位置</div>
      <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
      <div class="basic-use">
        <el-row>
          <el-button plain @click="open5">右上角</el-button>
          <el-button plain @click="open6">右下角</el-button>
          <el-button plain @click="open7">左下角</el-button>
          <el-button plain @click="open8">左上角</el-button>
        </el-row>
      </div>
    </div>

    <div class="notification-section">
      <div class="item-name">带有偏移</div>
      <p>让 Notification 偏移一些位置</p>
      <div class="basic-use">
        <el-row>
          <el-button plain @click="open">偏移的消息</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: "偏移",
        message: "这是一条带有偏移的提示消息",
        offset: 300
      });
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },

    open2() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    open3() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    },

    open4() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息"
      });
    },

    open5() {
      this.$notify({
        title: "自定义位置",
        message: "右上角弹出的消息"
      });
    },

    open6() {
      this.$notify({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right"
      });
    },

    open7() {
      this.$notify({
        title: "自定义位置",
        message: "左下角弹出的消息",
        position: "bottom-left"
      });
    },

    open8() {
      this.$notify({
        title: "自定义位置",
        message: "左上角弹出的消息",
        position: "top-left"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  .item-name {
    font-size: 16px;
  }
  p {
    font-size: 13px;
    color: grey;
  }
  .el-row {
    margin-top: 18px;
  }
}
</style>