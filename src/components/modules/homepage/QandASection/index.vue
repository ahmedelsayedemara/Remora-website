<template>
  <b-container class="qa-section bg-white pt-5 px-5">
    <b-row class="px-4 px-md-5">
      <b-col class="px-0 px-md-5">
        <div class="pb-2">
          <h3 class="fs-32 fw-700 text-center mb-3">{{ data.title }}</h3>
          <!-- <p class="fs-20 text-center mb-5">{{ data.text }}</p> -->
        </div>
        <div v-for="(question, index) in data.questions" :key="index">
          <b-button
            v-b-toggle="'collapse-' + index"
            class="toggle-btn fs-20 w-100 text-left bg-white border-0 px-0 mb-4 d-flex justify-content-between align-items-center"
          >
            {{ $i18n.locale == "ar" ? question.titleAr : question.titleEn }}
            <img class="chevron" src="@/assets/images/chevron-up.svg" />
          </b-button>
          <b-collapse :id="'collapse-' + index" class="mt-2">
            <p class="fs-16 mb-5">
              {{ $i18n.locale == "ar" ? question.descriptionAr : question.descriptionEn }}
            </p>
          </b-collapse>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "QandASection",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        questions: [{}]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
