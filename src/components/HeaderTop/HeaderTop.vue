<template>
  <!--首页头部-->
  <div class="home_head">
    <img src="./images/logo.png" alt="logo">
    <div class="route">
      <i class="iconfont icon-suosou"></i>
      <span class="placeholder">搜索商品, 共9737款好物</span>
    </div>
    <!--better-scroll -->
    <div class="wrapper">
      <ul class="content">
        <li >推荐</li>
        <li >居家</li>
        <li >配件</li>
        <li >服装</li>
        <li >电器</li>
        <li >洗护</li>
        <li >饮食</li>
        <li >餐厨</li>
        <li >婴童</li>
        <li >文体</li>
        <li >特色区</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted ( ){
      this.$nextTick(( ) => {
        // 实现BScroll的实例是一个单例
        this.scroll = new BScroll('.wrapper', {
          scrollX:true,
        })
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .home_head
    width 100%
    height 3rem
    color #989898
    top 0
    left 0
    right 0
    position fixed
    z-index 100
    img
      width 2rem
      float left
      margin 0 0 0  .6rem
      padding-top .4rem
      color #666
    .route
      background-color #ededed
      text-align center
      .placeholder
        font-size .6rem
        color #666
    .wrapper
      display flex
      flex-direction row
      background #fff
      .content
        margin-right  1rem
        display flex
        li
          position relative
          display inline-block
          padding .5rem
          line-height .8rem
          font-size .6rem
          white-space nowrap
          overflow hidden
</style>
