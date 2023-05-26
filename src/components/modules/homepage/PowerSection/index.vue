<template>
  <b-container class="power-section mt-5 pt-5">
    <b-row class="mb-5 align-items-end">
      <b-col cols="12" md="6" class="text-container">
        <h3 class="fs-48 mb-3">{{ data.title }}</h3>
        <p class="fs-20 mb-4">{{ data.text }}</p>
        <div
          v-for="(item, index) in data.cards"
          :key="index"
          class="img-bullet d-flex align-items-center mb-2"
        >
          <img :src="require(`@/assets/images/${item.img.url}`)" :alt="item.img.alt" />
          <span class="mx-3 mb-2 fs-20">{{ item.text }}</span>
        </div>
      </b-col>
      <b-col cols="12" md="6" class="img-container">
        <img :src="require(`@/assets/images/${data.img.url}`)" :alt="data.img.alt" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "PowerSection",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        cards: [{}]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
