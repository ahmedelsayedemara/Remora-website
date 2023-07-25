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
            :sticky-header="true"
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
                {{ $t("GLOBAL.NO_DATA") }}
              </div>
            </template>
            <template #cell(account)="data">
              <div>
                <div class="table-profile">
                  <img :src="data.item.profile_img" />
                  <p>{{ data.item.account }}</p>
                </div>
              </div>
            </template>
          </b-table>
        </div>
      </b-container>
    </div>
  </b-container-fluid>
</template>
<script>
export default {
  data() {
    return {
      transProps: {
        name: "flip-list"
      },
      loading: false,
      fields: [
        {
          key: "account",
          label: this.$t("Trader"),
          sortable: false
        },
        {
          key: "area",
          label: this.$t("Followers"),
          sortable: false
        },
        {
          key: "join_date",
          label: this.$t("ROI"),
          sortable: false
        },
        {
          key: "done_requests",
          label: this.$t("Total PNL"),
          sortable: false
        },
        {
          key: "now_requests",
          label: this.$t("AUM"),
          sortable: false
        },
        {
          key: "profits",
          label: this.$t("Performance 1W"),
          sortable: false
        }
      ],
      leaders: [
        {
          id: 1,
          account: "Amer",
          area: "test test",
          join_date: "3test",
          done_requests: "16 الف",
          now_requests: "3الاف",
          profits: "248"
          // profile_img: require('@/assets/images/icons/avatar.svg')
        },
        {
          id: 1,
          account: "Amer",
          area: "test test",
          join_date: "3test",
          done_requests: "16 الف",
          now_requests: "3الاف",
          profits: "248"
          // profile_img: require('@/assets/images/icons/avatar.svg')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>