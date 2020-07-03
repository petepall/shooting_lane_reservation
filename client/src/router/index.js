import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Error from '../views/Error.vue';
import SignUp from '../views/authentication/SignUp.vue';
import SignIn from '../views/authentication/SingIn.vue';
import Profile from '../views/user/Profile.vue';
import Availability from '../views/reservations/Availability.vue';
import LaneReservation from '../views/reservations/LaneReservation.vue';
import store from '../store';

Vue.use(VueRouter);

function authGuard(to, from, next) {
  store
    .dispatch('auth/authenticate')
    .then((response) => {
      console.log(response.user);
      next();
    })
    .catch((error) => {
      if (!error.message.includes('Could not find stored JWT')) {
        console.log('Authentication error', error);
      }
      next('/404');
    });
}

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
    beforeEnter: authGuard,
  },
  {
    path: '/availability',
    name: 'Availability',
    component: Availability,
    meta: { requiresAuth: true },
    beforeEnter: authGuard,
  },
  {
    path: '/reserve',
    name: 'LaneReservation',
    component: LaneReservation,
    meta: { requiresAuth: true },
    beforeEnter: authGuard,
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
