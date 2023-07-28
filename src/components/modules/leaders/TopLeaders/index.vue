<template>
  <b-container-fluid>
    <div class="top-leaders">
      <b-container>
        <h3 class="fs-48">{{ $t("LEADERS.REMORA_TOP_LEADERS") }}</h3>
        <div class="top-leaders__card">
          <b-table
            class="custom-table"
            :items="leadersRandomList"
            :busy="loading"
            :fields="fields"
            responsive
            show-empty
            :tbody-transition-props="transProps"
          >
            <template #table-busy>
              <div class="text-center my-2">
                <b-spinner class="align-middle" />
              </div>
            </template>

            <template #empty>
              <div class="text-center p-4">
                {{ $t("GLOBAL.NO_MATCHING") }}
              </div>
            </template>
            <template #cell(trader)="data">
              <div>
                <div class="table-profile">
                  <ImagePolygonWrapper :defaultImage="data.item.profile_img" />
                  <div class="name-time">
                    <p class="fs-14">{{ data.item.trader }}</p>
                    <p class="fs-12">{{ data.item.active }}</p>
                  </div>
                </div>
              </div>
            </template>
            <template #cell(roi)="data">
              <span v-if="data.item.isROIup" class="up">{{ data.item.roi }}%</span>
              <span v-else class="down">{{ data.item.roi }}%</span>
            </template>
            <template #cell(total_pnl)="data">
              <span v-if="data.item.isTotalPNLup" class="up">{{ data.item.total_pnl }}%</span>
              <span v-else class="down">{{ data.item.total_pnl }}%</span>
            </template>
            <template #cell(isPerformanceUp)="data">
              <img
                v-if="data.item.isPerformanceUp"
                src="@/assets/images/leaders-performance-up.svg"
              />
              <img v-else src="@/assets/images/leaders-performance-down.svg" />
            </template>
          </b-table>
        </div>
      </b-container>
    </div>
  </b-container-fluid>
</template>
<script>
import ImagePolygonWrapper from "@/components/Shared/ImagePolygonWrapper/index.vue"
export default {
  components: {
    ImagePolygonWrapper
  },
  data() {
    return {
      transProps: {
        name: "flip-list"
      },
      loading: false,
      fields: [
        {
          key: "trader",
          label: this.$t("LEADERS.TRADER"),
          sortable: false
        },
        {
          key: "followers",
          label: this.$t("LEADERS.FOLLOWER"),
          sortable: true
        },
        {
          key: "roi",
          label: this.$t("LEADERS.ROI"),
          sortable: true
        },
        {
          key: "total_pnl",
          label: this.$t("LEADERS.TOTAL_PNL"),
          sortable: true
        },
        {
          key: "aum",
          label: this.$t("LEADERS.AUM"),
          sortable: true
        },
        {
          key: "isPerformanceUp",
          label: this.$t("LEADERS.PERFORMANCE"),
          sortable: true
        }
      ],
      leadersRandomList: [],
      leaders: [
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_ONE"),
          followers: "213",
          roi: "24.07",
          total_pnl: "1665.5",
          aum: "$46559.13",
          profile_img: require("@/assets/images/leaders-trader-one.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_TWO"),
          followers: "663",
          roi: "15.09",
          total_pnl: "1115.8",
          aum: "$49099.13",
          profile_img: require("@/assets/images/leaders-trader-two.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_THREE"),
          followers: "543",
          roi: "54.06",
          total_pnl: "1545.8",
          aum: "$45389.13",
          profile_img: require("@/assets/images/leaders-trader-three.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_FOUR"),
          followers: "783",
          roi: "80.06",
          total_pnl: "1995.8",
          aum: "$87899.13",
          profile_img: require("@/assets/images/leaders-trader-four.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_FIVE"),
          followers: "265",
          roi: "12.06",
          total_pnl: "1115.8",
          aum: "$34389.13",
          profile_img: require("@/assets/images/leaders-trader-five.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_SIX"),
          followers: "290",
          roi: "21.06",
          total_pnl: "2045.8",
          aum: "$47654.13",
          profile_img: require("@/assets/images/leaders-trader-six.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_SEVEN"),
          followers: "323",
          roi: "40.06",
          total_pnl: "1905.8",
          aum: "$49999.13",
          profile_img: require("@/assets/images/leaders-trader-seven.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_EIGHT"),
          followers: "453",
          roi: "11.06",
          total_pnl: "1005.8",
          aum: "$23089.13",
          profile_img: require("@/assets/images/leaders-trader-eight.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_NINE"),
          followers: "883",
          roi: "50.06",
          total_pnl: "2005.8",
          aum: "$47789.13",
          profile_img: require("@/assets/images/leaders-trader-nine.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_TEN"),
          followers: "903",
          roi: "100.06",
          total_pnl: "3000.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-ten.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_ELEVEN"),
          followers: "298",
          roi: "10.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-eleven.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME_TWELVE"),
          followers: "593",
          roi: "101.06",
          total_pnl: "4004.8",
          aum: "$99939.13",
          profile_img: require("@/assets/images/leaders-trader-twelve.jpg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        }
      ]
    }
  },
  mounted() {
    this.getRandomItems(this.leaders, 6)
  },
  methods: {
    getRandomItems(sourceArray, count) {
      let array = [...sourceArray] // Create a copy of the source array
      let result = []

      for (let i = 0; i < count; i++) {
        if (!array.length) {
          break // Exit if there are no more items to choose from
        }

        let randomIndex = Math.floor(Math.random() * array.length)
        let [item] = array.splice(randomIndex, 1) // Splice will remove the item from array and return it
        result.push(item)
      }

      this.leadersRandomList = result
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>