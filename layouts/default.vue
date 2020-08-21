<template>
  <div class="purelovers">
    <HeaderCommon />
    <div class="purelovers-wrap">
      <div class="purelovers-inner">
        <BreadCrumb />
        <nuxt />
      </div>
    </div>
    <FooterCommon />
  </div>
</template>

<script>
import BreadCrumb from "~/components/modules/BreadCrumb.vue";
import HeaderCommon from "~/components/modules/HeaderCommon.vue";
import FooterCommon from "~/components/modules/FooterCommon.vue";

export default {
  components: {
    BreadCrumb,
    HeaderCommon,
    FooterCommon,
  },
};
</script>

<style>
html {
  @apply box-border antialiased;
  font-family: theme("fontFamily.default");
  color: theme("colors.base");
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea,
select {
  /* デフォルトスタイルをリセット */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* font-familyを継承しないので、継承させる */
  font-family: inherit;

  /* iOSの角丸をリセット */
  border-radius: 0;

  /* box-size */
  box-sizing: border-box;

  /* 文字色を親から継承 */
  color: inherit;
}

label {
  /* iOSでのlabelとinput,select,textareaの関連付け */
  cursor: pointer;
}

/* スピンボタン非表示 chrome,safari */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button,
input[type="month"]::-webkit-outer-spin-button,
input[type="month"]::-webkit-inner-spin-button,
input[type="datetime-local"]::-webkit-outer-spin-button,
input[type="datetime-local"]::-webkit-inner-spin-button,
input[type="week"]::-webkit-outer-spin-button,
input[type="week"]::-webkit-inner-spin-button,
input[type="time"]::-webkit-outer-spin-button,
input[type="time"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-outer-spin-button,
input[type="date"]::-webkit-inner-spin-button {
  /*-webkit-appearance: none;
  margin: 0;*/
  display: none;
}

/* スピンボタン非表示(firefox) */
input[type="number"],
input[type="month"],
input[type="datetime-local"],
input[type="week"],
input[type="time"],
input[type="date"] {
  -moz-appearance: textfield;
}

/* クリアボタン非表示 */
input[type="date"]::-webkit-clear-button,
input[type="month"]::-webkit-clear-button,
input[type="datetime-local"]::-webkit-clear-button,
input[type="time"]::-webkit-clear-button,
input[type="week"]::-webkit-clear-button {
  -webkit-appearance: none;
}
/* input */
input {
  /* 背景色(任意の色を指定) */
  background-color: #fff;

  /* inputの枠線を消す */
  border: 1px solid transparent;
  transition: border 0.2s ease-out;

  /* 文字色を親から継承 */
  color: inherit;

  /*inputのフォーカス時の枠線を消す*/
  outline: 0;
}

input[type="submit"] {
  cursor: pointer;
}

/* inputにフォーカスが当たっている時 */
input:focus {
  border-bottom: 1px solid#e74c3c;
}
*,
*:before,
*:after {
  @apply box-border m-0;
}
.purelovers .purelovers-wrap .purelovers-inner {
  @apply w-1100 m-auto;
}
</style>
