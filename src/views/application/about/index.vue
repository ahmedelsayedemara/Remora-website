<template>
  <DefaultLayout>
    <div class="about">
      <div class="about__header">
        <h3 class="fs-40">
          {{ $t("ABOUT.HEADER_TEXT") }}
        </h3>
      </div>
      <KnowRemora />
      <FollowerToLeader />
      <AboutNumbers />
      <MeetTeam />
      <OurPartnersSection :data="ourPartner" />
    </div>
  </DefaultLayout>
</template>

<script>
import KnowRemora from "@/components/modules/about/KnowRemora/index.vue"
import FollowerToLeader from "@/components/modules/about/FollowerToLeader/index.vue"
import AboutNumbers from "@/components/modules/about/AboutNumbers/index.vue"
import MeetTeam from "@/components/modules/about/MeetTeam/index.vue"
import OurPartnersSection from "@/components/modules/homepage/OurPartnersSection/index.vue"
export default {
  components: {
    KnowRemora,
    FollowerToLeader,
    AboutNumbers,
    MeetTeam,
    OurPartnersSection
  },
  data() {
    return {
      ourPartner: {
        title: this.$t("HOMEPAGE.OUR_PARTNERS_SECTION.TITLE"),
        images: [
          {
            url: "cyper-me-logo.png",
            alt: ""
          },
          {
            url: "misk-accelerator-logo.png",
            alt: ""
          }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
