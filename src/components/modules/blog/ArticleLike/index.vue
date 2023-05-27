<template>
  <div class="article-like">
    <div class="article-like__tag">
      <span class="fs-12">{{ article.tag }}</span>
    </div>
    <div class="article-like__description">
      <p class="fs-14">{{ article.description }}</p>
    </div>
    <div class="article-like__date fs-12">
      <p>{{ article.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>