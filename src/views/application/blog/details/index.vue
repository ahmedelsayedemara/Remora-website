<template>
    <div class="blog-details">
        This is the details page for article with id: {{ articleId }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            articleId: this.$params.id
        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>