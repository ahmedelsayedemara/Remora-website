<template>
  <b-container fluid class="sharks-section">
    <b-container class="img-container text-center px-5">
      <div class="info-card upper d-flex align-items-center">
        <img :src="require(`@/assets/images/${data.upperCard.img.url}`)" alt="" />
        <div class="d-flex flex-column align-items-start justify-content-center ">
          <h4 class="fs-40 fw-700">{{ data.upperCard.title }}</h4>
          <p class="fs-20">{{ data.upperCard.text }}</p>
        </div>
      </div>
      <img :src="require(`@/assets/images/${data.img.url}`)" />
      <div class="info-card lower d-flex align-items-center">
        <img :src="require(`@/assets/images/${data.lowerCard.img.url}`)" alt="" />
        <div class="d-flex flex-column align-items-start justify-content-center ">
          <h4 class="fs-40 fw-700">{{ data.lowerCard.title }}</h4>
          <p class="fs-20">{{ data.lowerCard.text }}</p>
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        img: {},
        upperCard: {},
        lowerCard: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
