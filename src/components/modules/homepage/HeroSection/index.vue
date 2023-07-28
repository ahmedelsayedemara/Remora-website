<template>
  <div class="hero-section">
    <div class="container-fluid">
      <b-row>
        <b-col cols="12" lg="6" class="text-container">
          <h1 class="fs-56">{{ data.title }}</h1>
          <p class="fs-20">{{ data.text }}</p>
          <p class="bold fs-20">{{ data.label }}</p>
          <div class="btn-container mt-5">
            <Button variant="primary" @click="$emit('scrollToJoinNow')">
              {{ data.btnText }}
            </Button>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="img-container">
          <img :src="require(`@/assets/images/${data.img.url}`)" :alt="data.img.alt" />
          <div class="mask d-none d-xl-block"></div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        label: "",
        btnText: "",
        img: {
          url: "",
          alt: ""
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
