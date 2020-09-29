import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import './styles/style.css'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA-C-pq6O7O_NYM_bzPWeRP6xRUeY69Ds4",
  authDomain: "votesystem-9957c.firebaseapp.com",
  databaseURL: "https://votesystem-9957c.firebaseio.com",
  projectId: "votesystem-9957c",
  storageBucket: "votesystem-9957c.appspot.com",
  messagingSenderId: "115744970842",
  appId: "1:115744970842:web:e607b826510d9053b0a063"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

