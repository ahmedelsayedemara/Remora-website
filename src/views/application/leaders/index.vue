<template>
  <div class="leaders">
    <DefaultLayout>
      <HeroSection :data="heroSectionData" />
      <LeaderBenefits :data="benefitsData" />
    </DefaultLayout>
  </div>
</template>
<script>
import HeroSection from "@/components/modules/homepage/HeroSection/index.vue"
import LeaderBenefits from "@/components/modules/leaders/LeaderBenefits/index .vue"
export default {
  components: {
    HeroSection,
    LeaderBenefits
  },
  data() {
    return {
      heroSectionData: {
        title: this.$t("HOMEPAGE.HERO_SECTION.TITLE"),
        text: this.$t("HOMEPAGE.HERO_SECTION.TEXT"),
        label: this.$t("HOMEPAGE.HERO_SECTION.LABEL"),
        btnText: this.$t("HOMEPAGE.HERO_SECTION.BTN_TEXT"),
        img: {
          url: "homepage_hero_section.png",
          alt: "alt"
        }
      },
      benefitsData: {
        title: this.$t("LEADERS.LEADER_BENEFIT_SECTION_TITLE"),
        subtitle: this.$t("LEADERS.LEADER_BENEFIT_SECTION_SUBTITLE"),
        benefits: [
          {
            icon: 'leaders-access.svg',
            title: this.$t("LEADERS.CARD_ONE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_ONE_SUBTITLE")
          },
          {
            icon: 'leaders-fee.svg',
            title: this.$t("LEADERS.CARD_TWO_TITLE"),
            subtitle: this.$t("LEADERS.CARD_TWO_SUBTITLE")
          },
          {
            icon: 'leaders-audience.svg',
            title: this.$t("LEADERS.CARD_THREE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_THREE_SUBTITLE")
          },
          {
            icon: 'leaders-prime.svg',
            title: this.$t("LEADERS.CARD_FOUR_TITLE"),
            subtitle: this.$t("LEADERS.CARD_FOUR_SUBTITLE")
          },
          {
            icon: 'leaders-numbers.svg',
            title: this.$t("LEADERS.CARD_FIVE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_FIVE_SUBTITLE")
          },
          {
            icon: 'leaders-community.svg',
            title: this.$t("LEADERS.CARD_SIX_TITLE"),
            subtitle: this.$t("LEADERS.CARD_SIX_SUBTITLE")
          },
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
