<template>
  <div>
    <Loading :loading="loading" />
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
    PowerSection: () => import("@/components/modules/homepage/PowerSection"),
    HowItWorksSection: () => import("@/components/modules/homepage/HowItWorksSection"),
    OneAppSection: () => import("@/components/modules/homepage/OneAppSection"),
    QandASection: () => import("@/components/modules/homepage/QandASection"),
    OurPartnersSection: () => import("@/components/modules/homepage/OurPartnersSection"),
    JoinTheWaitListSection: () => import("@/components/modules/homepage/JoinTheWaitListSection"),
    SharkSection: () => import("@/components/modules/homepage/SharkSection")
  },
  data() {
    return {
      loading: false,
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
        },
        {
          id: 3,
          component: "PowerSection",
          data: {
            title: this.$t("HOMEPAGE.POWER_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.POWER_SECTION.TEXT"),
            img: {
              url: "homepage_power_section.png",
              alt: ""
            },
            cards: [
              {
                text: this.$t("HOMEPAGE.POWER_SECTION.CARD_1_TEXT"),
                img: {
                  url: "homepage_power_section_card1.svg",
                  alt: "alt"
                }
              },
              {
                text: this.$t("HOMEPAGE.POWER_SECTION.CARD_2_TEXT"),
                img: {
                  url: "homepage_power_section_card2.svg",
                  alt: "alt"
                }
              },
              {
                text: this.$t("HOMEPAGE.POWER_SECTION.CARD_3_TEXT"),
                img: {
                  url: "homepage_power_section_card3.svg",
                  alt: "alt"
                }
              }
            ]
          }
        },
        {
          id: 9,
          component: "SharkSection",
          data: {
            img: {
              url: "homepage_shark_section_shark.png",
              alt: ""
            },
            upperCard: {
              img: {
                url: "homepage_shark_section_card1.svg",
                alt: ""
              },
              title: this.$t("HOMEPAGE.SHARK_SECTION.CARD_1_TITLE"),
              text: this.$t("HOMEPAGE.SHARK_SECTION.CARD_1_TEXT")
            },
            lowerCard: {
              img: {
                url: "homepage_shark_section_card2.svg",
                alt: ""
              },
              title: this.$t("HOMEPAGE.SHARK_SECTION.CARD_2_TITLE"),
              text: this.$t("HOMEPAGE.SHARK_SECTION.CARD_2_TEXT")
            }
          }
        },
        {
          id: 4,
          component: "HowItWorksSection",
          data: {
            title: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.TEXT"),
            btnText: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.BTN_TEXT"),
            img: {
              url: "homepage_how_it_works_section_btn.svg",
              alt: ""
            },
            steps: [
              {
                number: "01",
                tooltip: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.STEP_1_TOOLTIP")
              },
              {
                number: "02",
                tooltip: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.STEP_2_TOOLTIP")
              },
              {
                number: "03",
                tooltip: this.$t("HOMEPAGE.HOW_IT_WORKS_SECTION.STEP_3_TOOLTIP")
              }
            ]
          }
        },
        {
          id: 5,
          component: "OneAppSection",
          data: {
            title: this.$t("HOMEPAGE.ONE_APP_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.ONE_APP_SECTION.TEXT"),
            features: [
              this.$t("HOMEPAGE.ONE_APP_SECTION.FEATURE1"),
              this.$t("HOMEPAGE.ONE_APP_SECTION.FEATURE2")
            ],
            img: {
              url: "homepage_one_app_section.png",
              alt: ""
            }
          }
        },
        {
          id: 8,
          component: "JoinTheWaitListSection",
          data: {
            title: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.TEXT"),
            btnText: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.BTN_TEXT"),
            inputs: [
              {
                placeholder: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_1_PLACEHOLDER"),
                label: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_1_PLACEHOLDER"),
                type: "email"
              },
              {
                placeholder: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_2_PLACEHOLDER"),
                label: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_2_PLACEHOLDER"),
                type: "phone-number"
              },
              {
                placeholder: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_3_PLACEHOLDER"),
                label: this.$t("HOMEPAGE.JOIN_THE_WAITLIST_SECTION.INPUT_3_PLACEHOLDER"),
                type: "checkbox"
              }
            ]
          }
        },
        {
          id: 6,
          component: "QandASection",
          data: {
            title: this.$t("HOMEPAGE.Q_AND_A_SECTION.TITLE"),
            text: this.$t("HOMEPAGE.Q_AND_A_SECTION.TEXT"),
            questions: [
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION1"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER1")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION2"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER2")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION3"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER3")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION4"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER4")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION5"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER5")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION6"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER6")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION7"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER7")
              },
              {
                question: this.$t("HOMEPAGE.Q_AND_A_SECTION.QUESTION8"),
                answer: this.$t("HOMEPAGE.Q_AND_A_SECTION.ANSWER8")
              }
            ]
          }
        },
        {
          id: 7,
          component: "OurPartnersSection",
          data: {
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
      ]
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2400)
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
