<template>
  <div id="app" class="bg">
    <router-view id="main" />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    height: 100vh;
  }

  .bg {
   
  }

  .bg-menu {
    background: rgba(179, 220, 237, 1);
    background: -moz-linear-gradient(left, rgba(179, 220, 237, 1) 0%, rgba(41, 184, 229, 1) 50%, rgba(188, 224, 238, 1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(179, 220, 237, 1)), color-stop(50%, rgba(41, 184, 229, 1)), color-stop(100%, rgba(188, 224, 238, 1)));
    background: -webkit-linear-gradient(left, rgba(179, 220, 237, 1) 0%, rgba(41, 184, 229, 1) 50%, rgba(188, 224, 238, 1) 100%);
    background: -o-linear-gradient(left, rgba(179, 220, 237, 1) 0%, rgba(41, 184, 229, 1) 50%, rgba(188, 224, 238, 1) 100%);
    background: -ms-linear-gradient(left, rgba(179, 220, 237, 1) 0%, rgba(41, 184, 229, 1) 50%, rgba(188, 224, 238, 1) 100%);
    background: linear-gradient(to right, rgba(179, 220, 237, 1) 0%, rgba(41, 184, 229, 1) 50%, rgba(188, 224, 238, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3dced', endColorstr='#bce0ee', GradientType=1);
  }

  #main {
    padding-top: 70px;
    width: 100%;
    height: 100%;
  }

  #nolink {
    text-decoration: none;
    color: inherit;
  }
</style>