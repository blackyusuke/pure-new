<template>
  <main id="region">
    <div class="slider">
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
    </div>
    <div class="wrap">
      <SideLeft />
      <div class="content">
        <ul class="content-list">
          <li class="content-list-item">
            <AreaSearch />
          </li>
          <li class="content-list-item">
             <AreaRanking />
          </li>
          <li class="content-list-item">
             <OtherArea />
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
import AreaSearch from '~/components/modules/AreaSearch.vue'
import AreaRanking from '~/components/modules/AreaRanking.vue'
import OtherArea from '~/components/modules/OtherArea.vue'
export default {
  components: {
    SideLeft,
    SideRight,
    AreaSearch,
    AreaRanking,
    OtherArea
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
#region .slider + .wrap {
  @apply mt-20;
}
#region .wrap .content {
  width: 680px;
}
#region .wrap .content .content-list .content-list-item + .content-list-item {
  @apply mt-20;
}
#region .wrap .content .content-list .content-list-item:last-child {
  padding-bottom: 120px;
}
</style>