<template>
  <div>
    <div class="home-section">
      <div class="item-name">Welcome to Vue Admin - By Chenxii</div>
      <div class="basic-use">
        <el-row>
          <el-carousel :interval="3000" type="card" height="360px">
            <el-carousel-item v-for="item in dataimg" :key="item.idx">
              <img :src="item.src" alt="carousel img" />
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      dataimg: [
        {
          idx: 1,
          src: require("../../assets/images/unsplash-01.jpg")
        },
        {
          idx: 2,
          src: require("../../assets/images/unsplash-02.jpg")
        },
        {
          idx: 3,
          src: require("../../assets/images/unsplash-03.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-section {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.1);
  .item-name {
    margin-bottom: 30px;
    text-align: center;
    font-size: 20px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>