<template>
    <div class="banner-wrap">
        <img src="/static/img/banner.jpg" alt="">
        <div class="desc">
            属于自己的笔记本
        </div>
    </div>
</template>

<script>
    export default {
        name:'Banner'
    }
</script>

<style scoped>
  .banner-wrap {
    position: relative;
    width: 750px;
    border-radius: 6px;
    overflow: hidden;
  }
  .desc {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-size: 20px;
      font-weight: 400;
      line-height: 50px;
      padding-left: 30px;
      color: rgba(255,255,255,.8);
      background: rgba(0,0,0,.5);
    }
  img {
      display: block;
      width: 100%;
    }
</style>