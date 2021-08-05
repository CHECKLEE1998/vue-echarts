<template>
  <div class="header w100">
    <Logo />
    <Itools />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Itools from "./itools.vue";
export default {
  name: "Header",
  components: {
    Logo,
    Itools,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 150px;
}
</style>
