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
        <!-- 店舗口コミ -->
        <li>
          <article>
            <a href>
              <p class="thumb is-shop">
                <img src="http://placehold.jp/150x150.png" alt />
              </p>
              <div class="contents is-shop">
                <div class="valuer">
                  <div class="rating">
                    <div class="star">
                      <p style="width:80%;"></p>
                    </div>
                    <p class="number">3.75</p>
                  </div>
                  <time>
                    6/31(月)23:00
                    <span>UP</span>
                  </time>
                </div>
                <div class="title">
                  <h3>とても分かりやすく、初めてでもグッド!!</h3>
                  <p class="user">yusukeyuskeyus</p>
                </div>
                <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="thumb-name">完全密室 無抵抗</p>
                <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              </div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <p class="thumb is-shop">
                <img src="http://placehold.jp/100x100.png" alt />
              </p>
              <div class="contents is-shop">
                <div class="valuer">
                  <div class="rating">
                    <div class="star">
                      <p style="width:80%;"></p>
                    </div>
                    <p class="number">3.75</p>
                  </div>
                  <time>
                    6/31(月)23:00
                    <span>UP</span>
                  </time>
                </div>
                <div class="title">
                  <h3>とても分かりやすく、初めてでもグッド!!</h3>
                  <p class="user">yusukeyuskeyus</p>
                </div>
                <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="thumb-name">完全密室 無抵抗</p>
                <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              </div>
            </a>
          </article>
        </li>
        <!-- 店舗口コミここまで -->
        <!-- 女の子口コミ -->
        <li>
          <article>
            <a href>
              <p class="thumb is-girl">
                <img src="~assets/images/sample/90-135.jpg" alt />
              </p>
              <div class="contents is-girl">
                <div class="valuer">
                  <div class="rating">
                    <div class="star">
                      <p style="width:80%;"></p>
                    </div>
                    <p class="number">3.75</p>
                  </div>
                  <time>
                    6/31(月)23:00
                    <span>UP</span>
                  </time>
                </div>
                <div class="title">
                  <h3>とても分かりやすく、初めてでもグッド!!とても分かりやすく、初めてでもグッド!!</h3>
                  <p class="user">yusukeyuskeyus</p>
                </div>
                <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="thumb-name">りこ(19)</p>
                <p class="shop">横浜人妻デリヘル RE:PRESIDENT-プレジデント-</p>
                <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              </div>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a href>
              <p class="thumb is-girl">
                <img src="http://placehold.jp/280x373.png" alt />
              </p>
              <div class="contents">
                <div class="valuer">
                  <div class="rating">
                    <div class="star">
                      <p style="width:80%;"></p>
                    </div>
                    <p class="number">3.75</p>
                  </div>
                  <time>
                    6/31(月)23:00
                    <span>UP</span>
                  </time>
                </div>
                <div class="title">
                  <h3>とても分かりやすく、初めてでもグッド!!</h3>
                  <p class="user">yusukeyuskeyus</p>
                </div>
                <p class="description">ふらりと立ち寄るには少々もったいないと感じるお店でした。 次はちゃんと調べて、お邪</p>
                <p class="thumb-name">りこ(19)</p>
                <p class="shop">横浜人妻デリヘル RE:PRESIDENT-プレジデント-</p>
                <p class="infor">秋葉原･神田 / ファッションヘルス</p>
              </div>
            </a>
          </article>
        </li>
        <!-- 女の子口コミここまで -->
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
.area-review .review {
  @apply py-16;
}
.area-review .review ul li + li {
  @apply mt-16;
}
.area-review .review ul li article a {
  @apply flex;
  transition: 0.1s;
  box-shadow: 0 5px 12px #ccc;
}
.area-review .review ul li article a .thumb {
  @apply relative bg-white;
}
.area-review .review ul li article a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-review .review ul li article a .thumb.is-shop {
  width: 150px;
  height: 150px;
}
.area-review .review ul li article a .thumb.is-girl {
  width: 108px;
  height: 162px;
}
.area-review .review ul li article a .contents {
  @apply flex-1 p-8 bg-white;
}
.area-review .review ul li article a .contents.is-shop {
  width: calc(100% - 150px);
}
.area-review .review ul li article a .contents.is-girl {
  width: calc(100% - 108px);
}
.area-review .review ul li article a .contents .title {
  @apply flex items-center justify-between;
}
.area-review .review ul li article a .contents .title h3 {
  @apply text-fz16 leading-lh16 font-bold truncate;
  color: theme("colors.primary");
}
.area-review .review ul li article a .contents .title .user {
  @apply text-fz14 leading-lh20;
  color: theme("colors.base");
}
.area-review .review ul li article a .contents .title h3 + .user {
  @apply ml-8;
}
.area-review .review ul li article a .contents .valuer time {
  @apply text-fz14 leading-lh14;
  color: theme("colors.font-gray");
}
.area-review .review ul li article a .contents .valuer time span {
  color: theme("colors.primary");
}
.area-review .review ul li article a .contents .description {
  @apply text-fz14 leading-lh14 truncate;
  color: theme("colors.font-gray");
}
.area-review .review ul li article a .contents .title + .description {
  @apply mt-8;
}
.area-review .review ul li article a .contents .description + .thumb-name {
  @apply mt-8;
}
.area-review .review ul li article a .contents .thumb-name + .infor {
  @apply mt-4;
}
.area-review .review ul li article a .contents .thumb-name + .shop {
  @apply mt-4;
}
.area-review .review ul li article a .contents .thumb-name {
  @apply text-fz16 leading-lh16 font-bold;
  color: theme("colors.base");
}
.area-review .review ul li article a .contents .infor {
  @apply text-fz14 leading-lh14;
  color: theme("colors.font-gray");
}
.area-review .review ul li article a .contents .valuer {
  @apply flex items-center justify-between;
  margin-top: -8px;
}
.area-review .review ul li article a .contents .valuer .rating {
  @apply flex items-center;
}
.area-review .review ul li article a .contents .valuer .rating .star {
  @apply relative inline-block text-fz28;
}
.area-review .review ul li article a .contents .valuer .rating .number {
  @apply text-fz24 leading-lh24 font-bold;
  color: theme("colors.red");
}
.area-review .review ul li article a .contents .valuer .rating .star + .number {
  @apply ml-8;
}
.area-review .review ul li article a .contents .valuer .rating .star::after {
  content: "★★★★★";
  color: theme("colors.dark-gray");
}
.area-review .review ul li article a .contents .valuer .rating .star p {
  @apply absolute overflow-hidden;
}
.area-review .review ul li article a .contents .valuer .rating .star p::before {
  content: "★★★★★";
  color: theme("colors.orange");
}
.area-review .review ul li {
  transition: 0.25s;
  --hover: #757575;
}
.area-review .review ul li:hover {
  animation: pulse 0.8s;
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  z-index: theme('zIndex.10');
  background: rgba(0,0,0,0.8);
}
.area-review .review ul li article {
  @apply bg-black;
}
.area-review .review ul li article a:hover {
  @apply opacity-6;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
</style>