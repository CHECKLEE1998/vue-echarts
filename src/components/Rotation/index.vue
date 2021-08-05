<template>
  <div class="rotation">
    <div class="img-list">
      <ul>
        <li
          v-show="index === nowImg"
          v-for="(item, index) in imgList"
          :key="index"
        >
          <img :src="item" />
        </li>
      </ul>
      <div class="img-btn">
        <div class="iconfont" @click="subImg">&#xe607;</div>
        <div class="iconfont right" @click="nextImg">&#xe607;</div>
      </div>
      <div class="point">
        <span
          :class="index === points ? 'active' : ''"
          v-for="(item, index) in this.imgList"
          :key="index"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rotation",
  data() {
    return {
      nowImg: 0, // current image index
      points: 0,
      imgList: [
        require("@/assets/wall1.jpg"),
        require("@/assets/wall2.jpg"),
        require("@/assets/wall3.jpg"),
        require("@/assets/wall4.jpg"),
        require("@/assets/wall5.jpg"),
      ],
    };
  },
  methods: {
    subImg() {
      if (this.nowImg <= 0) {
        this.nowImg = this.imgList.length - 1;
        this.points = this.imgList.length - 1;
      } else {
        this.nowImg--;
        this.points--;
      }
    },
    nextImg() {
      if (this.nowImg >= this.imgList.length - 1) {
        this.nowImg = 0;
        this.points = 0;
      } else {
        this.nowImg++;
        this.points++;
      }
    },
  },
  created() {
    setInterval(this.nextImg, 2000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/config.scss";
.rotation {
  position: relative;
  .img-list {
    ul {
      li {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .img-btn {
      position: absolute;
      top: 150px;
      display: flex;
      left: 0;
      right: 0;
      justify-content: space-between;
      div {
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        color: #fff;
        height: 40px;
        width: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        &.right {
          @include transForm(rotate(-180deg));
        }
      }
    }
    .point {
      position: absolute;
      display: flex;
      top: 270px;
      left: 40%;
      span {
        margin: 0 5px;
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50px;
        background-color: rgb(0, 0, 0);
      }
      .active {
        background-color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
