<template>
  <div>
    <HeaderCommon />
    <nuxt />
    <FooterCommon />
  </div>
</template>

<script>
import HeaderCommon from '~/components/modules/HeaderCommon.vue'
import FooterCommon from '~/components/modules/FooterCommon.vue'

export default {
  components: {
    HeaderCommon,
    FooterCommon
  }
}
</script>

<style>
html {
  @apply box-border antialiased;
  font-family: theme('fontFamily.default');
  color: theme('colors.base');
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
*:before,
*:after {
  @apply box-border m-0;
}
</style>
