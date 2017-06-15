<template>
  <div id="app" @touchmove.prevent>
    <ActionBar></ActionBar>
    <router-view></router-view>
    <router-view name="NewsFeedLoad"></router-view>
    <router-view name="NewsFeedLoad"></router-view>
    <router-view name="NewsFeedLoad"></router-view>
  </div>
</template>

<script>
import ActionBar from '@/components/ActionBar'
import Navigation from '@/components/Navigation'
export default {
  name: 'app',
  components: {
  	ActionBar,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body, html {
  background-color: #E7E7E7;
  display: flex;
  margin: 0px;
  padding: 0px;
}
</style>
