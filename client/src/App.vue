<template>
  <v-app>
    <TheTopNavbar :title="title" />

    <v-main>
      <v-container
        fluid
        class="mt-n8"
      >
        <router-view />
      </v-container>
    </v-main>

    <v-footer
      app
    >
      <span>&copy; 2020 made by ppallen design</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheTopNavbar from '@/components/navigation/TheTopNavbar.vue';

export default {
  name: 'App',

  components: { TheTopNavbar },

  data: () => ({
    title: 'Shooting lane reservation system'
  }),
};
</script>
