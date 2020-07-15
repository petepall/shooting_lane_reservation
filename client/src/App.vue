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
      <span>&copy; 2020 made by ppallen coding</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    // Lazy loading of components
    TheTopNavbar: () => import('@/components/navigation/TheTopNavbar.vue'),
  },

  data: () => ({
    title: 'Shooting lane reservation system',
  }),

  mounted() {
    this.authenticate()
      .then(() => {
        this.$router.push('/').catch(() => {});
      })
      .catch((error) => {
        const type = error.className;
        // eslint-disable-next-line no-param-reassign
        error = { ...error };
        // eslint-disable-next-line no-param-reassign
        error.message =
          type === 'not-authenticated'
            ? 'Incorrect email or password.'
            : 'An error prevented login.';
        this.error = error;
        // console.error(this.error.message);
        this.snackBarMessage = this.error.message;
        this.snackbar = true;
      });
  },

  methods: { ...mapActions('auth', ['authenticate']) },
};
</script>
