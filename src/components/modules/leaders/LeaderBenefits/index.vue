<template>
  <b-container class="leader-benefits">
    <b-row class="mb-2">
      <b-col cols="12" class="text-container text-center">
        <h3 class="fs-48 mb-4">{{ data.title }}</h3>
        <p class="fs-20 px-5">{{ data.subtitle }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(benefit, idx) in data.benefits" :key="idx" cols="12" lg="4">
        <div class="leader-benefits__card">
          <div class="leader-benefits__icon-holder">
            <img :src="require(`@/assets/images/${benefit.icon}`)" />
          </div>
          <div class="leader-benefits__text-holder">
            <h4 class="fs-20 mb-0">{{ benefit.title }}</h4>
            <p class="fs-14 mb-0">{{ benefit.subtitle }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
