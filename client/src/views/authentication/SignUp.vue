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
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SignUp',
  data: () => ({
    valid: true,
    displayNameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 45) || 'Name must be less than 45 characters',
    ],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{4,})/.test(v)
      || 'Min. 4 characters with at least one capital letter, a number and a special character.'
    ],
    lazy: false,
    user: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    error: ''
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
            console.log(user);
            this.$router.push('/signin');
          })
          // Just use the returned error instead of mapping it from the store.
          .catch((err) => {
            // Convert the error to a plain object and add a message.
            const { type, name } = err;
            console.log(type);
            // eslint-disable-next-line no-param-reassign
            err = { ...err };
            console.log(err);
            // eslint-disable-next-line no-param-reassign
            err.message = type === 'FeathersError' && name === 'Conflict'
              ? 'That email address is unavailable.'
              : 'An error prevented signup.';
            console.log(err.message);
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
};
</script>

<style>

</style>
