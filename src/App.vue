<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

* {
    padding: 0;
    margin: 0;
  }

  body {
    background: #f1f1f1;
  }
.fll{
  float: left;
}
.flr{
  float: right;
}
.w1170 {
  width: 1170px;
  margin: 0 auto;
}

.cleanfix::after {
  content:'';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
