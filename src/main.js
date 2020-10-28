import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api/http'
import VueAxios from "vue-axios";
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
import {VueReCaptcha} from "vue-recaptcha-v3";

Vue.use(VueReCaptcha, { siteKey: '6LeYV9wZAAAAAHM53hnx2i5oBtAPldmUbwmcyb6m'});
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.prototype.$axios = axios

// set default config
Vue.$cookies.config('1d') // expire in 1 day


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
