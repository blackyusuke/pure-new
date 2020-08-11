<template>
  <main id="region">
    <client-only>
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="">
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="http://placehold.jp/FFCCCC/FF0000/540x135.png">
            </a>
          </swiper-slide>
        </swiper>
    </client-only>
    <div class="wrap">
      <SideLeft />
      <div class="content">
        <ul class="content-list">
          <li>
            <SearchArea />
          </li>
        </ul>
      </div>
      <SideRight />
    </div>
  </main>
</template>

<script>
import SideLeft from '~/components/modules/SideLeft.vue'
import SideRight from '~/components/modules/SideRight.vue'
import SearchArea from '~/components/modules/SearchArea.vue'
export default {
  components: {
    SideLeft,
    SideRight,
    SearchArea
  },
  layout: 'region',
  data() {
      return {
        swiperOption: {
          spaceBetween: 20,
          slidesPerView: 2,
          loop: true,
           autoplay: {
            delay: 5000,
          },
        }
      }
    }  
}
</script>

<style>
#region {
  @apply w-1100 m-auto;
}
#region .wrap {
  @apply flex justify-between;
}
#region .swiper-container + .wrap {
  @apply mt-20;
}
#region .wrap .content {
  width: 680px;
}
</style>