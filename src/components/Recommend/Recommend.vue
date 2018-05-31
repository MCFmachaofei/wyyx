<template>
  <div class="wrapper">
    <ul class="content">
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
      <li>
        <div class="show">
          <img src="./images/1.png" alt="">
          <div class="topNum">317篇文章</div>
          <div class="Stitle">严选推荐</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.wrapper', {
        scrollX:true,
        click:true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrapper
    color #333
    padding-top 1rem
    .content
      width 78rem
      color #7e8c8d
      li
        margin-right 1rem
        width 4.5rem
        height 5.5rem
        float left
        .show
          position relative
          width 4.5rem
          height 5.5rem
          img
            width 4.5rem
            height 4.5rem
            margin-left .6rem
          .topNum
            position absolute
            top 0
            right .1rem
            width 3rem
            height .3rem
            line-height .5rem
            text-align right
            font-size .2rem
          .Stitle
            color #333
            font-size .6rem
            line-height 1
            width 2.5rem
            margin-left 1.5rem
</style>
