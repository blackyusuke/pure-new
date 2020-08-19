<template>
  <main id="prefecture">
    <ul class="search-list">
      <li class="search-main search-list-item">
        <div class="contents">
          <HeadSearch title="エリアから探す" />
          <NavList flex="side">
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="池袋" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="池袋" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="池袋" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="池袋" />
            </NavItem>
          </NavList>
          <div class="more-btn">
            <a href>全てのエリアを見る</a>
          </div>
        </div>
      </li>
      <li class="search-main search-list-item">
        <div class="contents">
          <HeadSearch title="業種から探す" />
          <NavList flex="side">
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="デリヘル" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="ソープ" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="エステ･性感マッサージ" />
            </NavItem>
            <NavItem width="half">
              <ButtonLink class="is-middle" link-name="ピンサロ" />
            </NavItem>
          </NavList>
          <div class="more-btn">
            <a href>全ての業種を見る</a>
          </div>
        </div>
      </li>
      <li class="search-list-item other-search">
        <nav>
          <ul>
            <li>
              <a href>タイプから探す</a>
            </li>
            <li>
              <a href>体型・特徴から探す</a>
            </li>
            <li>
              <a href>プレイから探す</a>
            </li>
            <li>
              <a href>価格・サービスから探す</a>
            </li>
          </ul>
        </nav>
      </li>
    </ul>
    <SearchWrapper>
      <p class="bnr">
        <img src="http://placehold.jp/30/FFCCCC/FF0000/680x300.png?text=エリアリンク" alt="画像" />
      </p>
      <p class="bnr">
        <img src="http://placehold.jp/30/FFCCCC/FF0000/680x140.png?text=クーポンリンク" alt="画像" />
      </p>
      <ul>
        <li>
          <PickGirl />
        </li>
      </ul>
    </SearchWrapper>
  </main>
</template>

<script>
import HeadSearch from "~/components/parts/HeadSearch";
import NavItem from "~/components/parts/NavItem.vue";
import NavList from "~/components/parts/NavList.vue";
import SearchWrapper from "~/components/modules/SearchWrapper.vue";
import PickGirl from "~/components/modules/PickGirl.vue";
export default {
  components: {
    HeadSearch,
    NavItem,
    NavList,
    SearchWrapper,
    PickGirl,
  },
};
</script>

<style>
#prefecture .search-list {
  @apply flex;
  margin-right: -20px;
}
#prefecture .search-list .search-list-item {
  @apply pr-20;
}
#prefecture .search-list .search-main .contents {
  @apply p-12;
  background: theme("colors.back-gray");
}
#prefecture .search-list .search-main .contents .more-btn {
  @apply text-center;
}
#prefecture .search-list .search-main .contents .more-btn a {
  @apply text-fz18 leading-lh25;
  color: theme("colors.font-gray");
}
#prefecture .search-list .search-list-item .contents nav {
  @apply pl-12 pr-12;
}
#prefecture .search-list .search-list-item .contents nav ul {
  margin-right: -4px;
  margin-bottom: -12px;
}
#prefecture .search-list .search-list-item .contents nav ul li {
  @apply pb-12 pr-4;
}
#prefecture .search-list .search-main {
  width: 400px;
}
#prefecture .search-list .other-search nav ul {
  margin-bottom: -2px;
}
#prefecture .search-list .other-search nav ul li {
  @apply pb-2;
}
#prefecture .search-list .other-search nav ul li a {
  color: theme("colors.primary");
  @apply text-fz16 leading-lh23 p-12 block;
  background: theme("colors.back-gray");
}
</style>