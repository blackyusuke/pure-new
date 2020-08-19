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
          <li>
            <SearchItemCheck checkId="1" forId="1" value="ソープ" />
          </li>
          <li>
            <SearchItemCheck checkId="2" forId="2" value="風俗" />
          </li>
        </ul>
      </form>
    </SearchWrapper>
  </main>
</template>
 
<script>
import areaJson from "~/data/area.json";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import SearchItemCheck from "~/components/parts/SearchItemCheck.vue";
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
    SearchItemCheck
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