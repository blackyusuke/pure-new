<template>
  <nav class="global-nav">
    <ul class="global-list">
      <li class="global-item">
        <a href="">
          <icon-home
            class="fill-current"
            width="29"
            height="26"
          />
        </a>
      </li>
      <li
        v-for="(num, index) in 7"
        :key="index"
        class="global-item"
        @mouseover="mouseOverAction(index)"
        @mouseleave="mouseLemoveAction(index)"
      >
        <template v-if="index === 0">
          <p
            class="title"
          >
          お店検索
        </p>
         <nav v-if="hoverFlag && index === hoverIndex">
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
                 こだわりから探す
               </a>
             </li>
             <li>
               <a href="">
                 店舗名から探す
               </a>
             </li>
           </ul>
         </nav>
        </template>
        <template v-if="index === 1">
          <p
            class="title"
          >
            女の子検索
          </p>
          <nav v-if="hoverFlag && index === hoverIndex">
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
        </template>
        <template v-if="index === 2">
          <p
            class="title"
          >
            クーポン
          </p>
          <nav v-if="hoverFlag && index === hoverIndex">
            <ul>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
            </ul>
          </nav>
        </template>
        <template v-if="index === 3">
          <a
            href=""
            class="title"
          >
            ランキング
          </a>
        </template>
        <template v-if="index === 4">
          <a
            href=""
            class="title"
          >
            口コミ
          </a>
        </template>
        <template v-if="index === 5">
          <a
            href=""
            class="title"
          >
            写メ日記
          </a>
        </template>
        <template v-if="index === 6">
           <p
            class="title"
          >
            動画・画像・マンガ
          </p>
          <nav v-if="hoverFlag && index === hoverIndex">
            <ul>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
              <li>
                <a href="">
                  サンプルテキスト
                </a>
              </li>
            </ul>
          </nav>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconHome from '~/components/icons/IconHome'
export default {
  components: {
    IconHome
  },
  data() {
    return {
      hoverFlag: false
    }
  },
   methods: {
     mouseOverAction(index){
      this.hoverFlag = true
      this.hoverIndex = index
    },
    mouseLemoveAction(){
      this.hoverFlag = false
    }
  }
}
</script>

<style>
.global-nav {
  background: theme('colors.primary');
  @apply border-b-4 border-solid;
  border-color: theme('colors.base');
}
.global-nav .global-list {
  @apply flex m-auto w-1100;
  height: 60px;
}
.global-nav .global-list .global-item  {
  @apply flex items-center justify-center py-15 px-20 border-r border-solid relative;
  border-color: theme('colors.border-thin-gray');
  width: 140px;
}
.global-nav .global-list .global-item nav {
  @apply border-4 border-solid absolute py-5 px-10;
  bottom: 0;
  left: 0;
  transform: translate(0,100%);
  border-color: theme('colors.primary');
  width: 220px;
}
.global-nav .global-list .global-item .title {
  @apply text-white text-fz14 leading-lh28 font-bold;
}
.global-nav .global-list .global-item:first-child {
  @apply border-l border-solid;
  width: 70px;
  border-color: theme('colors.border-thin-gray');
}
.global-nav ul li a svg {
  @apply text-white; 
}
</style>