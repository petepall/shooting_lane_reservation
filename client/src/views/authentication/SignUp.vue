<template>
  <v-container fluid>
    <v-col
      cols="12"
      md="6"
      offset-md="3"
      justify="center"
    >
      <v-form
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
    </v-col>
  </v-container>
</template>

<script>
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
    }
  }),

  computed: {
    comparePasswords() {
      return this.user.password !== this.user.confirmPassword
        ? 'Passwords do not match'
        : true;
    },
  },

  methods: {
    signUp() {
      if (this.valid) {
        console.log(this.user);
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
