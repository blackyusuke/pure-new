<template>
  <div class="area-ranking">
    <HeadMain title="関東の風俗ランキング" headLine="short">
      <span slot="icon" class="icon">
        <icon-crown class="fill-current" width="24" height="24" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">あなたのお気に入りのお店や女の子の順位をチェック！</p>
    </HeadMain>
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
          <p class="total-ranking">総合ランキング</p>
          <ul class="ranking-list">
            <li class="first new is-first-new triangle">
              <a href>
                <img src="~/assets/images/sample/sample1.jpg" alt="女の子" />
                <span class="number number-1">
                  <strong>1</strong>位
                </span>
              </a>
            </li>
            <li class="ranking-item triangle silver">
              <a href>
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
              <a href>
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
              <a href>
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
              <a href>
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
    <div class="tab-wrap">
      <input id="shop" type="radio" name="ranking" class="change" checked="checked" />
      <label class="title" for="shop">お店</label>
      <div class="tab-content">
        れゆえ、花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ。
      </div>
      <input id="review" type="radio" name="ranking" class="change" />
      <label class="title" for="review">口コミ</label>
      <div class="tab-content">
        にメロスは、まちの様子を怪しく思った。ひっそりしている。、まちの様子を怪しく思った。ひっそりしてい、まちの様子を怪しく思った。ひっそりしてい
      </div>
      <input id="girl" type="radio" name="ranking" class="change" />
      <label class="title" for="girl">女の子</label>
      <div class="tab-content">
        もう既に日も落ちて、まちの暗いは、あたりをはばかる低声で、わずか答えた。
      </div>
      <input id="movie" type="radio" name="ranking" class="change" />
      <label class="title" for="movie">生動画</label>
      <div class="tab-content">
        もう既に日も落ちて、まちの暗いは、あたりをはばかる低声で、わずか答えた。
      </div>
    </div>
    <div class="more">
      <a href>
        <span class="icon">
          <icon-angle class="fill-current" width="18" height="22" />
        </span>
        <span class="icon">
          <icon-angle class="fill-current" width="18" height="22" />
        </span>
        女の子ランキングをもっと見る
        <span class="left icon">
          <icon-angle class="fill-current" width="18" height="22" />
        </span>
        <span class="left icon">
          <icon-angle class="fill-current" width="18" height="22" />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import HeadMain from "~/components/parts/HeadMain.vue";
import IconCrown from "~/components/icons/IconCrown";
import IconArrow from "~/components/icons/IconArrow";
import IconAngle from "~/components/icons/IconAngle";
import ButtonLink from "~/components/parts/ButtonLink";
export default {
  components: {
    HeadMain,
    IconCrown,
    IconArrow,
    IconAngle,
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
.area-ranking .tab-wrap {
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	padding: 0 0 20px;
}

.area-ranking .tab-wrap .title {
	color: Gray;
	cursor: pointer;
	flex: 1;
	font-weight: bold;
	order: -1;
	padding: 12px 24px;
	position: relative;
	text-align: center;
	transition: cubic-bezier(0.4, 0, 0.2, 1) .2s;
	user-select: none;
	white-space: nowrap;
	-webkit-tap-highlight-color: transparent;
}

.area-ranking .tab-wrap .title:hover {
	background: rgba(0, 191, 255,.1);
}

.area-ranking .tab-wrap .change:checked + .title {
	color: DeepSkyBlue;
}

.area-ranking .tab-wrap .title::after {
	background: DeepSkyBlue;
	bottom: 0;
	content: '';
	display: block;
	height: 3px;
	left: 0;
	opacity: 0;
	pointer-events: none;
	position: absolute;
	transform: translateX(100%);
	transition: cubic-bezier(0.4, 0, 0.2, 1) .2s 80ms;
	width: 100%;
	z-index: 1;
}
.area-ranking .tab-wrap .tab-content {
	height:0;
	opacity:0;
	padding: 0 20px;
	pointer-events:none;
	transform: translateX(-30%);
	transition: transform .3s 80ms, opacity .3s 80ms;
	width: 100%;
}

.area-ranking .tab-wrap::after {
	content: '';
	height: 20px;
	order: -1;
	width: 100%;
}

.area-ranking .tab-wrap .change {
	display: none;
}

.area-ranking .tab-wrap .change:checked ~ .title::after {
	transform: translateX(-100%);
}

.area-ranking .tab-wrap .change:checked + .title::after {
	opacity: 1;
	transform: translateX(0);
}

.area-ranking .tab-wrap .change:checked ~ .tab-content {
	transform: translateX(30%);
}

.area-ranking .tab-wrap .change:checked + .title + .tab-content {
	height: auto;
	opacity: 1;
	order: 1;
	pointer-events:auto;
	transform: translateX(0);
}









.area-ranking .genre .genre-list {
  @apply flex border-solid border-t-2 border-l-2 border-r-2;
  border-color: theme("colors.border-dark-gray");
}
.area-ranking .genre .genre-list li {
  @apply flex items-center justify-center w-1/4 h-50 bg-white text-black text-fz20 leading-lh20 font-bold;
  cursor: theme("cursor.pointer");
}
.area-ranking .genre .genre-list li + li {
  @apply border-solid border-l-2;
  border-color: theme("colors.border-dark-gray");
}
.area-ranking .genre .genre-list .active {
  @apply text-white;
  background: theme("colors.secondary");
}
.area-ranking .genre .contents-wrapper .total-ranking {
  @apply flex items-center justify-center text-fz18 text-white leading-lh18 p-8;
  background: theme("colors.secondary");
}
.area-ranking .genre .contents-wrapper .ranking-list {
  display: grid;
  grid-template-columns: [col1] 50% [col2] 25% [col3] 25%;
  grid-template-rows: [row1] 50% [row2] 50%;
  text-align: center;
}
.area-ranking .genre .contents-wrapper .ranking-list li a img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
/* .area-ranking .genre .contents-wrapper .ranking-list li a:hover::before {
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
} */
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item::before {
  border-width: 70px 70px 0 0;
}
.area-ranking .genre .contents-wrapper .ranking-list .triangle::before {
  content: "";
  @apply w-0 h-0 border-solid absolute border-transparent top-0 left-0 pointer-events-none;
  z-index: theme("zIndex.1");
}
.area-ranking .genre .contents-wrapper .ranking-list .first {
  @apply col-start-1;
  grid-row: 1 / 3;
}
.area-ranking .genre .contents-wrapper .ranking-list .first a {
  width: 340px;
  height: 454px;
}
.area-ranking .genre .contents-wrapper .ranking-list .first span {
  color: theme("colors.red");
  top: 10px;
  left: 20px;
}
.area-ranking .genre .contents-wrapper .ranking-list li .number {
  z-index: theme("zIndex.10");
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
  z-index: theme("zIndex.100");
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
  border-color: #ffcc21 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .silver::before {
  border-color: #c3c0b1 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .blonze::before {
  border-color: #b29383 transparent transparent transparent;
}
.area-ranking .genre .contents-wrapper .ranking-list .gray::before {
  border-color: #8c8c8c transparent transparent transparent;
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
  color: theme("colors.base");
  @apply top-0;
  left: 5px;
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .number
  strong {
  @apply text-fz30 leading-lh43;
}

/* 矢印 */
.area-ranking .genre .contents-wrapper .ranking-list .ranking-item div {
  width: 26px;
  height: 26px;
  @apply border-solid border-2 absolute bg-white flex items-center justify-center;
  z-index: theme("zIndex.1000");
  border-radius: theme("borderRadius.2");
  top: 40px;
  left: 10px;
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-top {
  border-color: theme("colors.primary");
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-top
  svg {
  color: theme("colors.primary");
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-right {
  border-color: theme("colors.green");
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-right
  svg {
  color: theme("colors.green");
  @apply transform rotate-90;
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-bottom {
  border-color: theme("colors.light-blue");
}
.area-ranking
  .genre
  .contents-wrapper
  .ranking-list
  .ranking-item
  .arrow.is-bottom
  svg {
  color: theme("colors.light-blue");
  @apply transform rotate-180;
}
/* -------------------------------------------------------------------------- */

/* hoverアニメーション */
.area-ranking .genre .contents-wrapper .ranking-list li {
  @apply relative;
  transition: 0.25s;
  --hover: #757575;
}
.area-ranking .genre .contents-wrapper .ranking-list li a {
  @apply bg-black;
}
.area-ranking .genre .contents-wrapper .ranking-list li a img:hover {
  @apply opacity-6;
}
.area-ranking .genre .contents-wrapper .ranking-list .triangle:hover {
  animation: pulse 0.8s;
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  z-index: theme("zIndex.10");
  background: rgba(0, 0, 0, 0.8);
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
/* ---------------------------------------------------- */

.area-ranking .more {
  @apply border-solid border-t-6;
  border-color: theme("colors.border-red");
  background: theme("colors.base");
}
.area-ranking .more a {
  @apply flex items-center justify-center text-fz20 font-bold leading-lh20 p-20;
  color: theme("colors.primary");
}
.area-ranking .more a .icon {
  color: theme("colors.primary");
}
.area-ranking .more a .icon:nth-child(1) {
  margin-right: -8px;
}
.area-ranking .more a .icon:nth-child(2) {
  @apply mr-4;
}
.area-ranking .more a .icon:nth-child(3) {
  @apply ml-4;
}
.area-ranking .more a .icon:nth-child(4) {
  margin-left: -8px;
}
.area-ranking .more a .left {
  @apply transform rotate-180;
}
</style>