import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import paths from './paths'
// import store from '../store'

Vue.use(Router)

const router = new Router({
  base: 'common-service',
  mode: 'history',
  routes: paths,

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (store.getters.authorized) {
  //     next()
  //     return
  //   }
  //   next('/')
  // } else {
  //   next()
  // }
  next()
})

export default router
