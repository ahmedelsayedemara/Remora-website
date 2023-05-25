<template>
  <ValidationProvider
    v-slot="{ errors, invalid }"
    :name="name"
    :rules="rules"
  >
    <b-form-checkbox-group
      v-if="options.length"
      v-model="innerValue"
      v-bind="$attrs"
      :options="options"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length,
      }"
      v-on="$listeners"
    />

    <b-form-checkbox
      v-else
      v-model="innerValue"
      v-bind="$attrs"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length,
      }"
      v-on="$listeners"
    >
      {{ name }}
    </b-form-checkbox>

    <slot />

    <b-form-invalid-feedback
      v-for="(error, index) in errors"
      :key="index"
    >
      {{ error }}
    </b-form-invalid-feedback>
  </ValidationProvider>
</template>

<script>
import { FieldMixin } from "@/mixins/FieldMixin";

export default {
  mixins: [FieldMixin],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
