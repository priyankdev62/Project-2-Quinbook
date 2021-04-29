import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from 'vue-simple-alert'
import * as VueGoogleMaps from "vue2-google-maps";
 
Vue.config.productionTip = false
Vue.use(VueSimpleAlert)


Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places" // necessary for places input
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
