import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import store from '../store';

// Lazy loading the route components
const Profile = () => import('../views/user/Profile.vue');
const Availability = () => import('../views/reservations/Availability.vue');
const LaneReservation = () => import('../views/reservations/LaneReservation.vue');
const Error = () => import('../views/Error.vue');
const SignUp = () => import('../views/authentication/SignUp.vue');
const SignIn = () => import('../views/authentication/SingIn.vue');

Vue.use(VueRouter);

function authGuard(to, from, next) {
  store
    .dispatch('auth/authenticate')
    .then(() => {
      // console.log(response.user);
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
  // mode: 'history',
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
