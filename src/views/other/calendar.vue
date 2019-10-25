<template>
  <div>
    <div class="calendar-section">
      <div class="item-name">基本</div>
      <p></p>
      <div class="basic-use">
        <el-row>
          <el-calendar v-model="value"></el-calendar>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.calendar-section {
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