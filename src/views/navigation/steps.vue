<template>
  <div>
    <div class="steps-section">
      <div class="item-name">含状态步骤条</div>
      <div class="basic-use">
        <el-row>
          <el-steps :space="200" :active="1" finish-status="success">
            <el-step title="已完成"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-row>
      </div>
    </div>
    <div class="steps-section">
      <div class="item-name">有描述的步骤条</div>
      <div class="basic-use">
        <el-row>
          <el-steps :active="2">
            <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这段就没那么长了"></el-step>
          </el-steps>
        </el-row>
      </div>
    </div>
    <div class="steps-section">
      <div class="item-name">带图标的步骤条</div>
      <div class="basic-use">
        <el-row>
          <el-steps :active="3">
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
          </el-steps>
        </el-row>
      </div>
    </div>
    <div class="steps-section">
      <div class="item-name">简洁风格的步骤条</div>
      <div class="basic-use">
        <el-row>
          <el-steps :active="1" simple>
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
          </el-steps>
        </el-row>
        <el-row>
          <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-row>
        <el-row>
          <el-steps :active="2" finish-status="error" simple style="margin-top: 20px">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-row>
        <el-row>
          <el-steps :active="1" finish-status="process" simple style="margin-top: 20px">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  .item-name {
    margin-bottom: 15px;
    font-size: 16px;
  }
  .el-button {
    margin: 0 15px;
  }
}
</style>