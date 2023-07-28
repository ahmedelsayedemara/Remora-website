<template>
  <DefaultLayout>
    <PageLoader v-if="loading" />
    <div v-else class="blog-details">
      <b-container>
        <b-row>
          <b-col lg="12">
            <BreadCrumb :current="article.title" />
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <div class="blog-details__article">
              <div class="blog-details__title fs-40">
                {{ article.title }}
              </div>
              <div class="blog-details__date fs-16">{{ article.date }}</div>
              <!-- <div class="blog-details__tags">
                <div v-for="tag in article.tags" :key="tag.id" class="blog-details__tag">
                  <span class="fs-12">{{ tag.name }}</span>
                </div>
              </div> -->
              <div class="blog-details__image">
                <img :src="require(`@/assets/images/${article.image}`)" alt="article-image" />
              </div>
              <div class="blog-details__content">
                <div v-if="$i18n.locale === 'ar'">
                  <p>
                    من المتوقع أن يتم طرح أول صندوق نقد متداول للبيتكوين في أوروبا للعامة هذا الشهر،
                    بعد تأخير 12 شهرًا عن موعد إطلاقه الذي كان مخططا له. حيث كانت قد أعلنت شركة
                    Jacobi Asset Management سابقا أن ETF Bitcoin الخاص بها كان سيتم إدراجه في منصة
                    Euronext Amsterdam في يوليو 2022.
                  </p>
                  <p>
                    بعد أن قرروا في العام الماضي “اأن لوقت لم يكن مناسبًا” بعد انهيار عملة Terra
                    Luna في مايو 2022 وانهيارمنصة FTX لاحقا في نوفمبر. تقول الشركة الآن أن الصندوق
                    “على المسار الصحيح” لإطلاقه هذا الشهر، فالان حسبما يقول مدير الأصول لدى الشركة
                    أن “الطلب قد تغير منذ الصيف الماضي”.
                  </p>
                  <p>
                    في أوروبا ، كانت بورصة الأصول الرقمية الأوروبية قد نظمت المنتجات القابلة للتداول
                    كسندات يتم تداولها في البورصة وليس كنقود حتى الآن.
                  </p>
                  <p>
                    الفرق هنا أنه في حالة صناديق النقد المتداولة ETFs يمتلك كل مساهم جزءًا من الأسهم
                    التي يمتلكها الصندوق، بينما في سندات النقد المتداولة ETNs يمتلك المستثمرون سندات
                    الدين التي يتتبعها الصندوق، وليس أصولا يمتلكها الصندوق.
                  </p>
                  <p>
                    وركزت الشركة بشكل كبير في إطلاقها على حقيقة أنهم سيطلقون ETF وليس ETN. حيث قام
                    بيتر لين ، الشريك المؤسس والرئيس التنفيذي للعمليات في الشركة بالتصريح لـ Ignites
                    Europe العام الماضي أن مصدري السندات كانوا مذنبين “بإساءة استخدام” مصطلح ETF.
                  </p>
                  <p>
                    وقال أيضا: “كان هناك الكثير من المعلومات الخاطئة وسوء الاستخدام لمصطلح ETF من
                    قبل مصدري الـ[ETN] ، ومن المحتمل أن ذلك يتم لإخفاء المخاطر الكامنة في الحصول على
                    ETNs والاستثمار فيها”.
                  </p>
                  <p>
                    وبحسب قول الشركة أن صندوق النقد المتداول الخاص بها، على عكس صناديق السندات
                    المتداولة ETNs، لن تسمح باستخدام رافعة مالية أو استخدام المشتقات، وإلا ستؤدي
                    بخلاف ذلك إلى “مخاطر كبيرة للطرف المقابل”.
                  </p>
                  <p>
                    الصندوق تم ترخيصه في غيرنسي، حسبما صرح ديفيد كروسلاند الشريك في شركة المحاماة
                    كاري أولسن، وهي ولاية قضائية تقدم “عددًا من المزايا” للمساعدة في إطلاق صندوق
                    النقد المتداول للبيتكوين.
                  </p>
                  <p>
                    وقال: ” غيرنسي بصفتها سلطة قضائية تختص في خدمة الصناديق ولا تخضع للعقبات
                    المتأصلة بعضويتها في الاتحاد الأوروبي ، كانت قادرة على التحرك بسرعة للتكيف لدعم
                    هذا الإطلاق”.
                  </p>
                  <p>
                    وأضاف كروسلاند: “لقد سمحت مرونة [غيرنسي] واستعدادها لفهم التفاصيل المعقدة لمقدم
                    العرض بإطلاق وسيلة تمويل تستفيد من حالة التنظيم في وقت لا تتمكن السلطات القضائية
                    الأوروبية الأخرى من القيام بذلك”.
                  </p>
                  <p>
                    قال مايكل أوريوردان ، الشريك المؤسس لمؤسسة التدريب الأوروبية وشركة بلاك ووتر
                    لاستشارات الأصول الرقمية ، إن التحديات التنظيمية لإطلاق بيتكوين ETF في أوروبا
                    كانت “كبيرة جدًا” حيث لم يتم اعتبار البيتكوين أحد الأصول المؤهلة بموجب قواعد
                    Ucits.
                  </p>
                  <p>
                    “ومع ذلك ، من الناحية العملية ، وبغض النظر عن بعض الاختلافات الهيكلية ، فإن ETF
                    و ETP متشابهان تمامًا” ، كما قال.
                  </p>
                  <p>
                    وأضاف أوريوردان: “كصناعة ، لم نقم بعمل جيد في التمييز بين كل منها ، ونتيجة لذلك
                    هناك الكثير من الالتباس في السوق بشأن أيهما”.
                  </p>
                  <p>
                    بلغ صافي التدفقات للأصول الرقمية الأوروبية على مدار الثمانية عشر شهرًا الماضية
                    483 مليون دولار ، بما في ذلك التدفقات الداخلة البالغة 398 مليون دولار في الربع
                    الثالث من عام 2022 وحده ، وفقًا لبيانات من Coinbase و Bloomberg. وبلغت قيمة
                    الأصول الرقمية الأوروبية من المنتجات النقدية المتداولة 4.3 مليار يورو ، بعد أن
                    بلغت ذروتها عند 10.5 مليار يورو في نهاية عام 2021 ، وفقًا لتحليل Ignites Europe
                    لبيانات Morningstar.
                  </p>
                </div>
                <div v-else>
                  <p>
                    It is expected that the first publicly available Bitcoin exchange-traded fund
                    (ETF) in Europe will be launched this month, after a 12-month delay from its
                    planned launch. Jacobi Asset Management had previously announced that its
                    Bitcoin ETF would be listed on the Euronext Amsterdam platform in July 2022.
                  </p>
                  <p>
                    After deciding last year that the "timing was not right" following the collapse
                    of the Terra Luna currency in May 2022 and the subsequent collapse of the FTX
                    platform in November, the company now says the fund is "on track" for a launch
                    this month. According to the company's asset manager, "demand has changed since
                    last summer."
                  </p>
                  <p>
                    In Europe, the European Digital Assets Exchange had organized tradable products
                    as bonds that are traded on the exchange and not as cash until now.
                  </p>
                  <p>
                    The difference here is that in the case of ETFs, each shareholder owns a portion
                    of the shares that the fund owns, while in exchange-traded notes (ETNs),
                    investors own the debt securities tracked by the fund, not assets owned by the
                    fund.
                  </p>
                  <p>
                    The company has heavily focused its launch on the fact that they will be
                    launching an ETF and not an ETN. Peter Lin, the co-founder and CEO of operations
                    at the company, claimed to Ignites Europe last year that bond issuers were
                    guilty of "misusing" the term ETF.
                  </p>
                  <p>
                    He also said: "There was a lot of misinformation and misuse of the term ETF by
                    [ETN] issuers, and it is likely that this is done to conceal the inherent risks
                    in obtaining ETNs and investing in them."
                  </p>
                  <p>
                    According to the company, its ETF, unlike ETNs, will not allow the use of
                    leverage or derivatives, otherwise it would lead to "significant risks to the
                    counterparty".
                  </p>
                  <p>
                    The fund was licensed in Guernsey, according to David Crosland, a partner at law
                    firm Carey Olsen, a jurisdiction that offers "a number of advantages" to help
                    launch a Bitcoin ETF.
                  </p>
                  <p>
                    He said: "As a jurisdiction specialized in fund services and not subject to the
                    inherent obstacles of its membership in the European Union, Guernsey was able to
                    move quickly to adapt to support this launch".
                  </p>
                  <p>
                    Crosland added: "The flexibility of [Guernsey] and its readiness to understand
                    the complex details of the issuer have enabled the launch of a funding mechanism
                    that benefits from the regulatory status at a time when other European
                    jurisdictions are unable to do so."
                  </p>
                  <p>
                    Michael O'Riordan, co-founder of the European Training Foundation and Blackwater
                    Digital Asset Consulting, said the regulatory challenges to launching a Bitcoin
                    ETF in Europe were "very large" as Bitcoin was not considered an eligible asset
                    under Ucits rules.
                  </p>
                  <p>
                    "However, practically speaking, and regardless of some structural differences,
                    ETF and ETP are virtually identical," he said.
                  </p>
                  <p>
                    O'Riordan added: "As an industry, we have not done a good job distinguishing
                    between the two, and as a result, there is a lot of confusion in the market
                    about which is which."
                  </p>
                  <p>
                    The net inflows for European digital assets over the past eighteen months
                    reached $483 million, including inflows of $398 million in the third quarter of
                    2022 alone, according to data from Coinbase and Bloomberg. The value of European
                    digital assets from exchange-traded cash products was 4.3 billion euros, after
                    peaking at 10.5 billion euros at the end of 2021, according to an Ignites Europe
                    analysis of Morningstar data.
                  </p>
                </div>
              </div>
            </div>
          </b-col>
          <!-- <b-col lg="4">
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
          </b-col> -->
        </b-row>
      </b-container>
    </div>
  </DefaultLayout>
</template>
<script>
// import ArticleLike from "@/components/modules/blog/ArticleLike/index.vue"
// import ArticleTop from "@/components/modules/blog/ArticleTop/index.vue"
import BreadCrumb from "@/components/Shared/BreadCrumb/index.vue"

export default {
  components: {
    // ArticleLike,
    // ArticleTop,
    BreadCrumb
  },
  data() {
    return {
      loading: true,
      articleId: this.$route.params.id,
      article: {},
      articlesAR: [
        {
          id: 1,
          title: "إطلاق أول صندوق نقد متداول (ETF) للبيتكوين في أوروبا بعد تأخير دام 12 شهرًا",
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
          image: "bitcoin.png",
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
          image: "bitcoin.png",
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
          image: "bitcoin.png",
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
    setTimeout(() => {
      this.loading = false
    }, 1500)
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
