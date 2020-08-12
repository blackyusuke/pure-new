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
  @apply flex items-center justify-center border-2 border-solid rounded-30 overflow-hidden relative z-1;
  border-color: theme('colors.primary');
  color: theme('colors.primary');
  transition: all .3s;
}
.button-link::after {
  @apply absolute bottom-0 left-0 w-full h-full bg-white rounded-30;
  content: '';
  z-index: theme('zIndex.-100');
}
.button-link::before {
  @apply absolute bottom-0 left-0 w-0 h-full rounded-30;
  content: '';
  background-color: theme('colors.primary');
  transition: all .3s;
  z-index: theme('zIndex.-10');
}
.button-link:hover::before {
  width: 100%;
}

.button-link.is-small {
  @apply h-30 text-fz16;
}
.button-link.is-bold {
  @apply font-bold;
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