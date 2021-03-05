import './assets/styles/styles.sass'

import Vue from 'vue'
import App from './App/App.vue'
import router from './App/router/'
import store from './App/store/'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
