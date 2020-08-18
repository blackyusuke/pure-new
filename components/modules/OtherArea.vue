<template>
  <div class="other-area">
    <MainSecondary title="他の地方の風俗店を探す">
      <span slot="icon" class="icon">
        <icon-map class="fill-current" width="24" height="24" />
      </span>
    </MainSecondary>
    <NavList flex="side">
      <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
        <ButtonLink class="is-middle" :link-name="item.value"></ButtonLink>
      </NavItem>
    </NavList>
  </div>
</template>

<script>
import MainSecondary from "~/components/parts/MainSecondary.vue"
import NavItem from "~/components/parts/NavItem.vue"
import NavList from "~/components/parts/NavList.vue"
import IconMap from "~/components/icons/IconMap"
import ButtonLink from "~/components/parts/ButtonLink"
import areaJson from "~/data/area.json"
export default {
  components: {
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
.other-area .main-secondary + .nav-list {
  @apply mt-20;
}
</style>