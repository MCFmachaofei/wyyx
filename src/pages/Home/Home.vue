<template>
  <div class="home">
    <!--首页头部-->
    <div class="home_head">
      <img src="./image/logo.png" alt="logo">
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
    <!--轮播图-->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/1.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/2.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/3.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/4.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/5.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/6.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/7.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../../common/images/swiper/8.jpg">
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <ul class="label">
      <li class="label_content">
        <i class="iconfont icon-dagou-yuanCheck"></i>
        <span class="txt">网易自营品牌</span>
      </li>
      <li class="label_content">
        <i class="iconfont icon-dagou-copy"></i>
        <span class="txt">30天无忧退货</span>
      </li>
      <li class="label_content">
        <i class="iconfont icon-dagou-copy"></i>
        <span class="txt">48小时快速退款</span>
      </li>
    </ul>
    <div class="more">
      <span class="txt">品牌制造商直供</span>
      <i class="iconfont icon-tiaozhuan"></i>
    </div>
    <div class="show">
      <img src="../../common/images/show/1.png"></img>
      <img src="../../common/images/show/2.png"></img>
      <img src="../../common/images/show/3.png"></img>
      <img src="../../common/images/show/4.png"></img>
    </div>
    <div class="goods">
      <span class="new">新品首发</span>
      <span class="all">查看全部</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
     mounted ( ) {
      this.$nextTick(( ) => {
        // 实现BScroll的实例是一个单例
        this.scroll = new BScroll('.wrapper', {
          scrollX:true,
        })
      }),

      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
      })
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    .home_head
      width 100%
      height 1rem
      color #000000
      top 0
      left 0
      right 0
      z-index 100
      position fixed

      img
        width 3rem
        float left
        margin 0 0 0 .3rem
      .route
        margin .3rem 0.5rem 0 5rem
        background-color #ededed
        .placeholder
          font-size .6rem
          color #666
      .wrapper
        display flex
        flex-direction row
        padding .4rem
        background #fff
        .content
          margin-right .5rem
          display flex
          li
            position relative
            display inline-block
            padding .5rem
            line-height .8rem
            font-size .6rem
            white-space nowrap
            overflow hidden
    .home_nav
      position relative
      margin-top 3rem
      background #fff
      .swiper-container
        width 100%
        .swiper-wrapper
          width 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              .food_container
                display block
                width 100%
                text-align center
                font-size 0
                img
                  display inline-block
                  width 100%


    ul
      .label_content
        float left
        list-style-type  none
        .txt
          font-size .5rem
          margin-right 1rem
    .more
      text-align center
    .show
      float left
      margin .5rem
      img
        width 6rem
        float left
        display flex
        justify-content center
        align-items center
      goods
        text-align center
        color red
</style>
