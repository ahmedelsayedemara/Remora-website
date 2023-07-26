<template>
  <b-container fluid class="steps-container mb-5 py-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="fs-48 fw-700">
            {{ data.title }}
          </h2>
          <p class="fs-20 fw-400">
            {{ data.text }}
          </p>
        </b-col>
      </b-row>
      <b-row class="steps m-auto">
        <div class="background-dashed-line d-none d-md-block"></div>
        <b-col
          cols="12"
          md="4"
          v-for="(step, index) in data.steps"
          :key="index"
          class="step mb-5 mb-md-0"
        >
          <div class="outer-circle d-flex justify-content-center align-items-center">
            <div class="inner-circle d-flex justify-content-center align-items-center">
              <span class="fs-24 fw-500">
                {{ step.number }}
              </span>
            </div>
          </div>
          <div class="tooltip-how d-flex align-items-center justify-content-center fs-20">
            <div class="inner fs-20"></div>
            {{ step.tooltip }}
          </div>
        </b-col>
      </b-row>
      <!-- <b-row class="justify-content-center mt-0 mt-md-5 pt-5 mb-1">
        <Button variant="primary" customClass="d-flex align-items-center watch-video-btn">
          <img :src="require(`@/assets/images/${data.img.url}`)" :alt="data.img.alt" class="mx-1" />
          <span class="mx-1 fs-18 fw-500">
            {{ data.btnText }}
          </span>
        </Button>
      </b-row> -->
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        steps: [{}]
      })
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
