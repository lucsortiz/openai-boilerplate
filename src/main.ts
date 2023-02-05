import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import Toast, { PluginOptions } from 'vue-toastification';

import '@unocss/reset/tailwind.css';
import 'vue-toastification/dist/index.css';
import 'uno.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

export const app = createApp(App);
const head = createHead();
const options: PluginOptions = {
  timeout: 4000,
};
app.use(Toast, options);

// Router setup (vue-router)
app.use(router);

app.use(head);
app.use(vuetify);
// Mounting the app
app.mount('#app');
