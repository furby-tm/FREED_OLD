<template>
  <div id="nav-main">
    <router-link to="/"><a v-bind:class="{ active: isActive }">Home</a></router-link>
    <router-link to="/profile"><a>Profile</a></router-link>
    <router-link to="/discover"><a>Discover</a></router-link>
    <router-link to="/news"><a>News</a></router-link>
    <router-link to="/money"><a>Money</a></router-link>
    <router-link to="/music"><a>Music</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  #nav-main {
    margin-left: 68%;
    background-color: black;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: white;
    width: 30px;
    height: 10px;
    font-size: 30px;
    margin-right: 10px;
    margin-left: 10px;
  }
  a:hover {
    background-color: #C70039;
  }
  a:active {
    background-color: #C70039;
  }
</style>
