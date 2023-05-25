<template>
  <ValidationProvider v-slot="{ errors, invalid }" :name="name" :rules="rules">
    <b-form-radio-group
      v-if="isGrouped"
      v-bind="$attrs"
      v-model="innerValue"
      :options="options"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length
      }"
      v-on="$listeners"
    >
      <slot name="radio" />
    </b-form-radio-group>

    <b-form-radio
      v-else
      :name="name"
      v-model="innerValue"
      v-bind="$attrs"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length
      }"
      v-on="$listeners"
    >
      <slot name="radio" />
    </b-form-radio>

    <b-form-invalid-feedback v-for="(error, index) in errors" :key="index">
      {{ error }}
    </b-form-invalid-feedback>
  </ValidationProvider>
</template>

<script>
import { FieldMixin } from "@/mixins/FieldMixin"
export default {
  mixins: [FieldMixin],
  props: {
    options: {
      type: Array,
      default: () => []
    },
    isGrouped: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
