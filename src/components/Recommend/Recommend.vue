<template>
  <div class="wrapper">
    <ul class="content">
      <li class="list" v-for="(item,index) in detail.column" :key="index">
        <div class="show">
          <img :src="item.picUrl">
          <div class="topNum">{{item.articleCount}}</div>
          <div class="Stitle">{{item.title}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      new BScroll('.wrapper', {
        scrollX:true,
        click:true
      }),
      this.$store.dispatch('getDetail')
  },
    computed:{
      ...mapState(['detail'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrapper
    color #333
    padding-top 1rem
    .content
      width 45rem
      color #7e8c8d
      .list
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
            width 3rem
            margin-left 1.5rem
            text-align center
</style>
