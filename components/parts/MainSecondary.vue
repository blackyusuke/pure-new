<template>
  <div class="main-secondary">
    <div class="title">
      <h2 :class="{ 'head-short': headLine === 'short' }">
        <span class="headline">
          <slot
            name="icon"
          >
          </slot>
          {{ title }}
        </span>
      </h2>
      <slot
        name="btn"
      >
      </slot>
    </div>
    <slot
      name="lead"
    >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    btn: String,
    headLine: String
  }
}
</script>

<style>
.main-secondary .title {
  @apply flex justify-between border-solid border-b-4 overflow-hidden;
  border-color: theme('colors.primary');
}
.main-secondary .title .head-short {
  width: 520px;
}
.main-secondary h2 {
  @apply flex items-center w-full;
  transform: skew(45deg);
  background: theme('colors.primary');
  margin-left: -25px;
  height: 46px;
  padding: 12px;
}
.main-secondary .title h2 .headline {
  transform: skew(-45deg);
  @apply flex items-center text-white text-fz24 leading-lh24 font-bold;
  margin-left: 25px;
}
.main-secondary .title h2 .headline .icon {
  @apply mr-4;
}
.main-secondary .lead {
  @apply text-white text-fz16 leading-lh16 py-8 px-12;
  background: theme('colors.base');
}
.main-secondary .title .btn {
  @apply flex items-center flex-1 pt-4 pb-8 ml-20;
}
.main-secondary .title .btn a {
  @apply w-full h-full text-fz18 leading-lh18;
}
</style>