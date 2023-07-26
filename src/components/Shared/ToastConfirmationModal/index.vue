<template>
  <b-modal :id="name" hide-footer @hide="$emit('onHideConfirmation')" size="lg" centered>
    <template v-slot:modal-header="{ close }">
      <b-icon class="close-modal-icon" icon="x" width="30" height="30" @click="close"></b-icon>
    </template>
    <div :class="$i18n.locale == 'en' ? '' : 'rtl'">
      <div class="modal-body text-center">
        <!-- <img
          v-if="showImage && imageName"
          class="reomve-img"
          :src="require(`@/assets/images/${imageName}.svg`)"
          alt=""
        /> -->
        <img
          v-if="showImage && imageName"
          class="reomve-img"
          src="@/assets/images/success_svg.svg"
          alt=""
        />

        <h5 class="title">
          {{ title }}
        </h5>
        <p class="message">
          {{ message }}
          <span class="sub-message" :class="subMessageClass" v-if="subMessage">
            {{ subMessage }}
          </span>
        </p>
      </div>
      <div class="actions text-center">
        <div class="d-inline-block mr-3">
          <Button
            v-if="showCancelButton"
            color="light-dark"
            @click="onCancel"
            :custom-class="`text-uppercase min-w-118 ${cancelClass}`"
          >
            {{ cancelTitle ? cancelTitle : $t("GLOBAL_CLOSE") }}
          </Button>
        </div>
        <div class="d-inline-block">
          <Button
            v-if="showConfirmButton"
            :custom-class="`text-uppercase min-w-118 ${confirmClass}`"
            @click="onConfirm"
            :loading="isConfirmationLoading"
            :color="confirmColor"
          >
            {{ confirmTitle ? confirmTitle : $t("CONFIRM") }}
          </Button>
        </div>
        <div class="d-inline-block">
          <Button
            v-if="showCloseButton"
            @click="onClose"
            :custom-class="`text-uppercase min-w-118 ${closeClass}`"
          >
            {{ closeTitle ? closeTitle : $t("GLOBAL_CLOSE") }}
          </Button>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  props: {
    // name "id" modal
    name: {
      type: String,
      default: "toast-confirmation-modal",
    },
    title: {
      type: String,
      default: "",
    },
    subMessage: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    confirmTitle: {
      type: String,
      default: "",
    },
    cancelTitle: {
      type: String,
      default: "",
    },
    closeTitle: {
      type: String,
      default: "",
    },
    isConfirmationLoading: {
      type: Boolean,
      default: false,
    },
    showCancelButton: {
      type: Boolean,
      default: false,
    },
    showConfirmButton: {
      type: Boolean,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      default: false,
    },
    cancelClass: {
      type: String,
      default: "btn-outline-danger",
    },
    confirmClass: {
      type: String,
      default: "",
    },
    confirmColor: {
      type: String,
      default: "danger",
    },
    closeClass: {
      type: String,
      default: "",
    },
    subMessageClass: {
      type: String,
      default: "",
    },
    showImage: {
      type: Boolean,
      default: true,
    },
    // "success", "danger", "warning",
    imageName: {
      type: String,
      default: "success",
    },
  },

  methods: {
    onConfirm() {
      this.$emit("onConfirm");
    },
    onCancel() {
      this.$emit("onCancel");
    },
    onClose() {
      this.$emit("onClose");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
