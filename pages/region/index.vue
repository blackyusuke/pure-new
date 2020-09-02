<template>
  <main id="region">
    <div class="slider">
      <no-ssr>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="index in 5" :key="index">
                <a href>
                  <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </no-ssr>
    </div>
    <AllColumnWrapper>
      <MainColumnSection v-for="(num, index) in 4" :key="num.index">
        <AreaSearch v-if="index === 0" />
        <AreaRanking v-else-if="index === 1" />
        <AreaMovie v-else-if="index === 2" />
        <AreaComic v-else-if="index === 3" />
      </MainColumnSection>
      <div class="bnr">
        <a href>
          <img src="http://placehold.jp/FFCCCC/FF0000/750x360.png?text=地方トップスペシャル" alt="地方画像" />
        </a>
      </div>
      <MainColumnSection v-for="(num, index) in 2" :key="num.index">
        <AreaReview v-if="index === 0" />
        <OtherArea v-else-if="index === 1" />
      </MainColumnSection>
    </AllColumnWrapper>
  </main>
</template>

<script>
import MainColumnSection from "~/components/parts/MainColumnSection.vue";
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
import AreaSearch from "~/components/modules/AreaSearch.vue";
import AreaMovie from "~/components/modules/AreaMovie.vue";
import AreaComic from "~/components/modules/AreaComic.vue";
import AreaRanking from "~/components/modules/AreaRanking.vue";
import AreaReview from "~/components/modules/AreaReview.vue";
import OtherArea from "~/components/modules/OtherArea.vue";
export default {
  components: {
    AreaSearch,
    AreaRanking,
    AreaMovie,
    AreaComic,
    AreaReview,
    OtherArea,
    MainColumnSection,
    AllColumnWrapper,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },
    };
  },
};
</script>

<style>
#region .slider + .all-column-wrapper {
  @apply mt-20;
}
</style>