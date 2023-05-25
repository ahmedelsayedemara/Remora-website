<template>
  <ValidationProvider
    v-slot="{ errors, invalid }"
    :name="name"
    :rules="rules"
  >
    <label v-if="label">{{ label }}</label>

    <v-select
      v-model="innerValue"
      v-bind="$attrs"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
      :options="options"
      :class="{
        'input-disabled': $attrs.disabled,
        'is-invalid': invalid & errors.length,
      }"
      :placeholder="placeholder"
      v-on="$listeners"
    >
      <template #no-options="">
        {{ $t("NO_MATCHING") }}
      </template>
    </v-select>

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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
  },
  mixins: [FieldMixin],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
