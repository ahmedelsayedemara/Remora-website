<template>
  <div>
    <DefaultLayout>
      <PageLoader v-if="loading" />
      <div v-else>
        <component
          v-for="(section, index) in sections"
          :key="index"
          :is="section.component"
          :id="section.component"
          :data="section.data"
          @success="$bvModal.show('success-modal')"
          @scrollToJoinNow="scrollToSection"
        ></component>
      </div>
    </DefaultLayout>
    <ToastConfirmationModal
      name="success-modal"
      :title="$t('CONTACT_US.MESSAGE_SENT_SUCCESSFULLY')"
    />
  </div>
</template>

<script>
import { Questions } from "@/constants/Questions"
import HeroSection from "@/components/modules/homepage/HeroSection"
import BuiltOnSection from "@/components/modules/homepage/BuiltOnSection"
import PowerSection from "@/components/modules/homepage/PowerSection"
import HowItWorksSection from "@/components/modules/homepage/HowItWorksSection"
import OneAppSection from "@/components/modules/homepage/OneAppSection"
import QandASection from "@/components/modules/homepage/QandASection"
import OurPartnersSection from "@/components/modules/homepage/OurPartnersSection"
import JoinTheWaitListSection from "@/components/modules/homepage/JoinTheWaitListSection"
import SharkSection from "@/components/modules/homepage/SharkSection"
import ToastConfirmationModal from "@/components/Shared/ToastConfirmationModal"
export default {
  name: "HomeComponent",
  components: {
    HeroSection,
    BuiltOnSection,
    PowerSection,
    HowItWorksSection,
    OneAppSection,
    QandASection,
    OurPartnersSection,
    JoinTheWaitListSection,
    SharkSection,
    ToastConfirmationModal
  },
  data() {
    return {
      loading: true,
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
            // text: this.$t("HOMEPAGE.Q_AND_A_SECTION.TEXT"),
            questions: Questions
          }
        },
        {
          id: 7,
          component: "OurPartnersSection",
          data: {
            title: this.$t("HOMEPAGE.OUR_PARTNERS_SECTION.TITLE"),
            images: [
              {
                url: "cyper-me-logo.svg",
                alt: ""
              },
              {
                url: "misk-accelerator-logo.svg",
                alt: ""
              }
            ]
          }
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },
  watch: {
    "$route.query.section"() {
      if (this.$route.query.section) {
        this.$nextTick(() => {
          this.scrollToSection()
        })
      }
    }
  },
  methods: {
    scrollToSection() {
      const element = document.getElementById("JoinTheWaitListSection")
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
