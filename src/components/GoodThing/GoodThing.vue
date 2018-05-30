<template>
  <div>
    <div class="m-indexFloor" v-for="(item, index) in cateList" :key="index">
      <div class="m-titleGoodGrid">
        <h3 class="title">{{item.name}}好物</h3>
        <div class="m-goodGrid" >
          <div class="wraper" v-for="(itemGoodGrid, indexGoodGrid) in item.itemList" :key="indexGoodGrid">
            <img :src="itemGoodGrid.listPicUrl" alt="">
            <div class="desc">{{itemGoodGrid.simpleDesc}}</div>
            <div class="name">{{itemGoodGrid.name}}</div>
            <span class="price">{{itemGoodGrid.couponPrice}}￥</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"GoodThing",
    props:{
      cateList:Array
    },
    data (){
      return {

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .m-indexFloor
    margin-bottom .3rem
    background-color #fff
    .m-titleGoodGrid
      background-color #ffffff
      .title
        line-height 1.6rem
        text-align center
        font-size .5rem
        color #333
        background-color #fff
      .m-goodGrid
        width 100%
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        .wraper
          background-color #ffffff
          width 45%
          margin-bottom .2rem
          padding-bottom .2rem
          &:nth-of-type(odd)
            margin-left .2rem
            margin-right .3rem
          &:nth-of-type(even)
            margin-right .2rem
          img
            display block
            width 100%
            height 4.6rem
            border-radius .05rem .05rem 0 0
            background-color #f4f4f4
          .desc
            bottom 0
            width 95%
            background #F1ECE2
            border-radius 0 0 .05rem .05rem
            font-size .32rem
            color #9F8A60
            letter-spacing 0
            line-height .4rem
            padding .2rem .13rem
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
          .name
            margin-top .2rem
            padding 0 .2rem
            line-height .64rem
            text-align left
            font-size .4rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
          .price
            line-height 1
            font-size .5rem
            text-align left
            color #b4282d
            padding 0 .2rem
</style>
