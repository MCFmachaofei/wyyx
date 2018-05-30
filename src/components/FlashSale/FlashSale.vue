<template>
  <div class="flashSale">
    <div class="fs-left">
      <h3>严选限时购</h3>
      <div class="fs-countdown">
        <span class="time">01</span><span class="colon">:</span><span class="time">43</span><span class="colon">:</span><span class="time">40</span>
      </div>
      <p class="fs-next">下一场 18:00 开始</p>
    </div>
    <div class="fs-right">
      <img src="../../pages/Home/images/maojin.png" alt="">
      <div class="fs-price">
        <p class="saleprice">¥15</p>
        <p class="preprice">¥19</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .flashSale
    padding .4rem .5rem .4rem .7rem
    margin-bottom .3rem
    background-color #fff
    height 5rem
    display flex
    .fs-left
      padding-top 1rem
      flex 1
      h3
        font-size .8rem
        line-height .48rem
        color #333
        letter-spacing .2rem
        margin-bottom .32rem
      .fs-countdown
        color white
        .time
          display inline-block
          background-color #444
          color #fff
          font-size .42rem
          width .8rem
          height .7rem
          line-height.7rem
          text-align center
          .colon
            display inline-block
            color #333
            font-size .4rem
            line-height .6rem
            font-weight 700
            width .4rem
      .fs-next
        margin-top .5rem
        font-size .8rem
        color #333
        line-height .32rem
    .fs-right
      height 4.2rem
      width 4.2rem
      position relative
      img
        width 100%
        height 100%
      .fs-price
        position absolute
        width 1.2rem
        height 1.2rem
        right .2rem
        bottom .48rem
        background-color rgba(244,143,24,.95)
        display flex
        flex-direction column
        justify-content center
        border-radius .1rem
        p
          color #fff
          font-size .4rem
          line-height .4rem
          text-align center
        .preprice
          text-decoration line-through
</style>
