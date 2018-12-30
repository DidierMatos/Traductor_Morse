import Vue from 'vue'
import Router from 'vue-router'
import traductor from '@/components/traductor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'traductor',
      component: traductor
    }
  ]
})
