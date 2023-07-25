<template>
  <b-container-fluid>
    <div class="top-leaders">
      <b-container>
        <h3 class="fs-48">{{ $t("LEADERS.REMORA_TOP_LEADERS") }}</h3>
        <div class="top-leaders__card">
          <b-table
            class="custom-table"
            :items="leaders"
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
          label: this.$t("Trader"),
          sortable: false
        },
        {
          key: "followers",
          label: this.$t("Followers"),
          sortable: true
        },
        {
          key: "roi",
          label: this.$t("ROI"),
          sortable: true
        },
        {
          key: "total_pnl",
          label: this.$t("Total PNL"),
          sortable: true
        },
        {
          key: "aum",
          label: this.$t("AUM"),
          sortable: true
        },
        {
          key: "isPerformanceUp",
          label: this.$t("Performance 1W"),
          sortable: true
        }
      ],
      leaders: [
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-one.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-two.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-three.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-four.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-five.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: true,
          isTotalPNLup: true,
          isPerformanceUp: true
        },
        {
          id: 1,
          trader: this.$t("LEADERS.TRADER_NAME"),
          followers: "213",
          roi: "23.06",
          total_pnl: "1145.8",
          aum: "$47589.13",
          profile_img: require("@/assets/images/leaders-trader-six.svg"),
          active: this.$t("LEADERS.ACTIVE_FROM"),
          isROIup: false,
          isTotalPNLup: false,
          isPerformanceUp: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>