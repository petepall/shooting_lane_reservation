import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';
import SignUp from '../views/authentication/SignUp.vue';
import SignIn from '../views/authentication/SingIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/404',
    name: 'Error',
    component: Error,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404');
  } else {
    next();
  }
});

export default router;
