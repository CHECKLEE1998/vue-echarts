<template>
  <div class="itools">
    <div class="tool">
      <span class="iconfont">&#xe660;</span>
      <span class="iconfont">&#xe636;</span>
    </div>
    <div class="logout">Log Out</div>
  </div>
</template>

<script>
export default {
  name: "Itools",
};
</script>

<style lang="scss" scoped>
@import "@/style/config.scss";

.itools {
  display: flex;

  .tool {
    line-height: 40px;
    margin-right: 30px;
    span {
      cursor: pointer;
      font-size: 20px;
      color: #262b2e;
      opacity: 0.7;
      margin: 0 5px;
    }
  }

  .logout {
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    color: #fff;
    width: 110px;
    height: 40px;
    line-height: 40px;
    background-color: #f92525;
    @include transItion(0.2s);

    &:hover {
      background-color: #b41c1c;
    }
  }
}
</style>
