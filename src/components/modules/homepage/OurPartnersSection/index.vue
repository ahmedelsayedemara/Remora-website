<template>
  <b-container class="our-partners my-5 pt-5 pb-4 px-0 px-md-5">
    <b-row class="mb-5">
      <b-col>
        <h3 class="fs-32 fw-700 text-center">
          {{ data.title }}
        </h3>
      </b-col>
    </b-row>
    <b-row class="px-0 px-md-5">
      <b-col
        v-for="(img, index) in data.images"
        :key="index"
        cols="12"
        sm="6"
        class="text-center"
        :class="{
          'with-border': index < data.images.length - 1
        }"
      >
        <b-img :src="require(`@/assets/images/${img.url}`)" :alt="img.alt"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        images: [{}]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
