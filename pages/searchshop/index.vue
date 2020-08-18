<template>
  <main id="search-shop">
    <SearchWrapper>
      <form action>
        <HeadSearch title="エリアを選ぶ" />
        <NavList flex="side">
          <NavItem v-for="item in areaJson" :key="item.value" width="quarter">
            <ButtonLink color="is-default" :link-name="item.value"></ButtonLink>
          </NavItem>
        </NavList>
        <HeadSearch title="業種を選ぶ" />
        <ul>
          <li></li>
        </ul>
      </form>
    </SearchWrapper>
  </main>
</template>
 
<script>
import areaJson from "~/data/area.json";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import ButtonLink from "~/components/parts/ButtonLink";
import HeadSearch from "~/components/parts/HeadSearch";
import SearchWrapper from "~/components/modules/SearchWrapper.vue";
export default {
  components: {
    NavItem,
    NavList,
    ButtonLink,
    HeadSearch,
    SearchWrapper,
  },
  data() {
    return {
      areaJson: areaJson,
    };
  },
};
</script>
<style>
</style>