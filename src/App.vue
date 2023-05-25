<template>
  <div id="nav" :class="$i18n.locale == 'en' ? '' : 'rtl'">
    <Toast />
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "MaktabyApp",
  created() {
    const htmlDoc = document.documentElement
    htmlDoc.setAttribute("lang", this.$i18n.locale == "ar" ? "ar" : "en")
    htmlDoc.setAttribute("dir", this.$i18n.locale == "ar" ? "rtl" : "ltr")
  }
}
</script>

<style lang="scss">
* {
  &:lang(ar) {
    font-family: "Tajawal", sans-serif;
  }
  &:lang(en) {
    font-family: "Archivo", sans-serif;
  }
}
body {
  &:lang(ar) {
    text-align: right;
  }
  &:lang(en) {
    text-align: left;
  }
}

*::-webkit-scrollbar {
  width: 0.3em;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
   border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 4px;
}
</style>
