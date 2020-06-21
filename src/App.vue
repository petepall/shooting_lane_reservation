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

    <v-footer app>
    <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TheTopNavbar from '@/components/navigation/TheTopNavbar.vue';

export default {
  name: 'App',

  components: { TheTopNavbar },

  data: () => ({
    title: 'Match reservatie systeem'
  }),
};
</script>
