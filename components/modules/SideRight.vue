<template>
  <ul class="side-right">
    <li>
      <a href>
        <img v-lazy="require('~/assets/images/bnr/bnr3.jpg')" alt="">
        <div class="overlay">Check!!</div>
      </a>
    </li>
    <li>
      <a href>
        <img v-lazy="require('~/assets/images/bnr/bnr4.jpg')" alt="">
        <div class="overlay">Check!!</div>
      </a>
    </li>
    <li>
      <SideSecondary>
        ピックアップガール
        <p
          slot="lead"
          class="lead"
        >
          ぴゅあらば運営が毎日セレク
          トお昼の12時頃に更時!!
        </p>
      </SideSecondary>
    </li>
  </ul>
</template>

<script>
import SideSecondary from "~/components/parts/SideSecondary.vue";
export default {
  components: {
    SideSecondary,
  },
};
</script>

<style>
.side-right {
  @apply w-190;
}
.side-right li + li {
  @apply mt-20;
}
.side-right li a {
  @apply relative block;
}
.side-right li a:hover .overlay {
  transform: scale(1);
}
.side-right li a .overlay {
  @apply absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-fz30 font-bold;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
  transform: scale(0);
  color: theme("colors.primary");
  z-index: theme("zIndex.1000");
}
</style>