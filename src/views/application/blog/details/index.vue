<template>
  <DefaultLayout>
    <div class="blog-details">
      <b-container>
        <b-row>
          <b-col lg="12">
            <BreadCrumb :current="article.title" />
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="8">
            <div class="blog-details__article">
              <div class="blog-details__title fs-40">
                {{ article.title }}
              </div>
              <div class="blog-details__date fs-16">{{ article.date }}</div>
              <div class="blog-details__tags">
                <div v-for="tag in article.tags" :key="tag.id" class="blog-details__tag">
                  <span class="fs-12">{{ tag.name }}</span>
                </div>
              </div>
              <div class="blog-details__image">
                <img :src="require(`@/assets/images/${article.image}`)" alt="article-image" />
              </div>
              <div class="blog-details__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae vitae ut viverra amet. Integer
                  posuere mattis eget cursus quam ultricies volutpat integer elit. Tincidunt eu
                  dolor nec orci adipiscing. Blandit enim id faucibus leo massa ac amet magna. Id
                  vitae sed in faucibus.
                </p>
                <h3>Ultricies lectus phasellus arcu sagittis in</h3>
                <p>
                  >Ultrices ut amet risus duis id tellus. Tellus id pharetra leo sit volutpat.
                  Tortor sed nibh mi quisque vitae risus sed ut. Eget leo dignissim eget amet in
                  tempus. Aliquet mi ultrices magna viverra montes semper. Pharetra quam non mi
                  malesuada augue vestibulum mauris nam rhoncus. Elementum placerat ut posuere eget.
                  Sed mi faucibus arcu amet sit ante amet habitasse amet. Nullam faucibus diam
                  faucibus euismod feugiat vel amet mauris. Sem turpis massa sollicitudin pulvinar
                  sed habitasse aliquam massa in. Tristique sed consequat venenatis adipiscing
                  parturient. Ultricies lectus phasellus arcu sagittis in. Pellentesque vitae sed
                  ultrices arcu vel viverra at. Et leo enim amet suspendisse in mauris et tortor
                  semper. Accumsan facilisis phasellus purus elementum quisque adipiscing a neque
                  aliquet. Sapien neque velit posuere eu mattis aliquam commodo. Platea proin nulla
                  nulla condimentum nunc cum. Tellus nunc vel magna et mollis consectetur.
                  Adipiscing urna fringilla nunc cras. Sapien convallis dignissim a gravida fames ut
                  pretium proin. Tristique egestas sagittis ut phasellus egestas lacinia. A facilisi
                  elit nisl massa est elementum augue ullamcorper lorem. Fringilla velit nisi ac
                  adipiscing.
                </p>
                <h3>Tristique sed consequat venenatis adipiscing parturient?</h3>
                <p>
                  Risus pulvinar dictumst porta est massa cursus proin nulla. Vitae posuere
                  tincidunt orci eget. At ut porttitor mauris id sagittis duis. Interdum tincidunt
                  ut morbi aenean rhoncus libero porta porttitor. Ut fames proin imperdiet pretium
                  sed. A eu netus elit dignissim tellus consectetur ultrices varius. Hendrerit
                  viverra lectus pretium pretium cras viverra. Ornare urna dolor tortor scelerisque
                  ac urna suspendisse. Mollis ut arcu posuere id volutpat. Fermentum faucibus massa
                  sed porta cursus. Accumsan vel euismod hac orci volutpat facilisis. Pretium
                  penatibus libero ullamcorper integer magna dui duis et.
                </p>
                <h3>Odio lectus nisi ut id lectus facilisis non</h3>
                <p>
                  Odio tincidunt enim pellentesque pretium congue ipsum imperdiet sem. Congue
                  potenti sed id odio nunc. Molestie mauris morbi nunc malesuada varius elementum.
                  Odio aenean adipiscing placerat tempor blandit pretium commodo. Eget sit aenean
                  libero habitant mus ultricies lorem. Non vitae ante tempor diam amet nibh id orci
                  in. Massa lacus aliquet sed suspendisse id. Cursus pulvinar integer eget justo
                  accumsan nullam neque nulla enim. Commodo pretium habitasse varius laoreet viverra
                  rutrum rhoncus feugiat. Faucibus elit laoreet nisi tellus aliquam in commodo.
                  Consequat molestie blandit aliquam euismod enim arcu.
                </p>
              </div>
            </div>
          </b-col>
          <b-col lg="4">
            <b-row>
              <b-col lg="12">
                <div class="blog-details__like">
                  <h3 class="fs-14">{{ $t("BLOG.YOU_MAY_ALSO_LIKE") }}</h3>
                  <ArticleLike
                    v-for="articleLike in article.articleLikeList"
                    :key="articleLike.id"
                    :article="articleLike"
                  />
                  <div class="blog-details__show-more cursor-pointer">
                    <p class="fs-14">{{ $t("GLOBAL.SHOW_MORE") }}</p>
                    <img src="@/assets/images/arrow-down.svg" />
                  </div>
                </div>
              </b-col>
              <b-col lg="12">
                <div class="blog-details__top-articles">
                  <h3 class="fs-24">{{ $t("BLOG.TOP_ARTICLES") }}</h3>
                  <ArticleTop
                    v-for="articleTop in article.articleTopList"
                    :key="articleTop.id"
                    :article="articleTop"
                  />
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </DefaultLayout>
</template>
<script>
import ArticleLike from "@/components/modules/blog/ArticleLike/index.vue"
import ArticleTop from "@/components/modules/blog/ArticleTop/index.vue"
import BreadCrumb from "@/components/Shared/BreadCrumb/index.vue"

export default {
  components: {
    ArticleLike,
    ArticleTop,
    BreadCrumb
  },
  data() {
    return {
      articleId: this.$route.params.id,
      article: {},
      articlesAR: [
        {
          id: 1,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "01-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 2,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "02-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 3,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "03-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 4,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "04-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 5,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "05-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 6,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "06-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 7,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "07-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 8,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "08-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 9,
          title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا أو عنوانها.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "09-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "لوريم إيبسوم يتجه للمقال هنا",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "هذا هو المكان الذي سيكون فيه عنوان مقالتنا.",
              description:
                "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لنصوص ما سيلهي القارئ عن التركيز على ...",
              date: "2022/11/21 07:13:51"
            }
          ]
        }
      ],
      articlesEN: [
        {
          id: 1,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "01-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 2,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "02-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 3,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "03-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 4,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "04-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 5,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "05-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 6,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "06-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 7,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "07-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 8,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "08-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        },
        {
          id: 9,
          title: "This is where the heading or the title of our article will be.",
          date: "2022/11/21 07:13:51",
          tags: [
            {
              id: 1,
              name: "Trading"
            },
            {
              id: 2,
              name: "Crypto"
            },
            {
              id: 3,
              name: "Bitcoin"
            }
          ],
          image: "09-blog-card.svg",
          content: "",
          articleLikeList: [
            {
              id: 1,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              tag: "Trading",
              description: "Lorem ipsum heading for the article here",
              date: "2022/11/21 07:13:51"
            }
          ],
          articleTopList: [
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 2,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 3,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 4,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            },
            {
              id: 1,
              image: "blog-top.svg",
              title: "This is where title of our article will be.",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a lorem...",
              date: "2022/11/21 07:13:51"
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.getArticleById(this.articleId)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  },
  methods: {
    getArticleById(id) {
      const list = this.$i18n.locale == "ar" ? this.articlesAR : this.articlesEN
      this.article = list.find((item) => item.id == id)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>