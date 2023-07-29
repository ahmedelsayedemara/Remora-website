<template>
  <div class="team">
  <h3 class="fs-32">{{ $t("ABOUT.MEET_TEAM") }}</h3>
  <p class="fs-20 mx-1 text-center">{{ $t("ABOUT.MEET_TEAM_SUBTITLE") }}</p>
  <div class="team__members">
    <div class="team__card">
      <img src="@/assets/images/talal.svg" />
      <h4 class="fs-24">{{ $t("ABOUT.TALAL") }}</h4>
      <p class="fs-14">{{ $t("ABOUT.JOB_TITLE_T") }}</p>
    </div>
    <div class="team__card">
      <img src="@/assets/images/hamad.svg" />
      <h4 class="fs-24">{{ $t("ABOUT.HAMAD") }}</h4>
      <p class="fs-14">{{ $t("ABOUT.JOB_TITLE_H") }}</p>
    </div>
  </div>
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