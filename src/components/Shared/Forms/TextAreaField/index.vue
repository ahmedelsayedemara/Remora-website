<template>
  <ValidationProvider
    v-slot="{ errors, invalid }"
    :name="name"
    :rules="rules"
  >
    <label v-if="label">{{ label }}</label>
    <b-form-textarea
      v-model="innerValue"
      v-bind="$attrs"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length,
      }"
      v-on="$listeners"
    />
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
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
