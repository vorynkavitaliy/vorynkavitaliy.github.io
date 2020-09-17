import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
