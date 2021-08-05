<template>
  <section class="content w100">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: "Content",
  computed: {
    key() {
      return this.$router.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  padding: 0 150px;
}
</style>
