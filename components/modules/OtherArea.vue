<template>
  <div class="area-ranking">
    <MainSecondary
      title="他の地方の風俗店を探す"
    >
      <span
        slot="icon"
        class="icon"
      >
        <icon-map
          class="fill-current"
          width="24"
          height="24"
        />
      </span>
    </MainSecondary>
    <ul>
     <NavItem>
        <ButtonLink
          class="is-bold is-middle"
          link-name="もっと見る"
        >
        </ButtonLink>
     </NavItem>
     <NavItem>
        <ButtonLink
          class="is-bold is-middle"
          link-name="もっと見る"
        >
        </ButtonLink>
     </NavItem>
     <NavItem>
        <ButtonLink
          class="is-bold is-middle"
          link-name="もっと見る"
        >
        </ButtonLink>
     </NavItem>
     <NavItem>
        <ButtonLink
          class="is-bold is-middle"
          link-name="もっと見る"
        >
        </ButtonLink>
     </NavItem>
    </ul>
  </div>
</template>

<script>
import MainSecondary from '~/components/parts/MainSecondary.vue'
import NavItem from '~/components/parts/NavItem.vue'
import IconMap from '~/components/icons/IconMap'
import ButtonLink from '~/components/parts/ButtonLink'
export default {
  components: {
    MainSecondary,
    IconMap,
    NavItem,
    ButtonLink
  }
}
</script>