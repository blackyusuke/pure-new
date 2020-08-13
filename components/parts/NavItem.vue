<template>
  <li
    class="nav-item"
    :class="{ 'quarter': headLine === 'short' }"
  >
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    headLine: String
  }
}
</script>

<style>
  .nav-item {
    @apply pr-8 pb-16 w-3/12;
  }
  .nav-item.is-quarter {
    @apply w-1/4;
  }
</style>