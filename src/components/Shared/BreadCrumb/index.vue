<template>
  <div class="breadcrumb">
    <router-link to="/">
        <p>{{$t("GLOBAL.HOME")}}</p> 
    </router-link>
    <span>></span>
    <router-link to="/blog">
        <p>{{ $t("BLOG.BLOG") }}</p> 
    </router-link>
    <span>></span>
    <p class="current">{{ current }}</p>
  </div>
</template>
<script>
export default {
    props: {
        current: {
            type: String,
            default: ""
        }
    }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>