<template>
  <div class="area-review">
    <HeadMain title="風俗店の新着口コミ" headLine="short">
      <span slot="icon" class="icon">
        <icon-review class="fill-current" width="24" height="19" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="詳細検索"></ButtonLink>
      </p>
      <p slot="lead" class="lead">お店に行ったユーザーのリアルな口コミ情報をご紹介！</p>
    </HeadMain>
    <div class="review">
      <ul>
        <!-- <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/100x100.png" alt="店舗画像" />
            </div>
            <div class="description">
              <div class="top">
                <p class="title">とても分かりやすく、初めてでもグッド!!ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="date">
                  <time>6/31(月)23:00</time>
                  <span>UP</span>
                </p>
              </div>
              <p class="detail">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
              <div class="user">
                <div class="rating">
                  <div>
                    <p style="width:80%;"></p>
                  </div>
                  <p class="number">3.75</p>
                </div>
                <p class="name">
                  ishii(9)
                </p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/100x100.png" alt="店舗画像" />
            </div>
            <div class="description">
              <div class="top">
                <p class="title">とても分かりやすく、初めてでもグッド!!ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="date">
                  <time>6/31(月)23:00</time>
                  <span>UP</span>
                </p>
              </div>
              <p class="detail">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
              <div class="user">
                <div class="rating">
                  <div>
                    <p style="width:80%;"></p>
                  </div>
                  <p class="number">3.75</p>
                </div>
                <p class="name">
                  ishii(9)
                </p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/100x100.png" alt="店舗画像" />
            </div>
            <div class="description">
              <div class="top">
                <p class="title">とても分かりやすく、初めてでもグッド!!ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="date">
                  <time>6/31(月)23:00</time>
                  <span>UP</span>
                </p>
              </div>
              <p class="detail">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
              <div class="user">
                <div class="rating">
                  <div>
                    <p style="width:80%;"></p>
                  </div>
                  <p class="number">3.75</p>
                </div>
                <p class="name">
                  ishii(9)
                </p>
              </div>
            </div>
          </a>
        </li>-->
        <li>
          <article>
            <p class="thumb">
              <img src="http://placehold.jp/90x135.png" alt />
            </p>
            <div class="contents">
              <h3>とても分かりやすく、初めてでもグッド!!</h3>
              <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
              <p class="shop">完全密室 無抵抗</p>
              <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              <div class="user">
                <p class="name">手越祐也</p>
                <time>
                  6/31(月)23:00
                  <span>UP</span>
                </time>
              </div>
            </div>
          </article>
        </li>
       <li>
          <article>
            <p class="thumb">
              <img src="http://placehold.jp/90x135.png" alt />
            </p>
            <div class="contents">
              <h3>とても分かりやすく、初めてでもグッド!!</h3>
              <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
              <p class="shop">完全密室 無抵抗</p>
              <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              <div class="user">
                <p class="name">手越祐也</p>
                <time>
                  6/31(月)23:00
                  <span>UP</span>
                </time>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconReview from "~/components/icons/IconReview";
export default {
  components: {
    IconReview,
  },
};
</script>

<style>
.area-review .review ul li article {
  @apply flex;
}
/* .area-review .review ul li {
  @apply py-16 px-12;
}
.area-review .review ul li a {
  @apply flex;
}
.area-review .review ul li a .thumb {
  @apply relative;
  width: 100px;
  height: 100px;
}
.area-review .review ul li a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-review .review ul li a .thumb + .description {
  @apply ml-12;
}
.area-review .review ul li a .description {
  @apply flex-1;
  width: calc(100% - 112px);
}
.area-review .review ul li a .description .top {
  @apply flex justify-between;
}
.area-review .review ul li a .description .top .title {
  @apply truncate text-fz20 leading-lh20 font-bold;
  color: theme("colors.primary");
}
.area-review .review ul li a .description .top .date {
  @apply flex items-center;
}
.area-review .review ul li a .description .top .date time {
  @apply text-fz14 leading-lh14;
  color: theme("colors.font-thin-gray");
}
.area-review .review ul li a .description .top .date span {
  color: theme("colors.primary");
}
.area-review .review ul li a .description .top .date time + span {
  @apply ml-4;
}
.area-review .review ul li a .description .top .title + .date {
  @apply ml-4;
}
.area-review .review ul li a .description .detail {
  @apply text-fz16 leading-lh16 truncate;
  color: theme("colors.base");
}
.area-review .review ul li a .description .user {
  @apply flex items-center justify-between; 
}
.area-review .review ul li a .description .user .name {
  @apply text-fz14 leading-lh20;
  color: theme('colors.base');
}
.area-review .review ul li a .description .user .rating {
  @apply flex items-center;
}
.area-review .review ul li a .description .user .rating div {
  @apply relative inline-block text-fz24;
}
.area-review .review ul li a .description .user .rating div::after {
  content: "★★★★★";
  color: theme("colors.dark-gray");
}
.area-review .review ul li a .description .user .rating div p {
  @apply absolute overflow-hidden;
}
.area-review .review ul li a .description .user .rating div p::before {
  content: "★★★★★";
  color: theme("colors.orange");
}
.area-review .review ul li a .description .user .rating .number {
  color: theme("colors.red");
  @apply text-fz24 leading-lh24 font-bold;
}
.area-review .review ul li a .description .user .rating div + .number {
  @apply ml-4;
}
.area-review .review ul li:last-child {
  @apply border-solid border-b-2;
  border-color: theme("colors.border-gray");
}
.area-review .review ul li + li {
  @apply border-solid border-t-2;
  border-color: theme("colors.border-gray");
} */
</style>