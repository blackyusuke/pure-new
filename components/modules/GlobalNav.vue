<template>
  <nav>
    <ul>
      <li>
        <a href="">
          <icon-home
            class="fill-current"
            width="29"
            height="26"
          />
        </a>
      </li>
      <!-- <li>
        <div
          @mouseover="mouseOverAction(test)"
          @mouseleave="mouseLemoveAction(test)"
        >
          お店検索
        </div>
        <nav
          v-if="hoverFlag"
        >
          <ul>
            <li>
              <a href="">
                場所から探す
              </a>
            </li>
            <li>
              <a href="">
                業種から探す
              </a>
            </li>
            <li>
              <a href="">
                総額から探す
              </a>
            </li>
            <li>
              <a href="">
                こだわりで探す
              </a>
            </li>
            <li>
              <a href="">
                店舗名から探す
              </a>
            </li>
          </ul>
        </nav>
      </li>
     <li>
        <div
          @mouseover="mouseOverAction(test)"
          @mouseleave="mouseLemoveAction(test)"
        >
          女の子検索
        </div>
        <nav
          v-if="hoverFlag && test === hoverIndex"
        >
          <ul>
            <li>
              <a href="">
                出勤&タイプで探す
              </a>
            </li>
            <li>
              <a href="">
                画像から女の子を探す
              </a>
            </li>
            <li>
              <a href="">
                今すぐ遊べるピックアップ嬢
              </a>
            </li>
            <li>
              <a href="">
                体験入店の女の子
              </a>
            </li>
            <li>
              <a href="">
                店舗名から探す
              </a>
            </li>
          </ul>
        </nav>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import IconHome from '~/components/icons/IconHome'
export default {
  components: {
    IconHome
  },
}
</script>