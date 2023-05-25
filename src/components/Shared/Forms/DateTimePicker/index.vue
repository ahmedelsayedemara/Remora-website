<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <ValidationProvider
      v-slot="{ errors, invalid }"
      :name="name"
      :rules="rules"
    >
      <flat-pickr
        v-model="innerValue"
        v-bind="$attrs"
        :class="{
          'input-disabled': $attrs.disabled,
          'is-invalid': invalid & errors.length
        }"
        class="form-control"
      />
      <b-form-invalid-feedback
        v-for="(error, index) in errors"
        :key="index"
      >
        {{ error }}
      </b-form-invalid-feedback>
    </ValidationProvider>
  </div>
</template>

<script>
//https://flatpickr.js.org/options/

/* when you want pass a new options to this date time picker,
you need to pass object called "config" and put in your options.*/

import flatPickr from "vue-flatpickr-component"
import "flatpickr/dist/flatpickr.css"
import { FieldMixin } from "@/mixins/FieldMixin"
export default {
  components: {
    flatPickr
  },
  mixins: [FieldMixin]
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
