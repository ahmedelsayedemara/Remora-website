<template>
  <div class="preloader-container" :class="loading ? 'd-flex' : 'd-none'">
    <div class="preloader">
      <span class="rot-1"></span>
      <span class="rot-2"></span>
      <span class="rot-3"></span>
      <span class="rot-4"></span>
      <span class="rot-5"></span>
      <span class="rot-6"></span>
      <span class="rot-7"></span>
      <span class="rot-8"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
