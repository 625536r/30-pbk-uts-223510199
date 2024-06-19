import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';


const app = createApp(App);
const pinia = createPinia();

app.use(Quasar, {
  plugins: {}, 
});
app.use(pinia).use(router).mount('#app');
