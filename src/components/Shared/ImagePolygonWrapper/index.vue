<template>
    <div>
      <div
        class="img-wrapper"
        :style="{
          height: height + 'px',
          width: width + 'px',
        }"
      >
        <div
          class="inside"
          :style="{
            height: height - 0.1 + 'px',
            width: width - 0.1 + 'px',
          }"
        >
          <img v-if="background" :src="background" class="input-wrapper" />
          <b-icon
            v-else
            class="default-img"
            icon="person-fill"
            :style="{
              height: iconHeight + 'px',
              width: iconWidth + 'px',
            }"
          ></b-icon>
        </div>
      </div>
      <!-- <div class="file-input-container" v-if="showCoin">
        <img v-if="coinImage" :src="coinImage" class="input-wrapper" />
      </div> -->
    </div>
  </template>
  
  <script>
//   import coinImage from "@/assets/images/binance-icon.svg";
  
  export default {
    props: {
      defaultImage: {
        type: String,
        default: "",
      },
    //   coinImage: {
    //     type: String,
    //     default: coinImage,
    //   },
      showCoin: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: "",
      },
      width: {
        type: Number,
        default: 45,
      },
      height: {
        type: Number,
        default: 45,
      },
      iconWidth: {
        type: Number,
        default: 20,
      },
      iconHeight: {
        type: Number,
        default: 20,
      },
    },
    data() {
      return {
        background: null,
      };
    },
    created() {
      this.background = this.defaultImage;
    },
    watch: {
      defaultImage() {
        this.background = this.defaultImage;
      },
    },
  };
  </script>
  <style lang="scss" scoped>
  @import "./index";
  </style>