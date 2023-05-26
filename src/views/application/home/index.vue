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
    HeroSection: () => import("@/components/modules/homepage/HeroSection")
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
