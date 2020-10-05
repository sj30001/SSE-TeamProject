import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api/http'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'


Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.use(VueCookies);

// set default config
Vue.$cookies.config('1d') // expire in 1 day


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
