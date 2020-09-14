<template>
  <no-ssr>
    <main id="region">
      <div class="slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="index in 5" :key="index">
                <a href>
                  <img width="540" height="135" src="http://placehold.jp/FFCCCC/FF0000/540x135.png" />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <AllColumnWrapper>
        <AreaSearch />
        <AreaRanking />
        <AreaExperienceMovie />
        <AreaComic />
        <a href class="bnr">
          <img
            v-lazy="'http://placehold.jp/FFCCCC/FF0000/750x360.png?text=地方トップスペシャル'"
            width="750"
            height="360"
          />
        </a>
        <AreaReview />
        <OtherArea />
      </AllColumnWrapper>
    </main>
  </no-ssr>
</template>

<script>
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
import AreaSearch from "~/components/modules/AreaSearch.vue";
import AreaExperienceMovie from "~/components/modules/AreaExperienceMovie.vue";
import AreaComic from "~/components/modules/AreaComic.vue";
import AreaRanking from "~/components/modules/AreaRanking.vue";
import AreaReview from "~/components/modules/AreaReview.vue";
import OtherArea from "~/components/modules/OtherArea.vue";
export default {
  components: {
    AreaSearch,
    AreaRanking,
    AreaExperienceMovie,
    AreaComic,
    AreaReview,
    OtherArea,
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