import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/sass/style.scss';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'aos/dist/aos.css';

import AOS from 'aos';
AOS.init();


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
  router,
  mounted() {
    
    AOS.init();
  }
}).$mount('#app')
