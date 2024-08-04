import { createRouter, createWebHistory } from "vue-router";
import Home from './../views/HomeView.vue'
import Login from './../views/login-page.vue'
import AuthenticationContainer from './../layout/authentication-layout.vue'
const routes = [
  {
    path: "/",
    component: AuthenticationContainer,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
