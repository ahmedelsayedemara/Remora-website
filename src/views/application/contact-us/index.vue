<template>
  <div class="contact-us-route">
    <DefaultLayout>
      <PageLoader v-if="loading" />
      <div v-else>
        <HeroSection />
        <ContactForm :loading="contactLoading" @handleContactUs="handleContactUs" ref="contactUs" />
      </div>
    </DefaultLayout>
    <ToastConfirmationModal
      name="success-modal"
      :title="$t('CONTACT_US.MESSAGE_SENT_SUCCESSFULLY')"
    />
  </div>
</template>

<script>
import { postContactUsRequest } from "@/api/contactUs"

export default {
  components: {
    HeroSection: () => import("@/components/modules/contact-us/HeroSection/index.vue"),
    ContactForm: () => import("@/components/modules/contact-us/ContactForm/index.vue"),
    ToastConfirmationModal: () => import("@/components/Shared/ToastConfirmationModal")
  },
  data() {
    return {
      loading: true,
      contactLoading: false,
      resetForm: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },
  methods: {
    handleContactUs(data) {
      const params = {
        body: data.body,
        email: data.email,
        type: "request"
      }
      this.contactLoading = true
      this.ApiService(postContactUsRequest(params))
        .then(() => {
          this.$bvModal.show("success-modal")
          this.$refs.contactUs.handleResetForm()
        })
        .finally(() => {
          this.contactLoading = false
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
