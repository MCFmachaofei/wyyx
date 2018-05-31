<template>
  <div class="Inentify">
    <div class="Inentify_head">
      <i class="iconfont icon-shouye"></i>
      <span>网易严选</span>
      <i class="iconfont icon-geren"></i>
      <i class="iconfont icon-gouwuche2"></i>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/1.jpg" alt="">
          <div class="content">
            <div class="subTitle">严选推荐</div>
            <div class="title">夏日小仙女养成记</div>
            <div class="desc">页面内商品每满179立减20</div>
          </div>
        </div>
      </div>
    </div>
    <Recommend/>
    <div class="forYou">为你推荐</div>
    <div class="forYou_show">
      <img src="./images/2.jpg" alt="">
      <div class="ftitle">严选推荐</div>
      <div class="item">
        <span class="item_left">如何做清新的白衣少年</span>
        <span class="item_right">9.9元起</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Recommend from '../../components/Recommend/Recommend.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    components:{
      Recommend
    },
    mounted(){
      new Swiper('.swiper-container', {
        slidesPerView: 1.15,
        centeredSlides: true,
        onInit: function (swiper) {
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        loop: true,
        spaceBetween: 10,
        autoplay: true

      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Inentify
    width 100%
    .Inentify_head
      width 100%
      height 2.2rem
      position fixed
      background-color #fafafa
      z-index 10
      display flex
      justify-content center
      align-items center
      .iconfont
        font-size 1.2rem
        letter-spacing .5rem
      span
        text-align center
        margin-left 3.3rem
        margin-right 3.3rem
    .swiper-container
      width 100%
      padding-top 3rem
      .swiper-wrapper
        img
          display block
          width 100%
          height 8rem
          border-radius .2rem
        .content
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          margin auto
          display flex
          align-items center
          justify-content center
          flex-direction column
          width 7rem
          height 3rem
          background-color rgba(255,255,255,.9)
          .subTitle
            position relative
            font-size .3rem
            color #7f7f7f
            line-height .4rem
            padding .2rem
          .title
            font-size .8rem
            line-height .65rem
            color #333
            margin .3rem
            font-weight 700
          .desc
            font-size .3rem
            color #333f
            line-height .5rem
            margin-top .3rem

    .forYou
      text-align center
      background-color #fff
      font-size 1rem
      height 7rem
      line-height 3rem
    .forYou_show
      margin-bottom 4rem
      padding-top 2rem
      position relative
      img
        width 100%
        padding 0 .5rem
        border-radius .2rem
      .ftitle
        padding 0 .2rem
        position absolute
        top 2.5rem
        left 1.5rem
        display inline-block
        height .5rem
        line-height .5rem
        background-color rgba(255,255,255,.9)
        bottom 1px solid #d9d9d9
        color #333
        font-size .5rem
</style>
