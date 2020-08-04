<template>
  <header class="header-common">
    <div class="information-wrapper">
      <div class="number">
        <p><span>9,999</span>店舗</p>
        <p><span>9,999</span>女の子</p>
        <p><span>9,99999</span>口コミ</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">
              北海道・東北
            </a>
          </li>
          <li>
            <p class="active">
              関東
            </p>
          </li>
          <li>
            <a href="">
              北陸
            </a>
          </li>
          <li>
            <a href="">
              甲信越
            </a>
          </li>
          <li>
            <a href="">
              東海
            </a>
          </li>
          <li>
            <a href="">
              関西
            </a>
          </li>
          <li>
            <a href="">
              中国・四国
            </a>
          </li>
          <li>
            <a href="">
              九州・沖縄
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="contents-wrapper">
      <div class="container">
        <div class="title">
          <a href="">
            <img
              src="~/assets/images/pure-logo.png"
              alt="風俗情報ぴゅあらば" 
            />
          </a>
          <h1>
            関東の<br>風俗店情報
          </h1> 
        </div>
        <div class="variety-wrapper">
          <p class="ban-icon">
            <img
              src="~/assets/images/ban.png"
              alt="18未満禁止" 
            />
          </p>
          <p class="ban-text">
            18歳未満の御利用は<br>固くお断りいたします。
          </p>
          <form>
            <input
              type="text"
              placeholder="フリーワード検索"
            >  
            <button type="submit">
              <icon-search
                class="fill-current"
                width="22"
                height="22"
              />
            </button>
          </form>
          <div class="link-wrapper">
            <div>
              <ButtonLink>
                <span
                  slot="icon"
                  class="icon"
                >
                  <icon-login
                      class="fill-current"
                      width="18"
                      height="18"
                    />
                </span>
                <template v-slot:link-name>
                  ログイン
                </template>
              </ButtonLink>
            </div>
            <div>
              <ButtonLink>
                <span
                  slot="icon"
                  class="icon"
                >
                  <icon-register
                    class="fill-current"
                    width="18"
                    height="18"
                  />
                </span>
                <template v-slot:link-name>
                  会員登録
                </template>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <p class="read">
        {都道府県}・{都道府県}・{都道府県}など{関東}の安心して遊べるおすすめ風俗店情報をご紹介!デリヘルやソープ・セクキャバなどの割引クーポン・人気ランキング・体験動画・口コミ情報など風俗店探しに役立つコンテンツをご覧いただけます。
      </p>
    </div>
  </header>
</template>

<script>
import IconLogin from '~/components/icons/IconLogin'
import IconSearch from '~/components/icons/IconSearch'
import IconRegister from '~/components/icons/IconRegister'
import ButtonLink from '~/components/parts/ButtonLink'
export default {
  components: {
    IconLogin,
    IconRegister,
    IconSearch,
    ButtonLink
  }
}
</script>

<style>
.header-common .information-wrapper {
  @apply border-solid flex justify-center items-start;
  border-color: theme('colors.base');
  border-top-width: 5px;
}
.header-common .information-wrapper .number {
  @apply flex p-10 justify-end;
  width: 55%;
}
.header-common .information-wrapper .number p {
  @apply text-fz12 leading-lh12;
  color: theme('colors.base');
}
.header-common .information-wrapper .number p + p {
  @apply ml-5;
}
.header-common .information-wrapper .number p span {
  @apply text-fz18 font-bold;
  color: theme('colors.primary');
}
.header-common .information-wrapper nav {
   @apply px-40 py-10 relative;
   background: theme('colors.base');
   width: 45%;
}
.header-common .information-wrapper nav::before {
  content: '';
  @apply absolute w-0 h-0 border-solid border-transparent top-0 left-0;
  border-width: 32px 0 0 32px;
  border-left-color: #ffffff;
}
.header-common .information-wrapper nav ul {
  @apply flex;
}
.header-common .information-wrapper nav ul li {
  @apply px-5;
}
.header-common .information-wrapper nav ul li + li {
  @apply border-l border-solid border-white;
}
.header-common .information-wrapper nav ul li a {
  @apply text-white text-fz12 leading-lh12 block; 
}
.header-common .information-wrapper nav ul li a:hover {
  color: theme('colors.primary'); 
}
.header-common .information-wrapper nav ul li p {
  @apply text-fz12 leading-lh12 block;
  color: theme('colors.primary');
}
.header-common .contents-wrapper {
  @apply m-auto w-1100;
}
.header-common .contents-wrapper .container {
  @apply flex items-end justify-between;
}
.header-common .contents-wrapper .container .title {
  @apply flex items-end;
}
.header-common .contents-wrapper .container .title a {
  @apply block;
  width: 164px;
  height: 63px;
}
.header-common .contents-wrapper .container .title h1 {
  @apply font-bold text-fz20 leading-lh25;
  color: #3B3B3B;
}
.header-common .contents-wrapper .container .title a + h1{
  @apply ml-20;
}
.header-common .contents-wrapper .container .variety-wrapper {
  @apply flex items-center;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-icon {
  width: 36px;
  height: 34px;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-text {
  color: theme('colors.font-gray');
  @apply text-fz12 leading-lh17;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-icon + .ban-text {
  @apply ml-4;
}
.header-common .contents-wrapper .container .variety-wrapper .ban-text + form {
  @apply ml-10;
}
.header-common .contents-wrapper .container .variety-wrapper form {
  @apply flex items-center h-30;
}
.header-common .contents-wrapper .container .variety-wrapper form input {
  @apply border-2 border-solid text-fz14 text-center p-6 h-30;
  border-color: theme('colors.border-gray');
  color: theme('colors.base');
}
.header-common .contents-wrapper .container .variety-wrapper form input:focus {
  @apply outline-none;
}
.header-common .contents-wrapper .container .variety-wrapper form button {
  @apply p-4 h-30;
  background: theme('colors.blue');
}
.header-common .contents-wrapper .container .variety-wrapper form button svg {
  @apply text-white;
}
.header-common .contents-wrapper .container .variety-wrapper form + .link-wrapper {
  @apply ml-10;
}
.header-common .contents-wrapper .container .variety-wrapper .link-wrapper {
  @apply flex items-center;
}
.header-common .contents-wrapper .container .variety-wrapper .link-wrapper div {
}
.header-common .contents-wrapper .container .variety-wrapper .link-wrapper div + div {
  @apply ml-10;
}
.header-common .contents-wrapper .read  {
  @apply text-fz12 leading-lh16;
  color: theme('colors.font-thin-gray');
}
.header-common .contents-wrapper .container + .read  {
  @apply mt-8;
}
</style>