<template>
  <div class="cart">
    <span class="logo">购物车</span>
    <ul class="serve">
      <li class="item">
        <i class="iconfont icon-weibiaoti-1"></i>
        <span class="txt">30天无忧退货</span>
      </li>
      <li class="item">
        <i class="iconfont icon-weibiaoti-1"></i>
        <span class="txt">48小时快速退款</span>
      </li>
      <li class="item">
        <i class="iconfont icon-weibiaoti-1"></i>
        <span class="txt">满88元免邮费</span>
      </li>
    </ul>
    <div class="shopping">
      <img src="./image/cart.png" alt="购物车">
      <div class="add">去添加点什么吧</div>
    </div>
   <button @click="goLogin">登陆</button>
  </div>
</template>
<script>
  export default {
    /*methods:{
      goPerson:function () {
        this.$router.push({
          path:'/person'
        })
      }
    }*/
    methods:{
      goLogin(){
        this.$router.push({
          path:'/login'
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart
    .logo
      display flex
      justify-content center
      font-size 1.5rem
      color #333
    .serve
      color #7e8c8d
      .item
        float left
        margin-left .5rem
        .txt
          font-size .5rem
          margin-left .5rem
    .shopping
      margin auto
      right 0
      left 0
      top 0
      bottom 0
      text-align center
      img
        width 5rem
        margin-top 8rem
      .add
        color #999
        font-size 1rem
    button
      width 70%
      height 2rem
      text-align center
      border .2rem solid #b4282d
      background #b4282d
      margin 1rem 0 0 2.5rem
      color white
</style>
