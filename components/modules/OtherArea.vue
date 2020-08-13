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
     <NavItem
      v-for="(item, index) in 8"
      :key="index"
      width="quarter"
     >
      <template v-if="index === 0">
        <ButtonLink
          class="is-middle"
          link-name="北海道･東北"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 1">
        <ButtonLink
          class="is-middle"
          link-name="関東"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 2">
        <ButtonLink
          class="is-middle"
          link-name="北陸"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 3">
        <ButtonLink
          class="is-middle"
          link-name="甲信越"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 4">
        <ButtonLink
          class="is-middle"
          link-name="東海"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 5">
        <ButtonLink
          class="is-middle"
          link-name="関西"
        >
        </ButtonLink>
      </template>
        <template v-else-if="index === 6">
        <ButtonLink
          class="is-middle"
          link-name="中国･四国"
        >
        </ButtonLink>
      </template>
        <template v-if="index === 7">
        <ButtonLink
          class="is-middle"
          link-name="九州･沖縄"
        >
        </ButtonLink>
      </template>
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