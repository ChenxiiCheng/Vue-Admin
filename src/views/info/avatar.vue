<template>
  <div>
    <div class="avatar-section">
      <div class="item-name">基本类型</div>
      <p>通过 shape 和 size 设置头像的形状和大小。</p>
      <div class="basic-use">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="12">
            <p class="sub-title">circle</p>
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <p class="sub-title">square</p>
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="avatar-section">
      <div class="item-name">展示类型</div>
      <p>支持三种类型：图标、图片和字符</p>
      <div class="basic-use">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div>
          <el-avatar>user</el-avatar>
        </div>
      </div>
    </div>

    <div class="avatar-section">
      <div class="item-name">图片加载失败的 fallback 行为</div>
      <p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
      <div class="basic-use">
        <el-avatar :size="60" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </div>
    </div>

    <div class="avatar-section">
      <div class="item-name">图片如何适应容器框</div>
      <p>当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。</p>
      <div class="basic-use">
        <div class="block" v-for="fit in fits" :key="fit">
          <p class="title">{{ fit }}</p>
          <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  },
  methods: {
    errorHandler() {
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(26, 26, 26, 0.1);
  .item-name {
    margin-bottom: 16px;
    font-size: 16px;
  }
  p {
    font-size: 13px;
    color: grey;
  }
  .basic-use {
    display: flex;
    justify-content: space-between;
  }
  .block {
    display: inline-block;
    margin-right: 40px;
  }
  .title {
    text-align: center;
  }
}
</style>