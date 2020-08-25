<template>
  <div class="area-movie">
    <HeadMain title="関東の風俗体験動画" headLine="short">
      <span slot="icon" class="icon">
        <icon-film class="fill-current" width="22" height="17" />
      </span>
      <p slot="btn" class="btn">
        <ButtonLink color="is-primary" class="is-bold is-middle" link-name="もっと見る"></ButtonLink>
      </p>
      <p slot="lead" class="lead">風俗店が投稿した動画をチェック！</p>
    </HeadMain>
    <div class="movie">
      <a href class="top">
        <div class="thumb">
          <img src="http://placehold.jp/FFCCCC/FF0000/430x242.png" alt="生動画" />
          <span class="play-time">25:30</span>
        </div>
        <div class="description">
          <p class="title">ウフフな40.。ムフフな50。ムフフな50。。(横浜ハレ系)</p>
          <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
          <div class="tagArea">
            <ul>
              <li>
                <a href>#巨乳</a>
              </li>
              <li>
                <a href>#3P</a>
              </li>
              <li>
                <a href>#フェラ</a>
              </li>
              <li>
                <a href>#ギャル</a>
              </li>
              <li>
                <a href>#素人</a>
              </li>
            </ul>
          </div>
          <p class="views">
            <span>1000000</span>回再生
          </p>
        </div>
        <div class="overlay">Check!!</div>
      </a>
      <div class="other">
        <ul>
          <li>
            <a href>
              <div class="image">
                <img src="http://placehold.jp/FFCCCC/FF0000/157x88.png" alt="生動画" />
                <span class="play-time">59:59</span>
              </div>
              <div class="description">
                <p class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</p>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li>
            <a href>
              <div class="image">
                <img src="http://placehold.jp/FFCCCC/FF0000/157x88.png" alt="生動画" />
                <span class="play-time">59:59</span>
              </div>
              <div class="description">
                <p class="title">ウフフな40.。ムフフな50ウフフな40.。ムフフな50。。(横浜ハレ系)</p>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li>
            <a href>
              <div class="image">
                <img src="http://placehold.jp/FFCCCC/FF0000/157x88.png" alt="生動画" />
                <span class="play-time">59:59</span>
              </div>
              <div class="description">
                <p class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</p>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
          <li>
            <a href>
              <div class="image">
                <img src="http://placehold.jp/FFCCCC/FF0000/157x88.png" alt="生動画" />
                <span class="play-time">59:59</span>
              </div>
              <div class="description">
                <p class="title">ウフフな40.。ムフフな50。。(横浜ハレ系)</p>
                <p class="infor">横浜(関内･曙町) / ファッションヘルス</p>
                <p class="views">
                  <span>1000000</span>回再生
                </p>
              </div>
              <div class="overlay">Check!!</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconFilm from "~/components/icons/IconFilm";
export default {
  components: {
    IconFilm,
  },
};
</script>

<style>
.area-movie .movie {
  @apply p-8;
  background: theme("colors.back-gray");
}
.area-movie .movie .top {
  @apply flex relative;
}
.area-movie .movie .top .thumb {
  @apply relative;
  width: 430px;
  height: 242px;
}
.area-movie .movie .top .thumb .play-time {
  @apply absolute text-fz14 text-white px-4;
  background: theme('colors.base');
  border-radius: theme('borderRadius.4');
  right: theme('inset.6');
  bottom: theme('inset.8');
}
.area-movie .movie .top .thumb img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-movie .movie .top .description {
  @apply flex-1 p-12;
}
.area-movie .movie .top .description .title {
  @apply font-bold text-fz18 leading-lh18;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-movie .movie .top .description .infor {
  color: theme("colors.base");
  @apply text-fz14 leading-lh14;
}
.area-movie .movie .top .description .tagArea ul {
  @apply flex flex-wrap;
  margin-right: -4px;
  margin-bottom: -4px;
}
.area-movie .movie .top .description .tagArea ul li {
  @apply pr-4 pb-4;
}
.area-movie .movie .top .description .tagArea ul li a {
  @apply block border-solid border-2 bg-white text-fz14 leading-lh20 py-2 px-8;
  border-color: theme("colors.primary");
  border-radius: theme("borderRadius.4");
  color: theme("colors.primary");
}
.area-movie .movie .top .description .title + .infor {
  @apply mt-12;
}
.area-movie .movie .top .description .infor + .tagArea {
  @apply mt-20;
}
.area-movie .movie .top .description .tagArea + .views {
  @apply mt-20;
}
.area-movie .movie .top .description .views {
  @apply text-fz14;
  color: theme("colors.base");
}
.area-movie .movie .top .description .views span {
  color: theme("colors.primary");
  @apply font-bold text-fz24;
}

.area-movie .movie .top + .other {
  @apply mt-8;
}
.area-movie .movie .other ul {
  @apply flex;
  margin-right: -12px;
}
.area-movie .movie .other ul li {
  @apply pr-12;
}
.area-movie .movie .other ul li a {
  @apply block relative;
}
.area-movie .movie .other ul li a .image {
  @apply relative;
  width: 157px;
  height: 88px;
}
.area-movie .movie .other ul li a .image .play-time {
  @apply absolute text-fz14 text-white px-4;
  background: theme('colors.base');
  border-radius: theme('borderRadius.4');
  right: theme('inset.4');
  bottom: theme('inset.6');
}
.area-movie .movie .other ul li a .image img {
  @apply absolute max-w-full max-h-full transform -translate-y-1/2 -translate-x-1/2;
  top: theme("inset.half");
  left: theme("inset.half");
}
.area-movie .movie .other ul li a .description .title {
  @apply text-fz14 font-bold;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-movie .movie .other ul li a .description .infor {
  @apply text-fz12;
  color: theme("colors.base");
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.area-movie .movie .other ul li a .description .views {
  @apply text-fz14;
}
.area-movie .movie .other ul li a .description .views span {
  @apply text-fz20 font-bold;
  color: theme("colors.primary");
}

/* hoverアニメーション */
.area-movie .movie .top .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-movie .movie .top:hover .overlay {
  transform: scale(1);
}
.area-movie .movie .other ul li a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
.area-movie .movie .other ul li a:hover .overlay {
  transform: scale(1);
}
/* ---------------------------------------------------------------------------------------------- */
</style>