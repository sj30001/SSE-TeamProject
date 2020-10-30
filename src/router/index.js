import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
//import Login from '../components/Login.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
// import ForgetPassword from '../components/ForgetPassword.vue'
import ForgetPassword from '../views/SignUp.vue'
// import Vote from '../components/Vote.vue'
import Vote from '../views/Voting.vue'
// import Result from '../components/Result.vue'
import Result from '../views/Result.vue'
// import Console from '../components/console/Console.vue'
import Console from '@/views/Console'
// import User from '../components/console/User.vue'
import User from '../views/User'
// import Candidates from '../components/console/Candidates.vue'
import Candidates from '../views/Candidate.vue'
// import Party from '../components/console/Party.vue'
import Party from '../views/Party.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forget_password',
    name: 'Forget password',
    component: ForgetPassword
  },
  {
    path: '/vote',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/console',
    name: 'Console',
    component: Console
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/party',
    name: 'Party',
    component: Party
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
