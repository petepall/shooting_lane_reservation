<template>
  <v-container
    fluid
    class="text-center"
  >
    <v-row fluid>
      <v-col
        cols="12"
        md="6"
        offset-md="3"
        justify="center"
      >
        <h1>Your user profile</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="4"
        offset-md="4"
        justify="start"
      >
        <p class="text-start">
          Your profile details are:
        </p>
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          @keypress.enter.native.prevent
          @submit.prevent="signIn"
        >
          <v-tooltip
            right
            color="secondary"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.displayName"
                :rules="displayNameRules"
                name="display-name"
                label="Display name"
                v-bind="attrs"
                required
                v-on="on"
              />
            </template>
            <span>Enter new display name to update</span>
          </v-tooltip>

          <v-tooltip
            right
            color="secondary"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.imageUrl"
                name="image-url"
                label="Image Url"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <span>Enter new Url to profile image to update</span>
          </v-tooltip>

          <v-tooltip
            right
            color="secondary"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                name="email"
                label="E-mail"
                v-bind="attrs"
                required
                v-on="on"
              />
            </template>
            <span>Enter new email to update</span>
          </v-tooltip>

          <v-btn
            :disabled="!valid"
            type="submit"
            color="success"
            class="mr-4"
            @click.prevent="updateUser"
          >
            Update profile
          </v-btn>
          <v-divider class="mt-4" />
        </v-form>
        <v-form
          ref="form"
          v-model="valid2"
          :lazy-validation="lazy"
          @keypress.enter.native.prevent
          @submit.prevent="signIn"
        >
          <v-tooltip
            right
            color="secondary"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="password"
                label="Password"
                v-bind="attrs"
                required
                v-on="on"
                @click:append="show1 = !show1"
              />
            </template>
            <span>Enter new password to update</span>
          </v-tooltip>

          <v-tooltip
            right
            color="secondary"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="user.confirmPassword"
                :rules="[comparePasswords]"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                name="confirmPassword"
                label="Confirm password"
                v-bind="attrs"
                required
                v-on="on"
                @click:append="show2 = !show2"
              />
            </template>
            <span>Enter password confirmation to update</span>
          </v-tooltip>

          <v-btn
            :disabled="!valid2"
            type="submit"
            color="success"
            class="mr-4"
            @click.prevent="updatePassword"
          >
            Update password
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="snackBarTimeout"
      :color="snackBarColor"
    >
      {{ snackBarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
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
import { mapActions } from 'vuex';
import { emailRules, displayNameRules, passwordRules } from '../../helpers/validators';

export default {
  name: 'Profile',

  data() {
    return {
      valid: true,
      valid2: false,
      show1: false,
      show2: false,
      emailRules,
      displayNameRules,
      passwordRules,
      lazy: false,
      user: {
        email: '',
        displayName: '',
        // password: '',
        // confirmPassword: '',
        imageUrl: ''
      },
      snackbar: false,
      snackBarTimeout: 3000,
      snackBarMessage: '',
      snackBarColor: 'success',
      oldEmail: ''
    };
  },

  computed: {
    comparePasswords() {
      return this.user.password !== this.user.confirmPassword
        ? 'Passwords do not match'
        : true;
    },
  },

  mounted() {
    this.getUser();
  },

  methods: {
    ...mapActions('users', ['patch', 'find']),
    getUser() {
      this.$store
        .dispatch('auth/authenticate')
        .then((response) => {
          this.user = response.user;
          this.oldEmail = this.user.email;
        })
        .catch((error) => {
          if (!error.message.includes('Could not find stored JWT')) {
            console.log('Authentication error', error);
          }
          this.$router.push('/404');
        });
    },

    updateUser() {
      if (this.valid) {
        const params = { query: { email: this.user.email } };
        // this.$store.dispatch('users/find', params).then((resolve) => {
        this.find(params).then((resolve) => {
          if ((resolve.data.length === 0 || undefined)
            || (this.user.email === this.oldEmail)) {
            // this.$store.dispatch('users/patch', [this.user._id, this.user]);
            // eslint-disable-next-line no-underscore-dangle
            this.patch([this.user._id, this.user]);
            this.snackBarColor = 'success';
            this.snackBarMessage = 'User profile updated';
            this.snackbar = true;
          } else {
            throw new Error('That email address is unavailable.');
          }
        }).catch((err) => {
          this.snackBarColor = 'error';
          this.snackBarMessage = err.message;
          this.snackbar = true;
        });
      }
    },

    updatePassword() {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api;
        const user = new User(this.user);
        user.update()
          .then(() => {
            // console.log(user);
            this.$router.push('/profile').catch(() => {});
            this.snackBarColor = 'success';
            this.snackBarMessage = 'Password updated';
            this.snackbar = true;
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
            this.snackBarColor = 'error';
            this.snackBarMessage = err.message;
            this.snackbar = true;
          });
      }
    },
  },

  head: {
    title() {
      return {
        inner: 'Profile page'
      };
    },
  },
};

</script>

<style>

</style>
