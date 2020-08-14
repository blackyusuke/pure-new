<template>
  <div class="side-left">
    <ul class="contents-list">
      <li>
        <div class="search">
          <h2 class="title">
            <icon-search class="fill-current" width="24" height="24" />詳細検索
          </h2>
          <form action>
            <div class="select-form">
              <div class="contents">
                <p>
                  <icon-map class="fill-current" width="24" height="24" />エリア
                </p>
              </div>
              <div class="contents">
                <p>
                  <icon-business class="fill-current" width="24" height="24" />業種
                </p>
              </div>
              <div class="contents">
                <p>
                  <icon-genre class="fill-current" width="24" height="24" />ジャンル
                </p>
              </div>
              <div class="contents">
                <p>
                  <icon-ticket class="fill-current" width="24" height="24" />クーポン
                </p>
              </div>
              <input type="submit" name="search" value="検索" />
            </div>
          </form>
        </div>
      </li>
      <li>
        <a href>
          <img src="~/assets/images/bnr/bnr1.jpg" alt="ソープ" />
        </a>
      </li>
      <li>
        <a href>
          <img src="~/assets/images/bnr/bnr2.jpg" alt="プレゼント" />
        </a>
      </li>
      <li>
        <h2 class="title is-small">大手グループ風俗店</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import IconSearch from "~/components/icons/IconSearch";
import IconMap from "~/components/icons/IconMap";
import IconBusiness from "~/components/icons/IconBusiness";
import IconGenre from "~/components/icons/IconGenre";
import IconTicket from "~/components/icons/IconTicket";
export default {
  IconSearch,
  IconMap,
  IconBusiness,
  IconGenre,
  IconTicket,
};
</script>

<style>
.side-left {
  @apply w-190;
}
.side-left .contents-list li + li {
  @apply mt-20;
}
.side-left .title {
  @apply flex items-center h-50 text-fz24 leading-lh24 font-bold text-white p-12 relative;
  background: theme("colors.primary");
}
.side-left .title::after {
  @apply absolute w-0 h-0 top-0 right-0 border-solid border-t-0 border-l-0;
  content: '';
  border-width: 0 20px 20px 0;
  border-color: transparent #fff transparent transparent;
}
.side-left .title svg {
  @apply mr-4;
}
.side-left .title.is-small {
  @apply text-fz16 leading-lh20;
}
.side-left .select-form {
  @apply border-solid border-4;
  border-color: theme("colors.primary");
}
.side-left .select-form p {
  @apply flex items-center h-50 p-8 text-fz14 leading-lh20;
  background: theme("colors.back-gray");
  color: theme("colors.primary");
}
.side-left .select-form p svg {
  @apply mr-8;
}
.side-left .select-form input[type="submit"] {
  @apply w-full h-40 text-white text-fz20 leading-lh25 font-bold;
  background: theme("colors.yellow");
}
</style>