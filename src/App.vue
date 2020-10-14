<template>
  <div id="app">
    <keep-alive exclude="Detail" >
      <router-view/>
    </keep-alive>
    <main-tab-bar id="tab-bar"/>
    
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  #tab-bar {
    z-index: 1000;
  }
</style>
