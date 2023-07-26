<template>
  <div class="numbers">
    <b-container>
     <div class="numbers__container">
      <div class="numbers__item">
        <img src="@/assets/images/about-random.svg" />
        <div class="count">
          <h6 class="fs-32">100k</h6>
          <p class="fs-20">{{ $t("ABOUT.RANDOM_STATISTICS") }}</p>
        </div>
      </div>
      <div class="numbers__item">
        <img src="@/assets/images/about-random-two.svg" />
        <div class="count">
          <h6 class="fs-32">2.43M</h6>
          <p class="fs-20">{{ $t("ABOUT.RANDOM_STATISTICS") }}</p>
        </div>
      </div>
      <div class="numbers__item">
        <img src="@/assets/images/about-random-three.svg" />
        <div class="count">
          <h6 class="fs-32">1.2M+</h6>
          <p class="fs-20">{{ $t("ABOUT.RANDOM_STATISTICS") }}</p>
        </div>
      </div>
     </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>