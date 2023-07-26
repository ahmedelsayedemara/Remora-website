<template>
  <div class="footer">
    <b-row class="footer__content">
      <b-col lg="4">
        <div class="footer__logo-container">
          <router-link to="/">
            <img src="@/assets/images/logo/footer-logo.svg" />
          </router-link>
        </div>
        <div class="footer__location">
          <img src="@/assets/images/footer-location.svg" />
          <p class="fs-16">{{ $t("FOOTER.REMORA_LOCATION") }}</p>
        </div>
        <div class="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100086636334073" target="_blank">
            <img src="@/assets/images/footer-facebook.svg" />
          </a>
          <a href="https://twitter.com/remora_social" target="_blank">
            <img src="@/assets/images/footer-twitter.svg" />
          </a>
          <a href="https://www.instagram.com/remoraworld" target="_blank">
            <img src="@/assets/images/footer-instagram.svg" />
          </a>
          <a href="https://www.linkedin.com/company/remoraglobal" target="_blank">
            <img src="@/assets/images/footer-linkedin.svg" />
          </a>
        </div>
      </b-col>
      <b-col lg="8">
        <b-row>
          <b-col lg="3" md="6" class="footer__links mt-lg-0 mt-4">
            <h6 class="fs-18">{{ $t("MENU.PLATFORM") }}</h6>
            <div class="footer__links-container">
              <router-link class="fs-16" to="#">{{ $t("MENU.OVERVIEW") }}</router-link>
              <router-link class="fs-16" to="#">{{ $t("MENU.LEADERS") }}</router-link>
              <router-link class="fs-16" to="#">{{ $t("MENU.SUPPORTED_EXCHANGES") }}</router-link>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links mt-lg-0 mt-4">
            <h6 class="fs-18">{{ $t("MENU.EDUCATION") }}</h6>
            <div class="footer__links-container">
              <router-link class="fs-16" to="#">{{ $t("MENU.GETTING_STARTED") }}</router-link>
              <router-link class="fs-16" to="#">{{ $t("MENU.TRADING") }}</router-link>
              <router-link class="fs-16" to="#">{{
                $t("MENU.TRANSACTIONS_AND_PAYMENT")
              }}</router-link>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links mt-lg-0 mt-4">
            <h6 class="fs-18">{{ $t("MENU.COMPANY") }}</h6>
            <div class="footer__links-container">
              <router-link class="fs-16" to="#">{{ $t("MENU.ABOUT") }}</router-link>
              <router-link class="fs-16" to="#">{{ $t("MENU.TEAM") }}</router-link>
              <router-link class="fs-16" to="/blog">{{ $t("MENU.BLOG") }}</router-link>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links mt-lg-0 mt-4">
            <h6 class="fs-18">{{ $t("MENU.CONTACT") }}</h6>
            <div class="footer__links-container">
              <router-link class="fs-16" to="#">{{ $t("MENU.FAQS") }}</router-link>
              <router-link class="fs-16" to="#">{{ $t("MENU.CONTACT_US") }}</router-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="footer__copy-rights fs-14">
      {{ $t("FOOTER.COPY_RIGHTS") }}
      {{ getDateFormat(new Date(), "YYYY") }}
    </div>
  </div>
</template>
<script>
import { getDateFormat } from "@/helpers"

export default {
  data() {
    return {
      getDateFormat
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>