<template>
  <div>
    <b-pagination
      :value="currentPage"
      :total-rows="totalItems"
      :per-page="perPage"
      first-number
      last-number
      class="custom-pagination"
      @input="onPageChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    }
  },

  methods: {
    onPageChange(page) {
      this.$emit("onPageChange", page)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
