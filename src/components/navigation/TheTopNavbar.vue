<template>
  <v-container fluid>
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <v-app-bar-nav-icon @click.prevent="$refs.drawer.drawer = !$refs.drawer.drawer" />

      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        class="grey--text text--darken-3"
        text
      >
        <v-icon left>
          mdi-exit-to-app
        </v-icon>
        Exit
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
