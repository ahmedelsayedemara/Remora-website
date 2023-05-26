<template>
  <div class="footer">
    <b-row class="footer__content">
      <b-col lg="4">
        <div class="footer__logo-container">
          <img src="@/assets/images/logo/footer-logo.svg" />
        </div>
        <div class="footer__location">
          <img src="@/assets/images/footer-location.svg" />
          <p class="fs-16">{{ $t("FOOTER.REMORA_LOCATION") }}</p>
        </div>
        <div class="footer__social">
          <a href="#" target="_blank">
            <img src="@/assets/images/footer-facebook.svg" />
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/footer-twitter.svg" />
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/footer-instagram.svg" />
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/footer-linkedin.svg" />
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/footer-youtube.svg" />
          </a>
        </div>
      </b-col>
      <b-col lg="8">
        <b-row>
          <b-col lg="3" md="6" class="footer__links my-lg-0 my-sm-4">
            <h6 class="fs-18">{{ $t("MENU.PLATFORM") }}</h6>
            <div class="footer__links-container">
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.OVERVIEW") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.LEADERS") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.SUPPORTED_EXCHANGES") }}</a>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links my-lg-0 my-sm-4">
            <h6 class="fs-18">{{ $t("MENU.EDUCATION") }}</h6>
            <div class="footer__links-container">
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.GETTING_STARTED") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.TRADING") }}</a>
              <a class="fs-16" href="#" target="_blank">{{
                $t("MENU.TRANSACTIONS_AND_PAYMENT")
              }}</a>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links my-lg-0 my-sm-4">
            <h6 class="fs-18">{{ $t("MENU.COMPANY") }}</h6>
            <div class="footer__links-container">
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.ABOUT") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.TEAM") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.BLOG") }}</a>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="footer__links my-lg-0 my-sm-4">
            <h6 class="fs-18">{{ $t("MENU.CONTACT") }}</h6>
            <div class="footer__links-container">
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.FAQS") }}</a>
              <a class="fs-16" href="#" target="_blank">{{ $t("MENU.CONTACT_US") }}</a>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="footer__copy-rights fs-14">
      {{ $t("FOOTER.COPY_RIGHTS") }}
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>