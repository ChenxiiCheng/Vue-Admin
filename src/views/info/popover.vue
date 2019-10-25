<template>
  <div>
    <div class="button-section">
      <div class="item-name">基本用法</div>
      <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
      <div class="basic-use">
        <el-row>
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <el-button slot="reference">hover 激活</el-button>
          </el-popover>

          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <el-button slot="reference">click 激活</el-button>
          </el-popover>

          <el-popover
            ref="popover"
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          ></el-popover>
          <el-button v-popover:popover>focus 激活</el-button>

          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="manual"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            v-model="visible"
          >
            <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
          </el-popover>
        </el-row>
      </div>
    </div>

    <div class="button-section">
      <div class="item-name">嵌套信息</div>
      <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
      <div class="basic-use">
        <el-row>
          <el-popover placement="right" width="400" trigger="click">
            <el-table :data="gridData">
              <el-table-column width="150" property="date" label="日期"></el-table-column>
              <el-table-column width="100" property="name" label="姓名"></el-table-column>
              <el-table-column width="300" property="address" label="地址"></el-table-column>
            </el-table>
            <el-button slot="reference">click 激活</el-button>
          </el-popover>
        </el-row>
      </div>
    </div>

    <div class="button-section">
      <div class="item-name">嵌套操作</div>
      <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
      <div class="basic-use">
        <el-row>
          <el-popover placement="top" width="160" v-model="visible2">
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
            <el-button slot="reference">删除</el-button>
          </el-popover>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      gridData: [
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
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.button-section {
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
  .el-button {
    margin: 0 18px;
  }
}
</style>