<template>
  <div class="section-bg">
  <b-container class="leader-features">
    <b-row class="mb-2">
      <b-col cols="12" class="text-container text-center">
        <h3 class="fs-48 mb-4">{{ data.title }}</h3>
        <p class="fs-20 px-5">{{ data.subtitle }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(feature, idx) in data.features" :key="idx" cols="12" lg="4">
        <div class="leader-features__card">
          <div class="leader-features__icon-holder">
            <img :src="require(`@/assets/images/${feature.icon}`)" />
          </div>
          <div class="leader-features__text-holder">
            <h4 class="fs-20 mb-0">{{ feature.title }}</h4>
            <p class="fs-14 mb-0">{{ feature.subtitle }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
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
