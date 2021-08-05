<template>
  <div class="footer w100">
    <nav class="content">
      <Logo />
      <section class="menu">
        <ul v-for="item in menuList" :key="item.key">
          <li v-for="(child, index) in item.children" :key="index">
            {{ child.title }}
          </li>
        </ul>
      </section>
    </nav>
    <div class="black"></div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import { menuList } from "./data.js";
export default {
  name: "Footer",
  components: {
    Logo,
  },
  data() {
    return {
      menuList: menuList,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  box-sizing: border-box;
  height: 290px;

  .content {
    display: flex;
    padding: 80px 150px 0 150px;
    background-color: #202124;
    height: 253px;

    .menu {
      display: flex;
      padding-left: 77px;

      ul {
        margin-right: 35%;

        li {
          cursor: pointer;
          color: #fff;
          height: 25px;
          line-height: 25px;
          font-size: 13px;
          margin: 5px 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .black {
    height: 37px;
    background-color: #1c1d20;
  }
}
</style>
