<template>
  <div class="area-comic">
    <HeadMain title="関東の風俗体験マンガ" headLine="short">
      <span slot="icon" class="icon">
        <icon-comic class="fill-current" width="24" height="19" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">様々な業種の体験プレイを元にマンガでご紹介！</p>
    </HeadMain>
    <div class="contents">
      <ul>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/325x245.png" alt="マンガ" />
              <span class="title">
                <strong>十恋人～トレンド～</strong>
                秋葉原･神田 / デリヘル(アロマ･エステ)
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/325x245.png" alt="マンガ" />
              <span class="title">
                <strong>十恋人～トレンド～</strong>
                秋葉原･神田 / デリヘル(アロマ･エステ)
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/325x245.png" alt="マンガ" />
              <span class="title">
                <strong>十恋人～トレンド～</strong>
                秋葉原･神田 / デリヘル(アロマ･エステ)
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div class="thumb">
              <img src="http://placehold.jp/325x245.png" alt="マンガ" />
              <span class="title">
                <strong>十恋人～トレンド～</strong>
                秋葉原･神田 / デリヘル(アロマ･エステ)
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IconComic from "~/components/icons/IconComic"
export default {
  components: {
    IconComic,
  },
};
</script>

<style>
.area-comic .contents {
  @apply p-8;
  background: theme("colors.back-gray");
}
.area-comic .contents ul {
  @apply flex flex-wrap;
  margin-right: -16px;
  margin-bottom: -8px;
}
.area-comic .contents ul li {
  @apply pr-16 pb-8 w-1/2;
}
.area-comic .contents ul li a {
  @apply block;
}
.area-comic .contents ul li a .thumb {
  @apply relative;
  width: 325px;
  height: 245px;
}
.area-comic .contents ul li a .thumb .title {
  @apply absolute bottom-0 right-0 text-white text-fz12 leading-lh12 block p-8;
  background: theme('colors.base');
  background: rgba(51,51,51,0.8);
}
.area-comic .contents ul li a .thumb .title strong {
  @apply block text-fz14 leading-lh20;
}
.area-comic .contents ul li a .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
</style>