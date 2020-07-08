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
        @submit.prevent="signUp"
      >
        <v-text-field
          v-model="user.displayName"
          :counter="45"
          :rules="displayNameRules"
          name="display-name"
          label="Display name"
          required
        />

        <v-text-field
          v-model="user.imageUrl"
          name="image-url"
          label="Image Url"
        />

        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          name="email"
          label="E-mail"
          required
        />

        <v-text-field
          v-model="user.password"
          :rules="passwordRules"
          name="password"
          label="Password"
          type="password"
          required
        />

        <v-text-field
          v-model="user.confirmPassword"
          :rules="[comparePasswords]"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          required
        />

        <v-btn
          :disabled="!valid"
          type="submit"
          color="success"
          class="mr-4"
          @click.prevent="signUp"
        >
          SignUp
        </v-btn>

        <v-btn
          color="warning"
          class="mr-4"
          @click="reset"
        >
          Reset Form
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
import { emailRules, displayNameRules, passwordRules } from '../../helpers/validators';

export default {
  name: 'SignUp',
  data: () => ({
    valid: true,
    displayNameRules,
    emailRules,
    passwordRules,
    lazy: false,
    user: {
      displayName: '',
      email: '',
      password: '',
      imageUrl: '',
      confirmPassword: '',
    },
    error: '',
    snackbar: false,
    snackBarTimeout: 3000,
    snackBarMessage: ''
  }),

  computed: {
    comparePasswords() {
      return this.user.password !== this.user.confirmPassword
        ? 'Passwords do not match'
        : true;
    },
    ...mapState('users', { loading: 'isCreatePending' })
  },

  methods: {
    signUp() {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api;
        const user = new User(this.user);
        user.save()
          .then(() => {
            // console.log(user);
            this.$router.push('/signin');
          })
          // Just use the returned error instead of mapping it from the store.
          .catch((err) => {
            // Convert the error to a plain object and add a message.
            const { type, name } = err;
            // eslint-disable-next-line no-param-reassign
            err = { ...err };
            // eslint-disable-next-line no-param-reassign
            err.message = type === 'FeathersError' && name === 'Conflict'
              ? 'That email address is unavailable.'
              : 'An error prevented signup.';
            // console.log(err.message);
            this.snackBarMessage = err.message;
            this.snackbar = true;
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },

    // when using lazy validation map these methods to buttons
    // validate() {
    //   this.$refs.form.validate();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
  },

  head: {
    title() {
      return {
        inner: 'Signup page'
      };
    },
  },
};
</script>

<style>

</style>
