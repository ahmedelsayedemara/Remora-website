<template>
  <div class="contact-us-route">
    <DefaultLayout>
      <PageLoader v-if="loading" />
      <div v-else>
        <HeroSection />
        <ContactForm @success="$bvModal.show('success-modal')" />
      </div>
    </DefaultLayout>
    <ToastConfirmationModal
      name="success-modal"
      :title="$t('CONTACT_US.MESSAGE_SENT_SUCCESSFULLY')"
    />
  </div>
</template>

<script>
export default {
  components: {
    HeroSection: () => import("@/components/modules/contact-us/HeroSection/index.vue"),
    ContactForm: () => import("@/components/modules/contact-us/ContactForm/index.vue"),
    ToastConfirmationModal: () => import("@/components/Shared/ToastConfirmationModal")
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
