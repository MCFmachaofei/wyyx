<template>
  <div class="Inentify">
    <IdentHeader/>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index">
          <img :src="item.picUrl">
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
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
    <!--<div class="rItem">
      <div class="rItem_left">
        <div class="author-container">
          <div class="avatar">
            <img src="./images/avatar.png">
          </div>
          <div class="nickname">丁磊</div>
          <div class="rTitle">懒人抹布，从此告别洗抹布</div>
          <div class="subTitle">16卷囤货装低至163元</div>
        </div>
      </div>
      <div class="rItem_right">
        <img src="./images/3.jpg">
        <div class="exploreTag">丁磊的好货推荐</div>
      </div>
    </div>-->
    <DetailFindMore :detail="detail"/>
    <GoTop/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import GoTop from '../../components/GoTop/GoTop.vue'
  import Recommend from '../../components/Recommend/Recommend.vue'
  import IdentHeader from '../../components/IdentHeader/IdentHeader.vue'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    components:{
      Recommend,
      GoTop,
      DetailFindMore,
      IdentHeader
    },
    computed:{
      ...mapState(['detail'])
    },
    watch:{
      detail(){
        this.$nextTick(() => {
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
        })
      }
    },
    mounted(){
      this.$store.dispatch('getDetail')

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Inentify
    width 100%
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
          width 9rem
          height 4rem
          background-color rgba(255,255,255,.9)
          .subTitle
            position relative
            font-size .3rem
            color #7f7f7f
            line-height .4rem
            padding .2rem
          .title
            font-size .6rem
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
      .item
        font-size .8rem
        float right
        color #333
        .item_left
          flex 1
          margin-right 4rem
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .item_right
          text-overflow ellipsis
          white-space nowrap
          overflow hidden

    .rItem
      color red
      .rItem_left
        color #7e8c8d
        display flex
        flex-direction column
        .avatar
          width .1rem
          img
            width 1rem
            border-radius 50%
        .nickname
          font-size .5rem
        .rTitle
          font-size .6rem
        .subTitle
          font-size .8rem
      .rItem_right
          position relative
          img
            width 6rem
            height 6rem
          .exploreTag
            position absolute
</style>
