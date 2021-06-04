import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  data(){
    return {

    }
  },
  methods: {
    hasFeature (featureCd) {
      const allowedFeature = store.state.features.filter( feature => {
          return feature.featureCd == featureCd
      })
      return allowedFeature.length > 0 ? true : false
  },
  }
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
