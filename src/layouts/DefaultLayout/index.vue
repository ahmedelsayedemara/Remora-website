<template>
  <div class="default-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header/index.vue"
import Footer from "@/components/Layouts/Footer/index.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
