<template>
  <div class="all-column-wrapper">
    <SideLeft />
    <div class="main-column">
      <slot />
    </div>
    <SideRight />
  </div> 
</template>

<script>
import SideLeft from "~/components/modules/SideLeft.vue"
import SideRight from "~/components/modules/SideRight.vue"
export default {
  SideLeft,
  SideRight,
};
</script>

<style>
.all-column-wrapper {
  @apply flex justify-between;
  padding-bottom: 120px;
}
.all-column-wrapper .main-column {
  width: theme('width.680');
}
.all-column-wrapper .main-column .bnr {
  @apply mb-20;
}
</style>