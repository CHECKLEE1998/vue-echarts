<template>
  <div class="layout">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import { Header, Content, Footer } from "./components/index.js";
export default {
  name: "Layout",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>
