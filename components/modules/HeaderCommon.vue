<template>
  <header class="header-common">
    <div class="header-container">
      <div class="title-wrapper">
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
            <a href="">
                <span class="icon">
                  <icon-login
                  class="fill-current"
                  width="18"
                  height="18"
                />
                </span>
                <span class="link-name">
                  ログイン
                </span>
              </a>
          </div>
          <div>
            <a href="">
                <span class="icon">
                  <icon-register
                  class="fill-current"
                  width="18"
                  height="18"
                />
                </span>
                <span class="link-name">
                  会員登録
                </span>
              </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogin from '~/components/icons/IconLogin'
import IconSearch from '~/components/icons/IconSearch'
import IconRegister from '~/components/icons/IconRegister'
export default {
  components: {
    IconLogin,
    IconRegister,
    IconSearch
  }
}
</script>

<style>
.header-common .header-container {
  @apply flex items-end justify-between m-auto w-1100;
}
.header-common .header-container .title-wrapper {
  @apply flex items-end;
}
.header-common .header-container .title-wrapper a {
  @apply block;
  width: 164px;
  height: 63px;
}
.header-common .header-container .title-wrapper h1 {
  @apply font-bold text-fz20 leading-lh25;
}
.header-common .header-container .title-wrapper a + h1{
  @apply ml-20;
}
.header-common .header-container .variety-wrapper {
  @apply flex items-center;
}
.header-common .header-container .variety-wrapper .ban-icon {
  width: 36px;
  height: 34px;
}
.header-common .header-container .variety-wrapper .ban-text {
  color: theme('colors.font-gray');
  @apply text-fz12 leading-lh17;
}
.header-common .header-container .variety-wrapper .ban-icon + .ban-text {
  @apply ml-4;
}
.header-common .header-container .variety-wrapper .ban-text + form {
  @apply ml-10;
}
.header-common .header-container .variety-wrapper form {
  @apply flex items-center h-30;
}
.header-common .header-container .variety-wrapper form input[type="text"] {
  @apply border-2 border-solid text-fz14 text-center p-6 h-30;
  border-color: theme('colors.border-gray');
  color: theme('colors.font-base');
}
.header-common .header-container .variety-wrapper form input[type="text"]:focus {
  @apply outline-none;
}
.header-common .header-container .variety-wrapper form button {
  @apply p-4 h-30;
  background: theme('colors.blue');
}
.header-common .header-container .variety-wrapper form button svg {
  @apply text-white;
}
.header-common .header-container .variety-wrapper form + .link-wrapper {
  @apply ml-10;
}
.header-common .header-container .variety-wrapper .link-wrapper {
  @apply flex items-center;
}
.header-common .header-container .variety-wrapper .link-wrapper div {
}
.header-common .header-container .variety-wrapper .link-wrapper div a {
  @apply flex items-center border-2 border-solid rounded-30 h-30;
  border-color: theme('colors.primary');
}
.header-common .header-container .variety-wrapper .link-wrapper div a:hover {
  background: theme('colors.primary');
  @apply text-white;
}
.header-common .header-container .variety-wrapper .link-wrapper div a .icon {
  @apply inline-flex items-center justify-center rounded-half h-30;
  background: theme('colors.primary');
  width: 30px;
}
.header-common .header-container .variety-wrapper .link-wrapper div a .link-name {
  @apply py-2 px-8;
}
.header-common .header-container .variety-wrapper .link-wrapper div a .icon svg {
  @apply text-white;
}
.header-common .header-container .variety-wrapper .link-wrapper div + div {
  @apply ml-10;
}
</style>