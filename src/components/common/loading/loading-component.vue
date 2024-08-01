<template>
  <div class="loading-landing" :class="visibleLoadingClass">
    <div class="text-center loading">
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const isShowLoading = ref(false)
const store = useStore()

console.log('userstore', store)
const isLoading = store.state.authentication.isLoading
console.log('isloading', isLoading)

const storeLoading = store
</script>
<style lang="scss" scoped>
.loading-landing {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
  opacity: 0.2;
  user-select: none;

  .loading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .v-process-circular {

    }
  }
}
</style>