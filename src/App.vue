<template>
<div>
  <div id="app">
    <HeaderTop/>
    <router-view/>
    <FooterGuide/>
  </div>
</div>

</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import HeaderTop from './components/HeaderTop/HeaderTop.vue'

export default {
  components:{
    FooterGuide,
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
