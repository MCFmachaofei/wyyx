<template>
  <div class="hd-itemWrap">
    <div class="hd-item">
      <h4>CK制造商</h4>
      <div class="title">
        25元起
      </div>
    </div>
    <div class="hd-item">
      <h4>Nine West制造商</h4>
      <div class="title">
        199元起
      </div>
    </div>
    <div class="hd-item">
      <h4>新秀丽制造商</h4>
      <div class="title">
        49元起
      </div>
    </div>
    <div class="hd-item">
      <h4>Birkenstock集团制造商</h4>
      <div class="title">
        89.9元起
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .hd-itemWrap
    margin-top .5rem
    .hd-item
      display inline-block
      margin-bottom .2rem
      width 35%
      height 4rem
      overflow hidden
      padding  .8rem
      border 1px solid #999
      &:nth-child(1),&:nth-child(3)
        margin-left .5rem
      &:nth-child(1)
        background: url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png")
        background-size 100%

      &:nth-child(2)
        background: url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png")
        background-size 100%

      &:nth-child(3)
        background: url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png")
        background-size 100%

      &:nth-child(4)
        background: url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png")
        background-size 100%
      h4
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        color #333
        font-size .4rem
        line-height .5rem
        margin-bottom .1rem
      .title
        font-size .8rem
</style>
