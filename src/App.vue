<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/style/config.scss";

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  @include transItion(0.5s);
}

.fade-transform-enter {
  opacity: 0;
  @include transForm(translateX(-30px));
}

.fade-transform-leave-to {
  opacity: 0;
  @include transForm(translateX(30px));
}
</style>
