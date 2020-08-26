<template>
  <section class="main-column-section">
    <article>
      <slot />
    </article>
  </section>
</template>

<style>
.main-column-section + .main-column-section {
  @apply mt-20;
}
</style>