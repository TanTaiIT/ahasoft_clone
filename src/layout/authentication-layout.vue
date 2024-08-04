<template>
  <div class="app-layout">
    <top-header />
    <top-menu />
    <slot>
      <router-view/>
    </slot>
    <footerPage />
  </div>
</template>

<script setup>
import TopHeader from './../components/common/header/top-header.vue'
import footerPage from '@/components/common/footer/footer-page.vue';
import TopMenu from '@/components/common/header/top-menul.vue';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import useShowLoading from '@/composable/useCommon';
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

onBeforeMount(() => {
  loadShopBasicInfo()
})

const { setLoading } = useShowLoading()
const loadShopBasicInfo = async() => {
  try {
    setLoading(true)
    const reponse = await store.dispatch('authentication/getShopInfo')
    
    console.log('data', reponse)
    if(!reponse.IsOK) {
     router.push({name: 'Login'})
    }
  } catch (error) {
    
  }
}
</script>