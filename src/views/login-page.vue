<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const loginForm = ref({
      id: '',
      password: ''
    })
    const router = useRouter()
    console.log('router', router)

    const store = useStore()

    const onLogin = async() => {
      try {
        const payload = {
        user_id: loginForm.value.id,
        password: loginForm.value.password,
        country: 'VN'
      }

      const response = await store.dispatch('authentication/loginSubcribe', payload)
      if(response?.data?.isOK) {
        router.push({name: 'Home'})
      }
      } catch (error) {
        throw new Error(error)
      }
    }

    const dialog = ref(false)

    return {
      loginForm,
      onLogin,
      dialog
    }
  }
}
</script>
<template>
  <form class="login-form" @submit.prevent="onLogin">
    <div class="login-form-wrapper">

      <div class="login-item">
        <v-text-field label="id" v-model="loginForm.id"></v-text-field>
      </div>

      <div class="login-item">
        <v-text-field label="password" type="password" v-model="loginForm.password"></v-text-field>
      </div>

      <div class="login-action">
        <v-btn elevated variant="tonal" color="indigo-darken-3" type="submit">
          Login
        </v-btn>
      </div>
    </div>
  </form>
  
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  height: 100vh;

  .login-form-wrapper {
    max-width: 500px;
    min-width: 500px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    
  }
}
</style>