<template>
  <a
    href=""
    class="button-link"
  >
    <slot
      name="icon"
      class="icon"
    >
    </slot>
    <span class="link-name">
      {{ linkName }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    linkName: String
  }
}
</script>

<style>
.button-link {
  @apply flex items-center justify-center border-2 border-solid rounded-30 h-30 font-bold text-fz16;
  border-color: theme('colors.primary');
  color: theme('colors.primary');
}
.button-link:hover {
  background: theme('colors.primary');
  @apply text-white;
}
.button-link .icon {
  @apply inline-flex items-center justify-center rounded-half h-30;
  background: theme('colors.primary');
  width: 30px;
}
.button-link .icon svg {
  @apply text-white;
}
.button-link .link-name {
  @apply py-2 px-8;
}

</style>