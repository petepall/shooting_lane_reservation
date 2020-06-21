import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueHead from 'vue-head';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VueHead);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
