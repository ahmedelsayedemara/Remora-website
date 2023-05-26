<template>
  <div>
    <DefaultLayout>
      <component
        v-for="(section, index) in sections"
        :key="index"
        :is="section.component"
        :data="section.data"
      ></component>
    </DefaultLayout>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  components: {
    HeroSection: () => import("@/components/modules/homepage/HeroSection"),
    BuiltOnSection: () => import("@/components/modules/homepage/BuiltOnSection"),
  },
  data() {
    return {
      sections: [
        {
          id: 1,
          component: "HeroSection",
          data: {
            title: this.$t("HOMEPAGE.HERO_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.HERO_SECTION.TEXT"),
            label: this.$t("HOMEPAGE.HERO_SECTION.LABEL"),
            btnText: this.$t("HOMEPAGE.HERO_SECTION.BTN_TEXT"),
            img: {
              url: "homepage_hero_section.png",
              alt: "alt"
            }
          }
        },
        {
          id: 2,
          component: "BuiltOnSection",
          data: {
            title: this.$t("HOMEPAGE.BUILT_ON_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.BUILT_ON_SECTION.TEXT"),
            cards: [
              {
                title: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_1_TITLE"),
                text: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_1_TEXT"),
                img: {
                  url: "homepage_built_on_section_card1.svg",
                  alt: "alt"
                }
              },
              {
                title: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_2_TITLE"),
                text: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_2_TEXT"),
                img: {
                  url: "homepage_built_on_section_card2.svg",
                  alt: "alt"
                }
              },
              {
                title: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_3_TITLE"),
                text: this.$t("HOMEPAGE.BUILT_ON_SECTION.CARD_3_TEXT"),
                img: {
                  url: "homepage_built_on_section_card3.svg",
                  alt: "alt"
                }
              }
            ]
          }
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
