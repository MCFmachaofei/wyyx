<template>
  <footer class="footer_guide">
    <div class="guide_item" @click="goto('/home')" :class="{on: '/home'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/identify')" :class="{on: '/indentify'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-hezi201"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on: '/classify'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/cart')" :class="{on: '/cart'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/person')" :class="{on:'/person'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
     /* isCurrent(path){
        return this.$route.path ===path
      }*/

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 3rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin .1rem
      color #999999
      &.on
        color #02a774
      span
        font-size .6rem
        margin-top .2rem
        margin-bottom .2rem
        .iconfont
          font-size 1.3rem
</style>
