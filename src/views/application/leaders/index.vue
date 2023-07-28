<template>
  <div class="leaders">
    <DefaultLayout>
      <PageLoader v-if="loading" />
      <div v-else>
        <HeroSection :data="heroSectionData" />
        <LeaderBenefits :data="benefitsData" />
        <TopLeaders />
        <LeaderFeatures :data="featuresData" />
        <ShareYourTrades />
        <QandASection :data="QandA.data" />
      </div>
    </DefaultLayout>
  </div>
</template>
<script>
import HeroSection from "@/components/modules/homepage/HeroSection/index.vue"
import LeaderBenefits from "@/components/modules/leaders/LeaderBenefits/index.vue"
import LeaderFeatures from "@/components/modules/leaders/LeaderFeatures/index.vue"
import TopLeaders from "@/components/modules/leaders/TopLeaders/index.vue"
import ShareYourTrades from "@/components/modules/leaders/ShareYourTrades/index .vue"
import QandASection from "@/components/modules/homepage/QandASection/index.vue"
import { Questions } from "@/constants/Questions"

export default {
  components: {
    HeroSection,
    LeaderBenefits,
    LeaderFeatures,
    TopLeaders,
    ShareYourTrades,
    QandASection
  },
  data() {
    return {
      loading: true,
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
      },
      QandA: {
        id: 6,
        component: "QandASection",
        data: {
          title: this.$t("HOMEPAGE.Q_AND_A_SECTION.TITLE"),
          // text: this.$t("HOMEPAGE.Q_AND_A_SECTION.TEXT"),
          questions: Questions
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
