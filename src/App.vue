<template>
  <div class="app">
    <loading-component :key="'app-spinner'"/>
    <router-view />
  </div>
  
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import LoadingComponent from './components/common/loading/loading-component.vue'
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
