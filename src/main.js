// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import AmfeFlexxible from 'amfe-flexible'
AmfeFlexxible(window, document)
Vue.config.productionTip = false
/* eslint-disable no-new */
if (localStorage.getItem('user')) {
  store.state.userInfo = JSON.parse(localStorage.getItem('user'))
}
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // to.matched.forEach((val, index, arr) => {
  //   if (val.meta.requiresLogin && !store.state.userInfo) {
  //     next({path: '/login'})
  //   }
  // })
  next()
})
