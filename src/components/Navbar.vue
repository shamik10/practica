<template>
  <div class="navbar">
    <div>HUINYA</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/postForm')">О сайте</my-button>
      <my-button @click="$router.push('/composition')">Composition</my-button>
      <!-- <my-button @click="$router.push('/store')">store</my-button> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
  .navbar {
    height: 50px;
    background-color: gold;
    box-shadow: 2px 2px 4px gray ;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__btns {
    margin-left: auto;
  }
</style>