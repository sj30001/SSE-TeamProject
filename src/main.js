import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api/http'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

