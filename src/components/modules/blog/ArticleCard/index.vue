<template>
  <div class="article">
    <b-card
      :title="article.title"
      :img-src="require(`@/assets/images/${article.image}`)"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 cursor-pointer"
      @click="handleGetDetails(article.id)"
    >
      <template #header>
        <div class="article__tags">
          <!-- <div v-for="tag in article.tags" :key="tag.id" class="article__tag">
            <span class="fs-12">{{ tag.name }}</span>
          </div> -->
        </div>
      </template>

      <b-card-text>
        {{ article.description }}
        <p>{{ article.published_at }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleGetDetails(articleId) {
      this.$emit("handleGetDetails", articleId)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>