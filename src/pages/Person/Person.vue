<template>
  <div class="Person">
    <IdentHeader/>
    <img src="./images/wyyx.png">
    <div class="phone_login">
      <i class="iconfont icon-shouji"></i>
      <span class="phone">手机号码登陆</span>
    </div>
    <div class="mail_login">
      <i class="iconfont icon-youxiang"></i>
      <span class="mail">邮箱账号登陆</span>
    </div>
    <div class="phone_register">
      <span class="register">手机号快捷注册</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="third_wrap">
      <div class="item_wrap">
        <i class="iconfont icon-gongzhonghao"></i>
        <span class="weixin">微信</span>
      </div>
      <div class="item_wrap">
        <i class="iconfont icon-changyonglogo33"></i>
        <span class="qq">QQ</span>
      </div>
      <div class="item_wrap">
        <i class="iconfont icon-weibo"></i>
        <span class="weibo">微博</span>
      </div>
    </div>
  </div>
</template>
<script>
  import IdentHeader from '../../components/IdentHeader/IdentHeader.vue'
  export default {
    components:{
    IdentHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Person
    img
      margin 6rem 0 1rem 3rem
      width 10rem
    .phone_login
      margin 0 0 .8rem 1.2rem
      border 1px solid #b4282d
      background-color #b4282d
      color #fff
      text-align center
      width 90%
      font-size .8rem
      display inline-block
      height 1.8rem
      line-height 1.8rem
      .phone
        height 1rem
    .mail_login
      border 1px solid #b4282d
      color #b4282d
      text-align center
      margin 0 0 .8rem 1.2rem
      font-size .8rem
      display inline-block
      height 1.8rem
      line-height 1.8rem
      width 90%
    .phone_register
      text-align center
      color #333
      font-size .8rem
      margin-left 1.5rem
    .third_wrap
      margin 7rem 0 1rem .8rem
      display flex
      flex-direction row
      justify-content space-around
      .item_wrap
        font-size .7rem
        color #7F7F7F
</style>
