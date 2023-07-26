<template>
  <div class="header">
    <b-container>
      <b-row>
        <b-col xl="3" lg="3" md="2" sm="2" cols="2" class="header__logo px-0 px-lg-3">
          <div class="header__logo-container cursor-pointer" @click="handleRoute('/')">
            <img class="d-none d-lg-flex" src="@/assets/images/logo/logo.svg" alt="remora-logo" />
            <img
              class="d-lg-none d-flex"
              src="@/assets/images/logo/logo-mobile.svg"
              alt="remora-logo"
            />
          </div>
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="2"
          sm="2"
          cols="2"
          class="px-0 px-lg-3 d-flex justify-content-lg-center justify-content-start position-static"
        >
          <div class="header__navbar">
            <b-navbar toggleable="lg" type="light">
              <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                  <b-icon v-if="expanded" icon="x"></b-icon>
                  <b-icon v-else icon="justify"></b-icon>
                </template>
              </b-navbar-toggle>

              <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item-dropdown
                    v-for="(item, idx) in menuItems"
                    :key="idx"
                    :text="item.value"
                  >
                    <b-dropdown-item
                      v-for="(subItem, idx) in item.subItems"
                      :key="`sub-item ${idx}`"
                      @click="handleRoute(subItem.path)"
                      >{{ subItem.value }}</b-dropdown-item
                    >
                  </b-nav-item-dropdown>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
        <b-col xl="3" lg="3" md="8" sm="8" cols="8" class="header__actions">
          <!-- <Button>{{ $t("MENU.TRADE_NOW") }}</Button> -->
          <p class="fs-16 cursor-pointer" @click="changeLang">{{ getLangTitle }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          value: this.$t("MENU.PLATFORM"),
          subItems: [
            {
              value: this.$t("MENU.OVERVIEW"),
              path: "#"
            },
            {
              value: this.$t("MENU.LEADERS"),
              path: "/leaders"
            },
            {
              value: this.$t("MENU.SUPPORTED_EXCHANGES"),
              path: "#"
            }
          ]
        },
        {
          value: this.$t("MENU.EDUCATION"),
          subItems: [
            {
              value: this.$t("MENU.GETTING_STARTED"),
              path: "#"
            },
            {
              value: this.$t("MENU.TRADING"),
              path: "#"
            },
            {
              value: this.$t("MENU.TRANSACTIONS_AND_PAYMENT"),
              path: "#"
            }
          ]
        },
        {
          value: this.$t("MENU.COMPANY"),
          subItems: [
            {
              value: this.$t("MENU.ABOUT"),
              path: "#"
            },
            {
              value: this.$t("MENU.TEAM"),
              path: "#"
            },
            {
              value: this.$t("MENU.BLOG"),
              path: "/blog"
            },
            {
              value: this.$t("MENU.CONTACT"),
              path: "#"
            }
          ]
        },
        {
          value: this.$t("MENU.CONTACT"),
          subItems: [
            {
              value: this.$t("MENU.CONTACT_US"),
              path: "#"
            },
            {
              value: this.$t("MENU.FAQS"),
              path: "#"
            }
          ]
        }
      ]
    }
  },
  computed: {
    getLangTitle() {
      return this.$i18n.locale === "ar" ? "English" : "عربي"
    }
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale == "en") {
        localStorage.setItem("lang", "ar")
      } else {
        localStorage.setItem("lang", "en")
      }
      window.location = window.location.href
    },
    handleRoute(path) {
      if (path) this.$router.push(path)
      return
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
