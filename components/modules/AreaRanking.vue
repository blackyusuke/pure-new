<template>
  <div class="area-ranking">
    <MainSecondary
      title="関東の風俗ランキング"
      headLine="short"
    >
      <span
        slot="icon"
        class="icon"
      >
        <icon-crown
          class="fill-current"
          width="24"
          height="24"
        />
      </span>
      <p
        slot="btn"
        class="btn" 
      >
        <ButtonLink
          class="is-bold is-middle"
          link-name="もっと見る"
        >
        </ButtonLink>
      </p>
      <p
        slot="lead"
        class="lead"
      >
      あなたのお気に入りのお店や女の子の順位をチェック！
      </p>
    </MainSecondary>
  </div>
</template>

<script>
import MainSecondary from '~/components/parts/MainSecondary.vue'
import IconCrown from '~/components/icons/IconCrown'
import ButtonLink from '~/components/parts/ButtonLink'
export default {
  components: {
    MainSecondary,
    IconCrown,
    ButtonLink
  }
}
</script>