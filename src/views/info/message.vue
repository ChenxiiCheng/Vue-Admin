<template>
  <div>
    <div class="message-section">
      <div class="item-name">基本用法</div>
      <p>从顶部出现，2 秒后自动消失。</p>
      <div class="basic-use">
        <el-row>
          <el-button :plain="true" @click="open">打开消息提示</el-button>
          <el-button :plain="true" @click="openVn">VNode</el-button>
        </el-row>
      </div>
    </div>

    <div class="message-section">
      <div class="item-name">不同状态</div>
      <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
      <div class="basic-use">
        <el-row>
          <el-button :plain="true" @click="open2">成功</el-button>
          <el-button :plain="true" @click="open3">警告</el-button>
          <el-button :plain="true" @click="open1">消息</el-button>
          <el-button :plain="true" @click="open4">错误</el-button>
        </el-row>
      </div>
    </div>

    <div class="message-section">
      <div class="item-name">可关闭</div>
      <p>可以添加关闭按钮。</p>
      <div class="basic-use">
        <el-row>
          <el-button :plain="true" @click="open5">消息</el-button>
          <el-button :plain="true" @click="open6">成功</el-button>
          <el-button :plain="true" @click="open7">警告</el-button>
          <el-button :plain="true" @click="open8">错误</el-button>
        </el-row>
      </div>
    </div>

    <div class="message-section">
      <div class="item-name">文字居中</div>
      <p>使用 center 属性让文字水平居中。</p>
      <div class="basic-use">
        <el-row>
          <el-button :plain="true" @click="openCenter">文字居中</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ]),
        duration: 2000
      });
    },

    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },

    open5() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示"
      });
    },

    open6() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },

    open7() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },

    open8() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error"
      });
    },

    openCenter() {
      this.$message({
        message: "居中的文字",
        center: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.message-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  p {
    font-size: 13px;
    color: grey;
  }
  .item-name {
    font-size: 16px;
  }
  .el-row {
    margin-top: 18px;
  }
}
</style>