<template>
  <div>
    <div class="dialog-section">
      <div class="item-name">基本用法</div>
      <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
      <div class="basic-use">
        <el-row>
          <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </el-row>
      </div>
    </div>

    <div class="dialog-section">
      <div class="item-name">自定义内容</div>
      <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
      <div class="basic-use">
        <!-- Table -->
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-dialog>

        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <div class="dialog-section">
      <div class="item-name">基本用法</div>
      <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
      <div class="basic-use">
        <el-row>
          <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

          <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
            <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
            <div slot="footer" class="dialog-footer">
              <el-button @click="outerVisible = false">取 消</el-button>
              <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
            </div>
          </el-dialog>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      dialogVisible: false,
      gridData: [
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "厦门市思明区中山路 1111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "厦门市思明区中山路 1111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "厦门市思明区中山路 1111号"
        },
        {
          date: "2019-09-01",
          name: "Chenxi",
          address: "厦门市思明区中山路 1111号"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    /* eslint-disable */

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
    /* eslint-disable */
  }
};
</script>

<style lang="scss" scoped>
.dialog-section {
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
  .basic-use {
    margin-top: 10px;
  }
  .el-row {
    margin-top: 18px;
  }
  .el-button {
    margin: 0 20px;
  }
}
</style>