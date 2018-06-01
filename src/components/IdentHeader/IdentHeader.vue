<template>
  <div class="Inentify_head">
    <a href="/home">
      <i class="iconfont icon-shouye"></i>
    </a>
    <span>网易严选</span>
    <i class="iconfont icon-geren"></i>
    <i class="iconfont icon-gouwuche2" @click="goCart"></i>
  </div>
</template>
<script>
  export default {
    methods:{
      goCart(){
        this.$router.push({
          path:'/cart'
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Inentify_head
    width 100%
    height 2.2rem
    position fixed
    background-color #fafafa
    z-index 10
    display flex
    justify-content center
    align-items center
    a
      font-weight 700
      .iconfont
        font-size 1.5rem
        letter-spacing .5rem
    span
      text-align center
      margin-left 3.5rem
      margin-right 3.3rem
    .iconfont
      font-size 1.2rem
      letter-spacing .3rem
</style>
