<template>
  <b-container fluid class="one-app-container pt-5">
    <b-row>
      <b-col cols="12" md="6" xl="5" class="img-container d-flex align-items-end justify-content-center">
        <img :src="require(`@/assets/images/${data.img.url}`)" />
      </b-col>
      <b-col cols="12" md="6" xl="6" class="text-container pt-5">
        <h3 class="fs-48 fw-700 mb-3">{{ data.title }}</h3>
        <p class="fs-20 mb-4">{{ data.text }}</p>
        <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="d-flex align-items-start mb-3"
        >
          <img src="@/assets/images/global_checked.svg" />
          <span class="mx-3">{{ feature }}</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "OneAppSection",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        img: {
          url: "",
          alt: ""
        },
        features: [""]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
