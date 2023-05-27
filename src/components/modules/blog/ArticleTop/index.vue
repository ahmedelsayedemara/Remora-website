<template>
  <div class="article-top">
    <div class="article-top__image">
      <img :src="require(`@/assets/images/${article.image}`)" />
    </div>
    <div class="article-top__content">
      <h3 class="fs-16">{{ article.title }}</h3>
      <p class="fs-12">
        {{ article.description }}
      </p>
      <span class="fs-10">{{ article.date }}</span>
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