<template>
  <div>
    <div class="tag-section">
      <div class="item-name">基础用法</div>
      <div class="basic-use">
        <el-row>
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </el-row>
      </div>
    </div>

    <div class="tag-section">
      <div class="item-name">可移除标签</div>
      <div class="basic-use">
        <el-row>
          <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
        </el-row>
      </div>
    </div>

    <div class="tag-section">
      <div class="item-name">动态编辑标签</div>
      <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
      <div class="basic-use">
        <el-row>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </el-row>
      </div>
    </div>

    <div class="tag-section">
      <div class="item-name">不同尺寸</div>
      <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      <div class="basic-use">
        <el-row>
          <el-tag closable>默认标签</el-tag>
          <el-tag size="medium" closable>中等标签</el-tag>
          <el-tag size="small" closable>小型标签</el-tag>
          <el-tag size="mini" closable>超小标签</el-tag>
        </el-row>
      </div>
    </div>

    <div class="tag-section">
      <div class="item-name">不同主题</div>
      <p>Tag 组件提供了三个不同的主题：dark、light 和 plain</p>
      <div class="basic-use">
        <el-row>
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark"
          >{{ item.label }}</el-tag>
        </el-row>
        <el-row>
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="plain"
          >{{ item.label }}</el-tag>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ],
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ],
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    /* eslint-disable */
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    /* eslint-disable */

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.tag-section {
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
    .el-tag {
      margin: 0 15px;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
</style>