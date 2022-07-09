import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import logIn from '@/views/logIn.vue';
import about from '@/views/About.vue';

// import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: logIn,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },

  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
// linkExactActiveClass: "text-yellow-500",
});

// router.beforeEach((to, from, next) => {
//   if (!to.matched.some((record) => record.meta.requiredAuth)) {
//     next()
//     return
//   }
//   if (store.state.auth.userLoggedIn) {
//     next()
//   } else {
//     next({ name: "home" })
//   }
// })
export default router;
