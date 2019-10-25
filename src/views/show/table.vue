<template>
  <div>
    <div class="table-section">
      <div class="item-name">基础表格</div>
      <p>基础的表格展示用法。</p>
      <div class="basic-use">
        <el-row>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-row>
      </div>
    </div>

    <div class="table-section">
      <div class="item-name">固定列和表头</div>
      <p>横纵内容过多时，可选择固定列和表头。</p>
      <div class="basic-use">
        <el-row>
          <el-table :data="tableData2" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="province" label="省份" width="120"></el-table-column>
            <el-table-column prop="city" label="市区" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          </el-table>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "福建省厦门市思明区中山路 111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "福建省厦门市思明区中山路 111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "福建省厦门市思明区中山路 111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "福建省厦门市思明区中山路 111号"
        }
      ],
      tableData2: [
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2019-10-02",
          name: "Chenxii",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.table-section {
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