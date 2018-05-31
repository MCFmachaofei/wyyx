<template>
  <div class="Person">
    <IdentHeader/>
    <img src="./images/wyyx.png">
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
      margin 6rem 0 0 3rem
      width 10rem
</style>
