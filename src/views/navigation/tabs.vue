<template>
  <div>
    <div class="tabs-section">
      <div class="item-name">基础用法</div>
      <div class="basic-use">
        <el-row>
          <el-tabs v-model="activeName1" @tab-click="handleClick1">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>

    <div class="tabs-section">
      <div class="item-name">选项卡样式</div>
      <div class="basic-use">
        <el-row>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick2">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>

    <div class="tabs-section">
      <div class="item-name">卡片化</div>
      <div class="basic-use">
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>

    <div class="tabs-section">
      <div class="item-name">卡片化</div>
      <div class="basic-use">
        <el-row>
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              :key="item.name"
              v-for="item in editableTabs"
              :label="item.title"
              :name="item.name"
            >{{item.content}}</el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName1: "first",
      activeName2: "first",
      activeName3: "first",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 3 content"
        }
      ],
      tabIndex: 3
    };
  },
  methods: {
    /* eslint-disable */
    handleClick1(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event) {
      console.log(tab, event);
    },
    handleClick3(tab, event) {
      console.log(tab, event);
    },
    /* eslint-disable */
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  .item-name {
    margin-bottom: 15px;
    font-size: 16px;
  }
  i {
    margin: 15px 15px;
  }
  .el-button {
    margin: 0 15px;
  }
}
</style>