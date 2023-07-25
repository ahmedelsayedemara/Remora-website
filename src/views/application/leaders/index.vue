<template>
  <div class="leaders">
    <DefaultLayout>
      <HeroSection :data="heroSectionData" />
      <LeaderBenefits :data="benefitsData" />
      <TopLeaders />
      <ImagePolygonWrapper />
      <LeaderFeatures :data="featuresData" />
    </DefaultLayout>
  </div>
</template>
<script>
import HeroSection from "@/components/modules/homepage/HeroSection/index.vue"
import LeaderBenefits from "@/components/modules/leaders/LeaderBenefits/index.vue"
import LeaderFeatures from "@/components/modules/leaders/LeaderFeatures/index.vue"
import TopLeaders from "@/components/modules/leaders/TopLeaders/index.vue"
import ImagePolygonWrapper from "@/components/Shared/ImagePolygonWrapper/index.vue"
export default {
  components: {
    HeroSection,
    LeaderBenefits,
    LeaderFeatures,
    TopLeaders,
    ImagePolygonWrapper
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
            icon: "leaders-access.svg",
            title: this.$t("LEADERS.CARD_ONE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_ONE_SUBTITLE")
          },
          {
            icon: "leaders-fee.svg",
            title: this.$t("LEADERS.CARD_TWO_TITLE"),
            subtitle: this.$t("LEADERS.CARD_TWO_SUBTITLE")
          },
          {
            icon: "leaders-audience.svg",
            title: this.$t("LEADERS.CARD_THREE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_THREE_SUBTITLE")
          },
          {
            icon: "leaders-prime.svg",
            title: this.$t("LEADERS.CARD_FOUR_TITLE"),
            subtitle: this.$t("LEADERS.CARD_FOUR_SUBTITLE")
          },
          {
            icon: "leaders-numbers.svg",
            title: this.$t("LEADERS.CARD_FIVE_TITLE"),
            subtitle: this.$t("LEADERS.CARD_FIVE_SUBTITLE")
          },
          {
            icon: "leaders-community.svg",
            title: this.$t("LEADERS.CARD_SIX_TITLE"),
            subtitle: this.$t("LEADERS.CARD_SIX_SUBTITLE")
          }
        ]
      },
      featuresData: {
        title: this.$t("LEADERS.LEADER_FEATURES_SECTION_TITLE"),
        subtitle: this.$t("LEADERS.LEADER_FEATURES_SECTION_SUBTITLE"),
        features: [
          {
            icon: "leader-support.svg",
            title: this.$t("LEADERS.FEATURES_CARD_ONE_TITLE"),
            subtitle: this.$t("LEADERS.FEATURES_CARD_ONE_SUBTITLE")
          },
          {
            icon: "leader-analytics.svg",
            title: this.$t("LEADERS.FEATURES_CARD_TWO_TITLE"),
            subtitle: this.$t("LEADERS.FEATURES_CARD_TWO_SUBTITLE")
          },
          {
            icon: "leader-trusted.svg",
            title: this.$t("LEADERS.FEATURES_CARD_THREE_TITLE"),
            subtitle: this.$t("LEADERS.FEATURES_CARD_THREE_SUBTITLE")
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
