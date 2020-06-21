<template>
  <v-container fluid>
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon @click.prevent="$refs.drawer.drawer = !$refs.drawer.drawer" />
      <v-img
        src="../../assets/shooting-lane.png"
        class="d-none d-md-block shooting-lane mx-3"
      />
      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        class="d-none d-md-block grey--text text--darken-3"
        text
      >
        <v-icon left>
          mdi-login-variant
        </v-icon>
        Login
      </v-btn>
      <v-btn
        class="d-none d-md-block grey--text text--darken-3"
        text
      >
        <v-icon left>
          mdi-logout-variant
        </v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <TheNavigationDrawer ref="drawer" />
  </v-container>
</template>

<script>
import TheNavigationDrawer from '@/components/navigation/TheNavigationDrawer.vue';

export default {
  components: { TheNavigationDrawer },
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data: () => ({

  }),

};
</script>

<style scoped>
.shooting-lane {
  height: 55px;
  max-width: 83px;
}
</style>
