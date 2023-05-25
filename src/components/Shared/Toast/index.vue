<template>
  <div v-if="showToast" />
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  // type: // success,danger,light,medium,dark

  data() {
    return {
      showToast: false
    }
  },
  computed: {
    ...mapGetters(["toast"])
  },

  watch: {
    toast() {
      if (this.toast.isVisible) {
        this.showToast = true
        if (typeof this.toast.message === "string") {
          this.$root.$bvToast.toast(this.toast.message, {
            title: this.toast.title,
            solid: true,
            variant: this.toast.type,
            toaster: this.$i18n.locale == "ar" ? "b-toaster-top-left" : "b-toaster-top-right"
          })
        } else {
          this.$root.$bvToast.toast(this.$t("GLOBAL_ERROR_MSG"), {
            title: this.toast.title,
            solid: true,
            variant: this.toast.type,
            toaster: this.$i18n.locale == "ar" ? "b-toaster-top-left" : "b-toaster-top-right"
          })
        }
      } else {
        this.showToast = false
      }
    }
  },
  methods: {
    ...mapActions(["hideToast"])
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
