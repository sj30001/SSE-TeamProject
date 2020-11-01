import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
import {VueReCaptcha} from "vue-recaptcha-v3";
import SIdentify from './components/identify'

Vue.use(VueReCaptcha, { siteKey: '6LeYV9wZAAAAAHM53hnx2i5oBtAPldmUbwmcyb6m'});
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.use(SIdentify);

// set default config
Vue.$cookies.config('1d') // expire in 1 day


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
