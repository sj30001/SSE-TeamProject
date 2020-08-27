import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewVoter from '@/components/NewVoter'
import ViewVoter from '@/components/ViewVoter'
import EditVoter from '@/components/EditVoter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-voter',
      component: NewVoter
    },
    {
      path: '/edit/:voter_id',
      name: 'edit-voter',
      component: EditVoter
    },
    {
      path: '/:voter_id',
      name: 'view-voter',
      component: ViewVoter
    }

  ]
})
