<template>
  <div
    class="simple-card"
    :class="{
      hovered: hovered
    }"
  >
    <div class="text-center mb-4 pb-1">
      <img :src="require(`@/assets/images/${card.img.url}`)" :alt="card.img.alt" />
    </div>
    <div class="card-title fs-20 text-center mb-3">{{ card.title }}</div>
    <div class="card-text fs-14 text-center">{{ card.text }}</div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    card: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        img: {
          url: "",
          alt: ""
        }
      })
    },
    hovered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
