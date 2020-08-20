<template>
  <li class="main-column-item">
    <slot />
  </li>
</template>

<style>
.main-column-item + .main-column-item {
  @apply mt-20;
}
</style>