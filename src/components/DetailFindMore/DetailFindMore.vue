<template>
  <div>
    <div class="m-explorMore" v-if="detail.findMore">
      <div class="line-title">
        <div class="inner">更多精彩</div>
      </div>
      <div class="wrap">
        <div class="content" v-for="(item,index) in detail.findMore">
          <div class="imgContainer">
            <img :src="item.itemPicUrl">
          </div>
          <div class="desc">{{item.subTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "DetailFindMore",
    props:{
      detail: Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.m-explorMore
  margin 0 .5rem .5rem
  .line-title
    height 2rem
    position relative
    width 100%
    .inner
      font-size 1rem
      color #333
      position absolute
      top 30%
      left 35%
  .wrap
    .content
      display block
      color #333
      margin-bottom .5rem
      .imgContainer
        display block
        padding .4rem
        background-color #fff
        color #333
        text-decoration none
        outline 0
        cursor pointer
        img
          width 14rem
          height 8rem
      .desc
        background-color #fff
        font-size .7rem
        padding-top .4rem
        line-height 1.2
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        color #333
        padding-left .5rem
</style>
