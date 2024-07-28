import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@/assets/_variable.scss'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store/index'
// import store from 'STORE/index.js'
const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(store).use(router).use(vuetify).mount("#app");
