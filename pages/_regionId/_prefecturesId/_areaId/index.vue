<template>
  <main id="area">
    <AllColumnWrapper>
      <p>
        <img src="http://placehold.jp/30/FFCCCC/FF0000/750x360.png?text=エリアトップスペシャル" alt="画像" />
      </p>
      <ul>
        <li>
          <ShopCard />
        </li>
      </ul>
    </AllColumnWrapper>
  </main>
</template>

<script>
import AllColumnWrapper from "~/components/modules/AllColumnWrapper.vue";
import ShopCard from "~/components/modules/ShopCard.vue";
export default {
  components: {
    AllColumnWrapper,
    ShopCard
  }
}
</script>