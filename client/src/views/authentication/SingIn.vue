<template>
  <v-container fluid>
    <v-col
      cols="12"
      md="6"
      offset-md="3"
      justify="center"
    >
      <v-form
        v-if="!loading"
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        @keypress.enter.native.prevent
        @submit.prevent="signIn"
      >
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          name="email"
          label="E-mail"
          required
        />

        <v-text-field
          v-model="user.password"
          name="password"
          label="Password"
          type="password"
          required
        />

        <v-btn
          :disabled="!valid"
          type="submit"
          color="success"
          class="mr-4"
          @click.prevent="signIn"
        >
          SignIn
        </v-btn>
      </v-form>
      <v-progress-circular
        v-if="loading"
        :size="70"
        color="amber"
        indeterminate
      />
    </v-col>
    <v-snackbar
      v-model="snackbar"
      :timeout="snackBarTimeout"
      color="error"
    >
      {{ snackBarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="info"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { emailRules } from '../../helpers/validators';

export default {
  name: 'SignIn',
  data: () => ({
    valid: true,
    emailRules,
    lazy: false,
    user: {
      email: '',
      password: '',
    },
    // error: {},
    snackbar: false,
    snackBarTimeout: 3000,
    snackBarMessage: ''
  }),

  computed: {
    ...mapState('auth', { loading: 'isAuthenticatePending' }),
  },

  methods: {
    signIn() {
      if (this.valid) {
        const { email, password } = this.user;
        this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password })
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            const type = error.className;
            // eslint-disable-next-line no-param-reassign
            error = { ...error };
            // eslint-disable-next-line no-param-reassign
            error.message = (type === 'not-authenticated')
              ? 'Incorrect email or password.'
              : 'An error prevented login.';
            this.error = error;
            // console.error(this.error.message);
            this.snackBarMessage = this.error.message;
            this.snackbar = true;
          });
      }
    },
  },
};
</script>

<style>

</style>
