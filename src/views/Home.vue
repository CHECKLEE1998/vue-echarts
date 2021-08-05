<template>
  <div class="home">
    <nav class="nav">
      <div class="title">
        <h3>Audience Overview</h3>
        <p>Roseville, CA</p>
      </div>
      <div class="menu">
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="activeMenu(index)"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="linear"></div>
      </div>
    </nav>

    <div class="content">
      <!-- Rotation  -->
      <div class="base-view">
        <div class="base-view-box">
          <Rotation />
        </div>
        <div class="base-view-box">
          <div class="top-title">
            <h4>Support Requests</h4>
            <el-button>View All</el-button>
          </div>
          <div class="bottom-content"></div>
        </div>
      </div>

      <!-- Curve Chart -->
      <div class="curve-chart">
        <Curve />
      </div>

      <!-- Statistical Graph -->
      <div class="base-view">
        <div class="base-view-box">
          <Pie />
        </div>
        <div class="base-view-box">
          <Histogram />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "@/components/Rotation";
import { Curve, Pie, Histogram } from "@/components/Echarts";
export default {
  name: "Home",
  components: {
    Rotation,
    Curve,
    Pie,
    Histogram,
  },
  data() {
    return {
      menuList: [
        {
          title: "DASHBOARD",
        },
        {
          title: "PROJECTS",
        },
        {
          title: "CALENDAR",
        },
        {
          title: "MAILBOX",
        },
        {
          title: "SETTINGS",
        },
      ],
    };
  },
  methods: {
    activeMenu(index) {
      let linear = document.querySelector(".linear");
      let result = 100 * index;
      linear.style.left = result + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/config.scss";

.home {
  margin-top: 50px;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      h3 {
        height: 23px;
        font-family: Raleway-Regular;
        font-size: 30px;
        font-weight: normal;
        color: #262b2e;
      }
      p {
        height: 14px;
        font-family: OpenSans;
        font-size: 15px;
        font-weight: normal;
        color: #262b2e;
        opacity: 0.7;
      }
    }
    .menu {
      position: relative;
      ul {
        display: flex;
        li {
          width: 100px;
          font-weight: 600;
          cursor: pointer;
          font-size: 13px;
          color: #262b2e;
          text-align: center;
        }
      }
      .linear {
        position: absolute;
        top: 20px;
        left: 0;
        width: 100px;
        height: 2px;
        background-color: #262b2e;
        opacity: 0.2;
        @include transItion(0.1s);
      }
    }
  }

  .content {
    margin-top: 50px;
    margin-bottom: 80px;
    .base-view {
      display: flex;
      .base-view-box {
        overflow: hidden;
        // padding: 10px;
        margin: 0 5px;
        width: 560px;
        height: 288px;
        background-color: #fff;
        .top-title {
          height: 109px;
          border-bottom: 1px solid #262b2e30;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
        }
      }
    }
    .curve-chart {
      height: 350px;
      margin: 20px 5px;
      background-color: #fff;
    }
  }
}
</style>
