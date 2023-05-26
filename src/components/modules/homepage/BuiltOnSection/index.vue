<template>
  <b-container class="built-on-section">
    <b-row class="mb-5">
      <b-col cols="12" class="text-container text-center">
        <h3 class="fs-48 mb-4">{{ data.title }}</h3>
        <p class="fs-20 px-5">{{ data.text }}</p>
      </b-col>
    </b-row>
    <b-row class="cards-container">
      <b-col v-for="(card, index) in data.cards" :key="index" cols="12" lg="4" class="px-4 mb-4 mb-lg-0">
        <SimpleCard :card="card" :hovered="index === 1" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "BuiltOnSection",
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
