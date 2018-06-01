<template>
  <div>
    <div class="wrap">
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共9714款好物</span>
        </div>
      </div>
      <div class="m-cateNavVertWrap">
        <div class="j-cateNavWrap">
          <div class="j-cateNav">
            <div class="item" v-for="(item1,index1) in nav.categoryL1List" :key="index1" @click="getIndex(index1)" :class="{active:index === index1 }">{{item1.name}}</div>
          </div>
        </div>
      </div>
      <ListItem :nav="nav" :index="index"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import ListItem from '../../components/ListItem/ListItem.vue'
  export default {
    name:'List',
    data (){
      return {
        index :3
      }
    },
    computed:{
      ...mapState(['nav'])
    },
    mounted (){
      this.$store.dispatch('getNav')
    },
    methods:{
      getIndex(index1){
        this.index =index1
      }
    },
    components:{
      ListItem
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    background #f4f4f4
    padding-bottom 1.2rem
    .m-itemCateListHd
      border-bottom 1px solid #999
      display flex
      height 1.3rem
      position fixed!important;
      left 0
      top 0
      z-index 5
      width 100%
      align-items: center
      padding 0 .5rem
      background-color #fff
      .m-topSearchIpt
        overflow hidden
        position relative
        width 9rem
        display flex
        flex-flow  row nowrap
        align-items center
        justify-content center
        font-size .4rem
        background-color #ededed
        border-radius .2rem
        margin-left 2rem
        .icon
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          background-repeat no-repeat
          background-size 100% 100%
          width .4rem
          height .4rem
          margin-right .2rem
        .placeholder
          color #666
          font-size .6rem
    .m-cateNavVertWrap
      border-right 1px solid #999
      position fixed
      top 0.5rem
      left 0
      bottom 0
      z-index 4
      width 3.5rem
      background-color #fff
      margin-top 1rem
      .j-cateNav
        height 70%
        padding-bottom 1rem
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        .item
          width 100%
          height 1.6rem
          text-align center
          border none
          display block
          color #333
          font-size .6rem
          line-height .8rem
          text-overflow  ellipsis
          white-space nowrap
          overflow hidden
          &.active
            font-size .6rem
            color #ab2b2b
            line-height 1.4rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            border-left 2px solid #ab2b2b
            width 3.5rem
</style>
