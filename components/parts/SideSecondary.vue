<template>
  <h2 class="side-secondary"
  :class="[{ 'is-large': fontSize === 'is-large' }, {'is-small': fontSize === 'is-small'}]"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    fontSize: String
  }
}
</script>

<style>
.side-secondary {
  @apply flex items-center h-50 font-bold text-white p-12 relative;
  background: theme("colors.primary");
}
.side-secondary.is-large {
  @apply text-fz24 leading-lh24;
}
.side-secondary.is-small {
  @apply text-fz16 leading-lh20;
}
.side-secondary::after {
  @apply absolute w-0 h-0 top-0 right-0 border-solid border-t-0 border-l-0;
  content: "";
  border-width: 0 20px 20px 0;
  border-color: transparent #fff transparent transparent;
}
.side-secondary svg {
  @apply mr-4;
}
</style>