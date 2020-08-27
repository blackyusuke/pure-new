<template>
  <no-ssr>
    <main id="region">
      <div class="slider">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href>
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <AllColumnWrapper>
        <MainColumnSection>
          <AreaSearch />
        </MainColumnSection>
        <MainColumnSection>
          <AreaRanking />
        </MainColumnSection>
        <MainColumnSection>
          <AreaMovie />
        </MainColumnSection>
        <MainColumnSection>
          <AreaComic />
        </MainColumnSection>
        <MainColumnSection>
          <a href>
            <img src="http://placehold.jp/FFCCCC/FF0000/750x360.png?text=地方トップスペシャル" alt="地方画像" />
          </a>
        </MainColumnSection>
        <MainColumnSection>
          <AreaReview />
        </MainColumnSection>
        <MainColumnSection>
          <OtherArea />
        </MainColumnSection>
      </AllColumnWrapper>
    </main>
  </no-ssr>
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