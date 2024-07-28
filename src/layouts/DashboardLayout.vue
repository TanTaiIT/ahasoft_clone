<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main-panel">
      <topNav/>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import Footer from './Footer.vue';
import TopNav from './TopNav.vue';
import Sidebar from '@/components/Sidebar.vue';

onBeforeMount(() => {
  console.log('onBeforeMount')
})
</script>