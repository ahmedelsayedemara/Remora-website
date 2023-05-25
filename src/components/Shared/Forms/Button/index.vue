<template>
  <b-overlay
    :show="loading"
    rounded
    opacity="0"
    spinner-small
    spinner-variant="primary"
    :class="{
      'd-block': dBlock,
      'd-inline-block': !dBlock,
      'not-allowed': loading
    }"
  >
    <b-button
      :variant="color"
      :disabled="disabled"
      v-bind="$attrs"
      class="base-btn"
      :class="{
        'not-allowed': loading,
        [customClass]: customClass
      }"
      v-on="$listeners"
    >
      <slot />
      <b-spinner
        v-if="loading"
        small
        class="mx-2"
      />
    </b-button>
  </b-overlay>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: null,
      default: ""
    },
    dBlock: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary",
      validator: (prop) =>
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "opacity",
          "light-danger",
          "light-dark",
          "light-primary",
          "outline"
        ].includes(prop)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
