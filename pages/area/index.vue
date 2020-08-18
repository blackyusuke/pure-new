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
        <NavList flex="side">
          <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
            <ButtonLink :link-name="item.value"></ButtonLink>
          </NavItem>
        </NavList>
        <NavList flex="side">
          <template v-for="item in areaJson">
            <NavItem v-for="item2 in item.prefecture" :key="item2.order" width="quarter">
              <template v-for="item3 in item2.city">
                <template v-if="item3.order === 1">
                  <ButtonLink :key="item3.value" :link-name="item3.value"></ButtonLink>
                </template>
              </template>
            </NavItem>
          </template>
        </NavList>
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
import areaJson from "~/data/area.json"
import NavItem from "~/components/parts/NavItem.vue"
import NavList from "~/components/parts/NavList.vue"
import ButtonLink from "~/components/parts/ButtonLink"
export default {
  components: {
    SideLeft,
    SideRight,
    MainSecondary,
    IconMap,
    NavItem,
    NavList,
    ButtonLink,
  },
  data() {
    return {
      areaJson: areaJson,
    };
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