<template>
  <div class="follower">
    <b-container>
      <b-row>
        <b-col cols="12" lg="8">
          <h3 class="fs-40">
            {{ $t("ABOUT.FOLLOWER_TO_LEADER_HEADER") }}
          </h3>
          <p class="fs-20">{{ $t("ABOUT.FOLLOWER_TO_LEADER_SUBTITLE") }}</p>

          <div class="follower__items">
            <img src="@/assets/images/about-follower-community.svg" />
            <p class="fs-20">{{ $t("ABOUT.FOLLOWER_ITEM_ONE_TEXT") }}</p>
          </div>
          <div class="follower__items">
            <img src="@/assets/images/about-follower-access.svg" />
            <p class="fs-20">{{ $t("ABOUT.FOLLOWER_ITEM_TWO_TEXT") }}</p>
          </div>
          <Button class="join-btn">
            {{ $t("ABOUT.JOIN_REMORA") }}
          </Button>
          <!-- <Button custom-class="primary">{{ $("ABOUT.JOIN_REMORA") }}</Button> -->
        </b-col>
        <b-col cols="12" lg="4">
          <img class="w-100" src="@/assets/images/about-follower-to-leader.svg" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>