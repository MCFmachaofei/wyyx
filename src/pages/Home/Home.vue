<template>
  <div class="home">
    <HeaderTop/>
    <!--轮播图-->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img :src="item.picUrl">
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
    <DirectSupply/>
    <div class="goods">
      <span class="new">新品首发</span>
      <span class="all">查看全部</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="goods_wrapper">
      <ul class="wrapper_content">
        <li v-for="(item,index) in home.newItemList" :key="index">
          <img :src="item.scenePicUrl" >
          <div class="nowtime" v-for="(t,index) in item.itemTagList" :key="index" >{{t.name}}</div>
          <span class="introduce">{{item.name}}</span>
          <div class="text">{{item.simpleDesc}}</div>
          <div class="price">
            <span>¥</span>
            <span>{{item.retailPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="recommend">
      <span class="popularity">人气推荐 · 好物精选</span>
      <span class="all">查看全部</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="faddish_wrapper">
      <ul class="faddish_content">
        <li v-for="(item,index) in home.popularItemList" :key="index">
          <img :src="item.listPicUrl">
          <div class="vogue" v-for="(t,index) in item.itemTagList" :key="index">{{t.name}}</div>
          <span class="presentation">{{item.name}}</span>
          <div class="txt">{{item.simpleDesc}}</div>
          <div class="price">
            <span>¥</span>
            <span>{{item.retailPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
    <FlashSale/>
    <a href="javascript:;">
      <img src="./images/fls.jpg" alt="">
    </a>
    <div class="selection">
      <span>专题精选</span>
      <i class="iconfont icon-dagou-copy"></i>
    </div>
    <div class="haowu">居家好物</div>
    <GoTop/>
      <GoodThing :cateList="home.cateList"/>
    <BottomFooter/>
  </div>
</template>
<script>
  import DirectSupply from '../../components/DirectSupply/DirectSupply.vue'
  import GoodThing from '../../components/GoodThing/GoodThing.vue'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import FlashSale from '../../components/FlashSale/FlashSale.vue'
  import BottomFooter from '../../components/BottomFooter/BottomFooter.vue'
  import GoTop from '../../components/GoTop/GoTop.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name:'Home',
    data (){
      return {
        isSelected:false
      }
    },
    components:{
      HeaderTop,
      FlashSale,
      BottomFooter,
      GoodThing,
      GoTop,
      DirectSupply
    },

     mounted() {
      this.$store.dispatch('getData',( )=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })


       this.$store.dispatch('getBanner')
       new Swiper('.swiper-container',{
         loop:true,
         autoplay:{
           autoplay:true,
           delay:3000
         },
       })

       this.$store.dispatch('getHome')
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
      })
    },
    computed:{
      ...mapState(['data','banner','home']),
    },
    watch:{
      banner(){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop:true,
            autoplay:{
              autoplay:true,
              delay:3000
            },
          })
        })
      }
    },
    methods:{
      _initScroll() {
        new BScroll('.goods_wrapper', {
          scrollX:true,
          click: true
        }),
          new BScroll('.faddish_wrapper', {
            scrollX:true,
            click: true
          })

      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" >
  .home
    width 100%
    color #7e8c8d
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
    .list
      list-style-type none
      display block
      .picture
        color red
        display list-item
        .cnt
          position absolute
          left 0
          top 0
          padding .2rem 0 0 .2rem
          width 100%
          z-index 4
          img
            width 100%
            height 100%


    .goods
      text-align center
      display block
      color #8BA0B6
      margin-top 2rem
      width 100%
      .new
        width 100%
        display block
      .all
        text-align center
        font-size .6rem
    .goods_wrapper
      display flex
      font-size .1rem
      .wrapper_content
        display flex
        font-size .5rem
        margin-left .5rem
        img
          width 4.3rem
        .nowtime
          background-color #f48f18
          color white
          font-size .5rem
          width 30%
          text-align center
          height .8rem
          line-height .8rem
        .introduce
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-size .5rem
          display inline-block
          width 3.5rem
        .text
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size .5rem
          color #7f7f7f
          padding .2rem
          line-height .5rem
          width 60%
        .price
          color #b4282d
          font-size .7rem
    .recommend
      text-align center
      display block
      color #8BA0B6
      margin-top 1rem
      width 100%
      background-color #F4E9CB
      height 5rem

      .popularity
        padding 1rem
        width 100%
        display block
        .all
         text-align center
         font-size .6rem
    .faddish_wrapper
      display flex
      font-size .1rem
      .faddish_content
        display flex
        font-size .5rem
        margin-left .7rem
        img
          width 4rem
        .vogue
          background-color #f48f18
          color white
          font-size .5rem
          width 40%
          text-align center
          height .7rem
          line-height .7rem
          margin-bottom .3rem
        .presentation
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          display inline-block
          width 3rem
        .txt
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size .5rem
          color #7f7f7f
          padding .2rem
          line-height .5rem
          width 3rem
        .price
          color #b4282d
          font-size .7rem

    .item
      margin-top 1rem
      .item_left
        width 60%
        float left
        margin-left .3rem
        font-size .8rem
        .item_left_title
          letter-spacing .3rem
          color #333
          font-size 1rem
          line-height .3rem
          margin-bottom .5rem
          .time
            display inline-block
              line-height .5rem
              text-align center
              width 1rem
              height 1rem
              font-size 1rem
              color #fff
              border-radius .5rem
              background #444
            span
              line-height .5rem
              text-align center
              width 1rem
              height 1rem
              font-size 1rem
              color #fff
              border-radius .5rem
              background #444
      .item_right
        position relative
        float left
        img
          width 5rem
          margin-left 1rem
    a
      color red
      img
        width 100%
    .selection
      text-align center
      width 100%
      height 2rem
      margin-top 1rem
    .haowu
      text-align center
      font-weight 700
      height 1.5rem
</style>
