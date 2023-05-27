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
            <div
              v-for="(item, idx) in filterItems"
              :key="idx"
              class="blog__filter-item cursor-pointer"
            >
              <span class="fs-12">{{ item.name }}</span>
            </div>
          </div>
          <div class="blog__articles">
            <b-row>
              <b-col v-for="article in articleList" :key="article.id" lg="4">
                <ArticleCard :article="article" @handleGetDetails="getArticleDetails" />
              </b-col>
            </b-row>
          </div>
          <div class="blog__pagination">
            <Pagination :totalItems="totalItemCount" :perPage="perPage" :currentPage="currentPage" />
          </div>
        </b-container>
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import ArticleCard from "@/components/modules/blog/ArticleCard/index.vue"
import Pagination from "@/components/Shared/Pagination/index.vue"
export default {
  components: {
    ArticleCard,
    Pagination
  },
  data() {
    return {
      perPage: 9,
      currentPage: 1,
      totalItemCount: 1107,
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
      ],
      articleListAR: [
        {
          id: 1,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "01-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 2,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "02-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 3,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "03-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 4,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "04-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 5,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "05-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 6,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "06-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 7,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "07-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 8,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "08-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 9,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          image: "09-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم بسيط ...",
          published_at: "2022/11/21 07:13:51"

        }
      ],
      articleListEN: [
        {
          id: 1,
          title: "This is where the heading title of our article will be.",
          image: "01-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 2,
          title: "This is where the heading title of our article will be.",
          image: "02-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 3,
          title: "This is where the heading title of our article will be.",
          image: "03-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 4,
          title: "This is where the heading title of our article will be.",
          image: "04-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 5,
          title: "This is where the heading title of our article will be.",
          image: "05-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 6,
          title: "This is where the heading title of our article will be.",
          image: "06-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 7,
          title: "This is where the heading title of our article will be.",
          image: "07-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 8,
          title: "This is where the heading title of our article will be.",
          image: "08-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        },
        {
          id: 9,
          title: "This is where the heading title of our article will be.",
          image: "09-blog-card.svg",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Altcoins"
            }
          ],
          description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is simple...",
          published_at: "2022/11/21 07:13:51"

        }
      ]
    }
  },
  computed: {
    articleList() {
      return this.$i18n.locale == "ar" ? this.articleListAR : this.articleListEN
    }
  },
  methods: {
    getArticleDetails(articleId) {
      this.$router.push(`/blog-details/${articleId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
