<template>
  <div>
    <div class="card-section">
      <div class="item-name">基础用法</div>
      <p>包含标题，内容和操作。</p>
      <div class="basic-use">
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-row>
      </div>
    </div>

    <div class="card-section">
      <div class="item-name">带图片</div>
      <p>包含标题，内容和操作。</p>
      <div class="basic-use">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.card-section {
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
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 250px;
    display: block;
  }

  .el-col {
    width: 250px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
}
</style>