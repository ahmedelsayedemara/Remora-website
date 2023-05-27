<template>
  <div class="blog">
    <DefaultLayout>
      <div class="blog__header">
        <h1 class="fs-48">{{ $t("BLOG.BLOG_TITLE") }}</h1>
        <SelectSearch
          v-model="formValues.categoryId"
          class="blog__select-box"
          :label="$t('BLOG.CHOOSE_CATEGORY')"
          :name="$t('BLOG.CHOOSE_CATEGORY')"
          :reduce="(option) => option.id"
          :get-option-label="(option) => option.name"
          :options="categories"
        />
      </div>
      <div class="blog__content">
        <b-container>
          <h3 class="fs-40">{{ $t("BLOG.NEWS_AND_ARTICLES") }}</h3>
          <p class="fs-18">{{ $t("BLOG.SUBTITLE") }}</p>
          <div class="blog__filter">
            <div v-for="(item, idx) in filterItems" :key="idx" class="blog__filter-item">
              <span class="fs-12">{{ item.name }}</span>
            </div>
          </div>
          <div class="blog__artcles">
            <ArticleCard />
          </div>
        </b-container>
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import ArticleCard from "@/components/modules/blog/ArticleCard/index.vue"
export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      formValues: {
        categoryId: null
      },
      categories: [
        {
          id: 1,
          name: "category_item_one"
        },
        {
          id: 2,
          name: "category_item_two"
        },
        {
          id: 3,
          name: "category_item_three"
        }
      ],
      filterItems: [
        {
          id: 1,
          name: "AMA"
        },
        {
          id: 2,
          name: "Africa"
        },
        {
          id: 3,
          name: "Altcoin"
        },
        {
          id: 4,
          name: "Altcoin"
        },
        {
          id: 5,
          name: "Anti-Fud"
        },
        {
          id: 6,
          name: "Anti-Fud"
        },
        {
          id: 7,
          name: "BTC"
        },
        {
          id: 8,
          name: "Bitcoin"
        },
        {
          id: 9,
          name: "Blockchain"
        },
        {
          id: 10,
          name: "Buy Crypto"
        },
        {
          id: 11,
          name: "Consensus"
        },
        {
          id: 12,
          name: "Crypto"
        },
        {
          id: 13,
          name: "Crypto Gem"
        },
        {
          id: 14,
          name: "DeFi"
        },
        {
          id: 15,
          name: "ETH Merge"
        },
        {
          id: 16,
          name: "Ethereum"
        },
        {
          id: 17,
          name: "KCC"
        },
        {
          id: 18,
          name: "KuCoin Community"
        },
        {
          id: 19,
          name: "Mining"
        },
        {
          id: 20,
          name: "NFT"
        },
        {
          id: 21,
          name: "NFTs"
        },
        {
          id: 22,
          name: "Report"
        },
        {
          id: 23,
          name: "Secuirty"
        },
        {
          id: 24,
          name: "Security"
        },
        {
          id: 25,
          name: "Technical Analysis"
        },
        {
          id: 26,
          name: "Trading"
        },
        {
          id: 27,
          name: "Trading Bot"
        },
        {
          id: 28,
          name: "Tutorial"
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
