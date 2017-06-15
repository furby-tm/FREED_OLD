<template>
  <div id="nav-main">
    <router-link to="/"><a>Home</a></router-link>
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
    background-color: black;
    margin-top: 17vh;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: white;
    height: 10vh;
    font-size: 5vh;
    margin-left: 10%;
    margin-right: 10%;
  }
  a:hover {
    background-color: #C70039;
  }
  a:active {
    background-color: #C70039;
  }
</style>
