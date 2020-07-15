<template>
  <v-container fluid>
    <div class="text-center error--text text--darken-2">
      <img
        class="mt-16"
        src="../assets/oops2.png"
        alt="Oops 404"
      />
      <h1>Hello there</h1>
      <p>You tried to access a page that is not available 😕</p>
      <h2>{{ pageNotFound }}</h2>
      <div class="return-home">
        <router-link
          class="emo-home"
          to="/"
        >🏠</router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Error',

  data() {
    return {
      pageNotFound: '404 Page Not Found',
    };
  },

  head: {
    title() {
      return {
        inner: this.pageNotFound,
      };
    },
  },
};
</script>

<style scoped>
.return-home {
  margin-top: 2em;
}
.emo-home {
  font-size: 10em;
}
</style>
