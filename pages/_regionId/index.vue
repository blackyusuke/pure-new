<template>
  <div id="top">
    <client-only>
        <swiper :options="swiperOption">
          <swiper-slide><img src="http://placehold.jp/FFCCCC/FF0000/540x135.png"></swiper-slide>
          <swiper-slide><img src="http://placehold.jp/FFCCCC/FF0000/540x135.png"></swiper-slide>
          <swiper-slide><img src="http://placehold.jp/FFCCCC/FF0000/540x135.png"></swiper-slide>
          <swiper-slide><img src="http://placehold.jp/FFCCCC/FF0000/540x135.png"></swiper-slide>
        </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
      return {
        swiperOption: {
          spaceBetween: 20,
          slidesPerView: 2
        }
      }
    }  
}
</script>

<style>
#top {
  @apply w-1100 m-auto;
}
</style>