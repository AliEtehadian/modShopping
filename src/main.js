import { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import Vue3Material from 'vue3-material';
import VueAgile from 'vue-agile';
import App from './App.vue';
import router from './router';
import VeeValidatePlugin from './includes/validation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import store from './store';

let app;

if (!app) {
  app = createApp(App).use(store);
  app.use(router);
  app.use(BootstrapVue3);
  app.use(VeeValidatePlugin);
  app.use(VueAgile);
  app.use(Vue3Material);
  app.mount('#app');
}
