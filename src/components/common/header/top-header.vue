<template>
  <div class="top-header">
    <div class="top-header__container">
      <div class="top-header__branch">
       <v-img :src="logoImg" :width="150"></v-img>
    </div>

    <div class="top-header__action">
      <div class="top-header__user-info">
        <span class="user-name">
          {{ userLogin }}
        </span>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue';
import LogoImage from '@/assets/images/applogo-ahaplus.png'

const logoImg = computed(() => {
  return LogoImage
})
const store = useStore()
const userLogin = store?.state?.authentication?.userInfo?.userID || 'UnKnow'
</script>

<style lang="scss" scoped>
.top-header {
  height: 80px;
  padding: 10px;
  background-color: #fff;

  .top-header__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
  }
}
</style>
