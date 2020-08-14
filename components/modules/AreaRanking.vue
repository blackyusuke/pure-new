<template>
  <div class="area-ranking">
    <MainSecondary title="関東の風俗ランキング" headLine="short">
      <span slot="icon" class="icon">
        <icon-crown class="fill-current" width="24" height="24" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">あなたのお気に入りのお店や女の子の順位をチェック！</p>
    </MainSecondary>
    <div class="genre">
      <ul class="genre-list">
        <li :class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1">お店</li>
        <li :class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2">口コミ</li>
        <li :class="[ activetab === 3 ? 'active' : '' ]" @click="activetab=3">女の子</li>
        <li :class="[ activetab === 4 ? 'active' : '' ]" @click="activetab=4">生動画</li>
      </ul>
      <div class="contents-wrapper">
        <div v-show="activetab === 1" class="inner">コンテンツ01</div>
        <div v-show="activetab === 2" class="inner">コンテンツ02</div>
        <div v-show="activetab === 3" class="inner">
          <ul class="ranking-list">
            <li class="first new is-first-new triangle">
              <a href="">
                <img src="~/assets/images/sample/sample1.jpg" alt="女の子" />
                <span class="number number-1">
                  <strong>1</strong>位
                </span> 
              </a>
            </li>
            <li class="ranking-item triangle silver">
              <a href="">
                <img src="~/assets/images/sample/sample2.jpg" alt="女の子" />
                <span class="number number-2">
                  <strong>2</strong>位
                </span>
                <div class="arrow is-top">
                  <icon-arrow class="fill-current" width="16" height="20" />
                </div>
              </a>
            </li>
            <li class="ranking-item triangle blonze">
              <a href="">
                <img src="~/assets/images/sample/sample2.jpg" alt="女の子" />
                <span class="number number-3">
                  <strong>3</strong>位
                </span>
                <div class="arrow is-right">
                  <icon-arrow class="fill-current" width="16" height="20" />
                </div>
              </a>
            </li>
            <li class="ranking-item triangle gray">
              <a href="">
                <img src="~/assets/images/sample/sample2.jpg" alt="女の子" />
                <span class="number number-4">
                  <strong>4</strong>位
                </span>
                <div class="arrow is-bottom">
                  <icon-arrow class="fill-current" width="16" height="20" />
                </div>
              </a>
            </li>
            <li class="ranking-item triangle gray new is-other-new">
              <a href="">
                <img src="~/assets/images/sample/sample2.jpg" alt="女の子" />
                <span class="number number-5">
                  <strong>5</strong>位
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div v-show="activetab === 4" class="inner">コンテンツ04</div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSecondary from "~/components/parts/MainSecondary.vue";
import IconCrown from "~/components/icons/IconCrown";
import IconArrow from "~/components/icons/IconArrow";
import ButtonLink from "~/components/parts/ButtonLink";
export default {
  components: {
    MainSecondary,
    IconCrown,
    IconArrow,
    ButtonLink,
  },
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>

<style>
.area-ranking .genre .genre-list {
  @apply flex border-solid border-t-2 border-l-2 border-r-2;
  border-color: theme("colors.border-tab-gray");
}
.area-ranking .genre .genre-list li {
  @apply flex items-center justify-center w-1/4 h-50 bg-white text-black text-fz20 leading-lh20 font-bold;
  cursor: theme("cursor.pointer");
}
.area-ranking .genre .genre-list li + li {
  @apply border-solid border-l-2;
  border-color: theme("colors.border-tab-gray");
}
.area-ranking .genre .genre-list .active {
  @apply text-white;
  background: theme("colors.secondary");
}
.area-ranking .genre .contents-wrapper .ranking-list {
  display: grid;
  grid-template-columns: [col1] 50% [col2] 25% [col3] 25%;
  grid-template-rows: [row1] 50% [row2] 50%;
  text-align: center;
}
.area-ranking .genre .contents-wrapper .ranking-list li {
  @apply relative;
}
.area-ranking .genre .contents-wrapper .ranking-list li a img {
  @apply absolute max-w-full max-h-full;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.area-ranking .genre .contents-wrapper .ranking-list li a:hover::before {
  content: 'チェック';
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  bottom: 20px;
  left: 100px;
  z-index: 50000;
  animation:check ease-in-out 2s infinite alternate;
}
@keyframes check{
	0%   { transform:translate(-50%, 0%);}
	100% { transform:translate(0px, 0%);}
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item::before {
  border-width: 70px 70px 0 0;
}
.area-ranking .genre .contents-wrapper .ranking-list .triangle::before {
  content: "";
  @apply w-0 h-0 border-solid absolute border-transparent top-0 left-0 pointer-events-none;
  z-index: theme('zIndex.1');
}
.area-ranking .genre .contents-wrapper .ranking-list .first {
  @apply col-start-1;
  grid-row: 1 / 3;
}
.area-ranking .genre .contents-wrapper .ranking-list .first a  {
  width: 340px;
  height: 454px;
}
.area-ranking .genre .contents-wrapper .ranking-list .first span {
  color: theme("colors.red");
  top: 10px;
  left: 20px;
}
.area-ranking .genre .contents-wrapper .ranking-list li .number {
  z-index: theme('zIndex.10');
}
.area-ranking .genre .contents-wrapper .ranking-list .number-1 strong {
  @apply text-fz34;
}
.area-ranking .genre .contents-wrapper .ranking-list .new::after {
  content: "NEW";
  @apply absolute border-2 border-solid text-fz16 leading-lh23 font-bold pointer-events-none;
  border-color: theme("colors.new-icon");
  width: 56px;
  height: 26px;
  color: theme("colors.new-icon");
  background: theme("colors.red");
  border-radius: theme("borderRadius.4");
  z-index: theme('zIndex.100');
}
.area-ranking .genre .contents-wrapper .ranking-list .new.is-first-new::after {
  top: 60px;
  left: 10px;
}
.area-ranking .genre .contents-wrapper .ranking-list .new.is-other-new::after {
  top: 40px;
  @apply left-0;
}

/* 三角形の背景色 */
.area-ranking .genre .contents-wrapper .ranking-list .first::before {
  border-width: 120px 120px 0 0;
  border-color: #FFCC21 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .silver::before {
  border-color: #C3C0B1 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .blonze::before {
  border-color: #B29383 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .gray::before {
  border-color: #8C8C8C transparent transparent transparent;
}
/* ------------------------------------------------------------------------- */

.area-ranking .genre .contents-wrapper .ranking-list li a {
  @apply block;
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item a {
  width: 170px;
  height: 227px;
}
.area-ranking .genre .contents-wrapper .ranking-list li .number {
  @apply text-fz14 absolute font-bold;
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .number {
  color: theme('colors.base');
  @apply top-0;
  left: 5px;
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .number strong {
  @apply text-fz30 leading-lh43;
}

/* 矢印 */
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item div {
  width: 26px;
  height: 26px;
  @apply border-solid border-2 absolute bg-white flex items-center justify-center;
  z-index: theme('zIndex.1000');
  border-radius: theme('borderRadius.2');
  top: 40px;
  left: 10px;
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-top {
  border-color: theme('colors.primary');
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-top svg {
  color: theme('colors.primary');
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-right {
  border-color: theme('colors.green');
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-right svg {
  color: theme('colors.green');
  @apply transform rotate-90;
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-bottom {
  border-color: theme('colors.light-blue');
}
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item .arrow.is-bottom svg {
  color: theme('colors.light-blue');
  @apply transform rotate-180;
}
/* -------------------------------------------------------------------------- */
</style>