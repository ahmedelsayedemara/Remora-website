<template>
  <div class="know-remora">
    <div class="know-remora__container">
      <h3 class="fs-40">
        {{ $t("ABOUT.KNOW_REMORA") }}
      </h3>
      <p class="fs-20">{{ $t("ABOUT.KNOW_REMORA_SUBTITLE") }}</p>
      <div class="know-remora__tabs">
          <p :class="selectedTab == 'vision' &&'active-tab'" @click="setSelectedTab('vision')">{{ $t("ABOUT.OUR_VISION") }}</p>
          <img src="@/assets/images/about-vertical-line.svg" />
          <p :class="selectedTab == 'mission' &&'active-tab'" @click="setSelectedTab('mission')">{{ $t("ABOUT.OUR_MISSION") }}</p>
      </div>

      <p v-if="selectedTab == 'mission'" class="mission fs-20">
        {{ $t("ABOUT.MISSION") }}
      </p>
      <p v-else class="vision fs-20">
        {{ $t("ABOUT.VISION") }}
      </p> 
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            selectedTab: "vision"
        }
    },
    methods:{
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>