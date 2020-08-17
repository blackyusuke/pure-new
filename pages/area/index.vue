<template>
  <main id="area">
    <div class="wrap">
      <SideLeft />
      <div class="searchArea">
        <p class="bnr">
          <img src="http://placehold.jp/30/FFCCCC/FF0000/640x160.png?text=エリア検索トップレコメンド" alt="画像" />
        </p>
        <MainSecondary title="都道府県を選ぶ">
          <span slot="icon" class="icon">
            <icon-map class="fill-current" width="24" height="24" />
          </span>
        </MainSecondary>
      </div>
      <SideRight />
    </div>
  </main>
</template>

<script>
import SideLeft from "~/components/modules/SideLeft.vue"
import SideRight from "~/components/modules/SideRight.vue"
import MainSecondary from "~/components/parts/MainSecondary.vue"
import IconMap from "~/components/icons/IconMap"
export default {
  components: {
    SideLeft,
    SideRight,
    MainSecondary,
    IconMap
  },
};
</script>
<style>
#area .wrap {
  @apply flex justify-between;
}
#area .wrap .searchArea .bnr + .main-secondary {
  @apply mt-20;
}
</style>