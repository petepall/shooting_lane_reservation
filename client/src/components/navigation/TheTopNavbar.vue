<template>
  <v-container fluid>
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon
        class="d-none d-flex d-sm-none"
        @click.prevent="$refs.drawer.drawer = !$refs.drawer.drawer"
      />
      <v-img
        src="../../assets/shooting-lane.png"
        class=".d-none d-md-block shooting-lane mx-3"
      />
      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          text
          :to="item.link"
        >
          <v-icon left>
            {{ item.icon }}
          </v-icon>{{ item.title }}
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          text
          @click="onLogout"
        >
          <v-icon left>
            mdi-logout
          </v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <TheNavigationDrawer
      ref="drawer"
      :menu-items="menuItems"
    />
  </v-container>
</template>

<script>
// import TheNavigationDrawer from '@/components/navigation/TheNavigationDrawer.vue';

export default {
  components: {
    TheNavigationDrawer: () => import('@/components/navigation/TheNavigationDrawer.vue')
  },
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data: () => ({
  }),

  computed: {
    menuItems() {
      let menuItems = [
        { icon: 'mdi-home', title: 'Home', link: '/' },
        { icon: 'mdi-account', title: 'Sign-up', link: '/signUp' },
        { icon: 'mdi-lock-open', title: 'Sign-in', link: '/signIn' }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'mdi-home', title: 'Home', link: '/' },
          {
            icon: 'mdi-view-list',
            title: 'Check availability',
            link: '/availability'
          },
          {
            icon: 'mdi-pin',
            title: 'Reserve lane',
            link: '/reserve'
          },
          { icon: 'mdi-face', title: 'Profile', link: '/profile' }
        ];
      }
      return menuItems;
    }
  }
};

</script>

<style scoped>
.shooting-lane {
  height: 55px;
  max-width: 83px;
}
</style>
