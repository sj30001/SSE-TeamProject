import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api/http'
import VueAxios from 'vue-axios'
import store from './store/index'
Vue.use(VueAxios,axios)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
