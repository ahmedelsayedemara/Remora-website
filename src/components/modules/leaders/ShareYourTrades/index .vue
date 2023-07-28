<template>
  <b-container
    fluid
    class="share-your-trades d-flex justify-content-center align-items-start align-items-sm-center"
  >
    <b-row class="align-items-center">
      <b-col>
        <b-row class="justify-content-center">
          <b-col cols="12" class="text-container text-center">
            <h1 class="fs-48 mb-4" v-html="$t('LEADERS.SHARE_YOUR_TRADE')"></h1>
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-2">
          <Button customClass="btn-secondary" @click="goToJoinNow">{{
            $t("LEADERS.CALL_TO_ACTION")
          }}</Button>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToJoinNow() {
      this.$router.push({
        path: "/",
        query: {
          section: "join-the-waitlist"
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
