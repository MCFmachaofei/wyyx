<template>
  <div class="m-subCateList" v-if="nav.categoryL1List">
    <div class="banner">
      <img :src="nav.categoryL1List[index].bannerUrl">
    </div>
    <div class="cateList">
      <div class="hd">
        <div class="text">
          <span>{{nav.categoryL1List[index].name}}</span>
          <span>分类</span>
        </div>
      </div>
      <div class="list">
        <div class="cateItem" v-for="(itemCate,indexCate) in nav.categoryL1List[index].subCateList" :key="indexCate">
          <div class="cateImgWrapper" >
            <img :src="itemCate.wapBannerUrl">
            <div class="name">{{itemCate.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ListItem",
    props:{
      nav: Object,
      index: Number
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .m-subCateList
    height 89%
    background #ffffff
    position absolute
    right 0
    margin-left 2.5rem
    padding .5rem .5rem .3rem
    margin-bottom 1rem
    .banner
      position relative
      width 100%
      height 3rem
      display table
      img
        width 100%
        border-radius 4px
    .cateList
      .hd
        height 1.5rem
        line-height 1.5rem
        text-align center
        font-size .5rem
        color #333
        .text
          height 1.5rem
          line-height 1.5rem
          text-align center
          font-size .5rem
          color #333
          span
            height 1.5rem
            line-height 1.5rem
            text-align center
            font-size 1rem
            color #333
      .list
        .cateItem
          float left
          margin-bottom 4rem
          width 3.2rem
          height 2.5rem
          margin-left .8rem
          .cateImgWrapper
            img
              display block
              width 100%
              background #fff
            .name
              height 1rem
              font-size .8rem
              color #333
              text-align center
</style>
