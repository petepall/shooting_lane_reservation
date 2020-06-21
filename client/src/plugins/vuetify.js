import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#B39DDB',
        error: '#B71C1C',
        info: '#D4E157',
        success: '#43A047',
        warning: '#FFC107'
      },
      dark: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#B39DDB',
        error: '#B71C1C',
        info: '#D4E157',
        success: '#43A047',
        warning: '#FFC107'
      }
    }
  }
});

export default vuetify;
