<template>
  <div class="search-wrapper">
    <SideLeft />
    <div class="inner">
      <p class="bnr">
          <img src="http://placehold.jp/30/FFCCCC/FF0000/640x160.png?text=エリア検索トップレコメンド" alt="画像" />
      </p>
      <slot />
    </div>
    <SideRight />
  </div> 
</template>

<script>
import SideLeft from "~/components/modules/SideLeft.vue"
import SideRight from "~/components/modules/SideRight.vue"
export default {
  SideLeft,
  SideRight,
};
</script>

<style>
.search-wrapper {
  @apply flex justify-between;
}
.search-wrapper .inner {
  width: theme('width.680');
}
.search-wrapper .inner .bnr {
  @apply mb-20;
}
</style>