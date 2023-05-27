<template>
  <div class="blog">
    <DefaultLayout>
      <div class="blog__header">
        <h1 class="fs-48">{{ $t("BLOG.BLOG_TITLE") }}</h1>
        <SelectSearch
          v-model="formValues.categoryId"
          class="blog__select-box"
          :label="$t('BLOG.CHOOSE_CATEGORY')"
          :name="$t('BLOG.CHOOSE_CATEGORY')"
          :reduce="(option) => option.id"
          :get-option-label="(option) => option.name"
          :options="categories"
        />
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formValues: {
        categoryId: null
      },
      categories: [
        {
          id: 1,
          name: "category_item_one"
        },
        {
          id: 2,
          name: "category_item_two"
        },
        {
          id: 3,
          name: "category_item_three"
        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
