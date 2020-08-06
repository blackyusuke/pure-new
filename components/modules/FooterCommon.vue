<template>
  <footer class="footer-common">
    <div class="wrap">
      <div class="inner">
        <div class="information">
          <ul class="top-link">
            <li>
              <a href="">風俗情報ぴゅあらばTOP</a>
            </li>
            <li>
              <a href="">利用規約</a>
            </li>
            <li>
              <a href="">プライバシーポリシー</a>
            </li>
            <li>
              <a href="">よくある質問</a>
            </li>
            <li>
              <a href="">お問い合わせ</a>
            </li>
            <li>
              <a href="">リンク</a>
            </li>
            <li>
              <a href="">運営者情報</a>
            </li> 
          </ul>
          <ul class="other-link">
            <li>
              <a href="">
                掲載お申込み
              </a>
            </li>
            <li>
              <a href="">
                掲載についてのお問い合わせ
              </a>
            </li>
            <li>
              <a href="">
                店舗様ログイン
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer-common {
  @apply border-t-2 border-b-2 border-solid; 
  border-color: theme('colors.base');
  background: #EFEFEF;
}
.footer-common .wrap {
   @apply border-t-4 border-solid;
   border-color: theme('colors.primary');
}
.footer-common .wrap .inner {
  @apply w-1100 m-auto;
}
.footer-common .wrap .inner .information {
  @apply pt-16 pb-20;
}
.footer-common .wrap .inner .information .top-link {
  @apply flex items-center;
}
.footer-common .wrap .inner .information .top-link li {
  @apply pr-36 relative;
}
</style>