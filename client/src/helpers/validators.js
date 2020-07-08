/* eslint-disable import/prefer-default-export */
export const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
];

export const displayNameRules = [
  (v) => !!v || 'Name is required',
  (v) => (v && v.length <= 45) || 'Name must be less than 45 characters',
];

export const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{4,})/.test(v)
    || 'Min. 4 characters with at least one capital letter, a number and a special character.'
];
