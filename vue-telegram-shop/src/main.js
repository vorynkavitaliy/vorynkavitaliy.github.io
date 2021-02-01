import Vue from 'vue'
import './assets/style.css'
import store from './store'
import App from './App.vue'
import './supportboard/js/min/jquery.min'
import './supportboard/js/init'

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
