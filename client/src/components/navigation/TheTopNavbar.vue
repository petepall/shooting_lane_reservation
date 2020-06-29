<template>
  <v-container fluid>
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.prevent="$refs.drawer.drawer = !$refs.drawer.drawer"
      />
      <v-img
        src="../../assets/shooting-lane.png"
        class="hidden-sm-and-down shooting-lane mx-3"
      />
      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
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
          v-if="isAuthenticated"
          text
          class="logout--text"
          @click.prevent="logoutRedirect"
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
      :is-authenticated="isAuthenticated"
      @logout="logoutRedirect"
    />
  </v-container>
</template>

<script>
// import TheNavigationDrawer from '@/components/navigation/TheNavigationDrawer.vue';
import { mapGetters, mapActions } from 'vuex';

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
    ...mapGetters('auth', { isAuthenticated: 'isAuthenticated' }),
    menuItems() {
      let menuItems = [
        { icon: 'mdi-home', title: 'Home', link: '/' },
        { icon: 'mdi-account', title: 'Sign-up', link: '/signUp' },
        { icon: 'mdi-lock-open', title: 'Sign-in', link: '/signIn' }
      ];
      if (this.isAuthenticated) {
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
  },

  methods: {
    ...mapActions('auth', ['logout']),

    logoutRedirect() {
      this.logout().then(() => this.$router.push('/').catch(() => {}));
    }
  }
};

</script>

<style scoped>
.shooting-lane {
  height: 55px;
  max-width: 83px;
}

.v-btn--text:hover {
  color: #43A047;
}

.logout--text:hover {
  color: #B71C1C;
}

</style>
